# API42Client
API42Client is a class that help you interacte with 42 school api and get users data

## Installation
This requires you to have Git and Node.js installed.

```bash
git clone https://github.com/kirwa-KO/API42Client
cd API42Client
npm install
```

#### Configuration

1. Make sure you have run `npm install`
2. Change UID in `index.mjs` with your values in 42 app (like in picture)
3. Change SECRET in `index.mjs` with your values in 42 app (like in picture)
4. Change REDIRECT_URI in `index.mjs` with your values in 42 app (like in picture)

<img alt="42 app screen shot" align="middle" src="https://github.com/kirwa-KO/API42Client/blob/main/42-screen-shot.jpeg">

#### User flow
1. send the user to 42 site to authorize the app
   [it is the link below REDIRECT URL in 42 api page]
2. 42 api will redirect the user to the REDIRECT_URI with the code in query string
3. get the code from the query string (`code=7a0c...5f5aa9bc`)
4. give it to get_Access_token function like sourcecode in `index.mjs` file

## Running

```bash
node index.mjs
```

Finally Congratulations 🎉 you will get all user info from 42 api
