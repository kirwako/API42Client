import TokenType from "./types/TokenType";
import TokenErrorType from "./types/TokenErrorType";
import UserType from "./types/UserType";
import nodeFetch from "node-fetch";

var GET_ACCESS_TOKEN_URL = "https://api.intra.42.fr/oauth/token";
var TEST_ACCESS_TOKEN = "https://api.intra.42.fr/oauth/token/info";
var GET_USER_DATA_URL = "https://api.intra.42.fr/v2/me";

const RESET_BOLD = "\u001b[22m"
const BOLD = "\u001b[1m"
const FG_GREEN = "\x1b[32m";
const RESET_COLOR = "\x1b[0m";
const FG_RED = "\x1b[31m";
const FG_YELLOW = "\x1b[33m";

const BOLD_FG_GREEN = `${BOLD}${FG_GREEN}`;
const RESET_BOLD_FG_GREEN = `${RESET_BOLD}${RESET_COLOR}`;
const BOLD_FG_RED = `${BOLD}${FG_RED}`;
const RESET_BOLD_FG_RED = `${RESET_BOLD}${RESET_COLOR}`;
const BOLD_FG_YELLOW = `${BOLD}${FG_YELLOW}`;
const RESET_BOLD_FG_YELLOW = `${RESET_BOLD}${RESET_COLOR}`;


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
		var res = await nodeFetch(GET_ACCESS_TOKEN_URL, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json",
			},
		});
		
		if (res.ok) {
			return await res.json();
		}

		throw new Error(`${BOLD_FG_RED}Error while getting access token${RESET_BOLD_FG_RED}
       ${BOLD_FG_YELLOW}Please be sure that you use the right:${RESET_BOLD_FG_YELLOW}
         - uid, secret and redirect_uri
         - and the right code getted from the 42 API
`);
	}

	async is_valid_token(access_token: string): Promise<boolean> {
		const header = {
			Authorization: `Bearer ${access_token}`,
		};

		var res = await nodeFetch(TEST_ACCESS_TOKEN, {
			method: "GET",
			headers: header,
		});
		return res.status == 200 ? true : false;
	}

	async get_user_data(access_token: string): Promise<UserType | any> {
		const header = {
			Authorization: `Bearer ${access_token}`,
		};

		var res = await nodeFetch(GET_USER_DATA_URL, {
			method: "GET",
			headers: header,
		});
		if (res.ok) {
			return await res.json();
		}
		throw new Error(`${BOLD_FG_RED}Error while getting user data${RESET_BOLD_FG_RED}
		${BOLD_FG_YELLOW}Please be sure that you have access to user data on 42 api${RESET_BOLD_FG_YELLOW}`);
	}
}

export default Authenticator;
