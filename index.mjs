import Authenticator from "./Authenticator.mjs";

// you can see the attached screen shot to know where get this variables
const UID          = "98a139943caaa7645f98b077445f8e84de4cb23e7668fb010a01b9c0ed20b8a4";
const SECRET       = "b34df710754fbe173bfd202cd0bfdf05fcdc4dda3f22b4d76459a2a1e1c35f";
const REDIRECT_URI = "http://localhost:3000";

// 42 authenticator instance
var app = new Authenticator(UID, SECRET, REDIRECT_URI);

// after send the user to 42 site to authorize the app [example of 42 site: https://api.intra.42.fr/oauth/authorize?client_id=98a139f98b077445f8e84de4cb23e7668fb010a01b9c0ed20b8a4&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code]
// 42 redirect the user to the REDIRECT_URI (in this example is: http://localhost:3000) with the code in query string
// like that: http://localhost:3000/?code=7a0cb1a9c5b0fd31a0eb9c5f854fc2386b1edc2179f73c76904d65f5aae4e9bc
// get the code from the query string (code=7a0cb1a9c5b0fd31a0eb9c5f854fc2386b1edc2179f73c76904d65f5aae4e9bc)
// and give it to get_Access_token function like below
var token = app.get_Access_token("b5f4c9d15926e2190bb1c746c34250caef7cf50f3e13ba5b118beb9c94b2c0c2");

token.then((data) => {
	// get the acces token of the user
	console.log("======================== auth user Data =========================");
	console.log(data);
	console.log("========================= 42 user data ==========================");
	// get the user info from 42 api
	app.get_user_data(data.access_token).then((data) => {
		console.log(data);
		console.log("=============================================================");
	});
});
