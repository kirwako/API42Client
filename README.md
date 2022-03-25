# API42Client

### Getting Started with installing the dependencies

### `npm install`

replace the variables UID, SECRET, REDIRECT_URI in `index.mjs` with your values in 42 app (as you can see in photo):

<img alt="42 app screen shot" align="middle" height = "500" weight = "500" src="https://github.com/kirwa-KO/API42Client/blob/main/42-screen-shot.jpeg">

and after send the user to 42 site to authorize the app [it is the link belof REDIRECT URL or you can click Try this url to see it]

42 redirect the user to the REDIRECT_URI with the code in query string
get the code from the query string (code=7a0cb1a9c5b0fd31a0eb9c5f854fc2386b1edc2179f73c76904d65f5aae4e9bc)

and give it to get_Access_token function like sourcecode in `index.mjs` file

Finally Congratulations 🎉 you will get all user info from 42 api
