# API42Client

### Getting Started with installing the dependencies

### `npm install`

replace the variables UID, SECRET, REDIRECT_URI in `index.mjs` with your values in 42 app (as you can see in photo):

<img alt="Wolf3D Game" align="middle" height = "500" weight = "500" src="https://github.com/kirwa-KO/API42Client/blob/main/42-screen-shot.png">

and after send the user to 42 site to authorize the app [it is the link belof REDIRECT URL or you can click Try this url to see it]
like this link: `https://api.intra.42.fr/oauth/authorize?client_id=98a139f98b077445f8e84de4cb23e7668fb010a01b9c0ed20b8a4&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code`

42 redirect the user to the REDIRECT_URI with the code in query string
get the code from the query string (code=7a0cb1a9c5b0fd31a0eb9c5f854fc2386b1edc2179f73c76904d65f5aae4e9bc)

and give it to get_Access_token function like sourcecode in `index.mjs` file

Finally Congratulations :congratulations: you will get all user data
