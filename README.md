# API42Client
API42Client is a class that help you interacte with 42 school api and get users data

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install api42client
```

## example file `run.js`
```js
import Authenticator from "api42client";

// you can see the attached screen shot to know where get this variables
const UID          = "98a139943caaa7645f98b077445f8e84de4cb23e7668fb010a01b9c0ed20b8a4"; // Position -1-
const SECRET       = "b34df710754fbe173bfd202cd0bfdf05fcdc4dda3f22b4d76459a2a1e1c35f"; // Position -2-
const REDIRECT_URI = "http://localhost:3000"; // Position -3-

// 42 authenticator instance
var app = new Authenticator(UID, SECRET, REDIRECT_URI);

// after send the user to 42 site to authorize the app [example of 42 site: https://api.intra.42.fr/oauth/authorize?client_id=98a139f98b077445f8e84de4cb23e7668fb010a01b9c0ed20b8a4&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code]
// 42 redirect the user to the REDIRECT_URI (in this example is: http://localhost:3000) with the code in query string
// like that: http://localhost:3000/?code=7a0cb1a9c5b0fd31a0eb9c5f854fc2386b1edc2179f73c76904d65f5aae4e9bc
// get the code from the query string (code=7a0cb1a9c5b0fd31a0eb9c5f854fc2386b1edc2179f73c76904d65f5aae4e9bc)
// and give it to get_Access_token function like below
var token = app.get_Access_token("85a7e9c0bdbb53d6583064846c087e5e499b6b523f0602c46d1d422078feaf77");

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
}).catch((err) => {
	console.log(err);
});
```

#### Configuration

1. Make sure you have install api42client package `npm i api42client`
2. Change UID in `Position -1-` with your values in 42 app (like in picture)
3. Change SECRET in `Position -2-` with your values in 42 app (like in picture)
4. Change REDIRECT_URI in `Position -3-` with your values in 42 app (like in picture)

<img alt="42 app screen shot" align="middle" src="https://github.com/kirwa-KO/API42Client/blob/main/42-screen-shot.jpeg">

#### User flow
1. send the user to 42 site to authorize the app
   [it is the link below REDIRECT URL in 42 api page]
2. 42 api will redirect the user to the REDIRECT_URI with the code in query string
3. get the code from the query string (`code=7a0c...5f5aa9bc`)
4. give it to get_Access_token function like sourcecode in `index.mjs` file

## Running

```bash
node run.js
```

Finally Congratulations 🎉 you will get all user info from 42 api

## License

  [MIT](LICENSE)
  
## Support
#### This package costs me time to make and maintain every time.
[I am very 😀 about every coffee!]

<a href="https://www.buymeacoffee.com/imranbaali" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>

[npm-downloads-image]: https://badgen.net/npm/dm/api42client
[npm-downloads-url]: https://npmcharts.com/compare/api42client?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/api42client
[npm-install-size-url]: https://packagephobia.com/result?p=api42client
[npm-url]: https://www.npmjs.com/package/api42client
[npm-version-image]: https://badgen.net/npm/v/api42client
