import TokenType from "./types/TokenType";
import TokenErrorType from "./types/TokenErrorType";
import UserType from "./types/UserType";

var GET_ACCESS_TOKEN_URL = "https://api.intra.42.fr/oauth/token";
var TEST_ACCESS_TOKEN = "https://api.intra.42.fr/oauth/token/info";
var GET_USER_DATA_URL = "https://api.intra.42.fr/v2/me";

var description = `
		Authenticator
		
		The Authenticator make you connect to the 42 School API with the Authorization Code flow,
		this step for geting the Access-token That access token is used by the client to make API calls.
		
		Options:
		- "uid"      		:	your 42 application's UID
		- "secret"  		:	your 42 application's SECRET
		- "redirect_uri"  : 	URL to which 42 will redirect the user after granting authorization
	`;

class Authenticator {
	uid: string;
	secret: string;
	redirect_uri: string;

	constructor(uid: string, secret: string, redirect_uri: string) {
		this.uid = uid;
		this.secret = secret;
		this.redirect_uri = redirect_uri;
	}

	async get_Access_token(
		code: string
	): Promise<TokenType | TokenErrorType | any> {
		var payload = {
			grant_type: "authorization_code",
			client_id: this.uid,
			client_secret: this.secret,
			code: code,
			redirect_uri: this.redirect_uri,
		};
		var res = await fetch(GET_ACCESS_TOKEN_URL, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await res.json();
	}

	async is_valid_token(access_token: string): Promise<boolean> {
		const header = {
			Authorization: `Bearer ${access_token}`,
		};

		var res = await fetch(TEST_ACCESS_TOKEN, {
			method: "GET",
			headers: header,
		});
		return res.status == 200 ? true : false;
	}

	async get_user_data(access_token: string): Promise<UserType | any> {
		const header = {
			Authorization: `Bearer ${access_token}`,
		};

		var res = await fetch(GET_USER_DATA_URL, {
			method: "GET",
			headers: header,
		});
		return await res.json();
	}
}

export default Authenticator;
