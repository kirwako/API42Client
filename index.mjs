import Authenticator from './Authenticator.mjs'

const UID = "98a139943caaa9319f98b077445f8e84de4cb23e7668fb010a01b9c0ed20c1a4"
const SECRET = "b34df710754fbe173bfd202cd0bfdf05fcdc4dda3f22b4d3869759r4a1e1c35f"
const REDIRECT_URI = "http://localhost:3000"

var app = new Authenticator(UID, SECRET, REDIRECT_URI)

var token = app.get_Access_token("abd5e34f00b64f5f02f0986e58e214725c4b1e780f9d563c5854615df6aaadcd")

token.then((data) => {
	console.log(data)
})

var isValid = app.is_valid_token("5a76ab8b2c91613e76346d8541589b64d3fd90486608fac828f7ed75fcca5d1c")
isValid.then((data) => {
	console.log(data)
})


var getUserData = app.get_user_data("5a76ab8b2c91513e76346d3441589b64d3dd90489708fac828f7ed75fcca5d1c")
getUserData.then((data) => {
	console.log(data)
})

var test = {
    'access_token':
    'c7572b89d479c4ea3cd9b5de11540c3f54be8b861d75610fe65084697c26b284',
    'token_type': 'bearer',
    'expires_in': 7200,
    'refresh_token':
    '6132a231350122da051f0a09c5c7598040f40751f56952cad96077b70156ba5b',
    'scope': 'public',
    'created_at': 1644261471
}


