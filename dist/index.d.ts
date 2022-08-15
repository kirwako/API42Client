import TokenType from "./types/TokenType";
import TokenErrorType from "./types/TokenErrorType";
import UserType from "./types/UserType";
declare class Authenticator {
    uid: string;
    secret: string;
    redirect_uri: string;
    constructor(uid: string, secret: string, redirect_uri: string);
    get_Access_token(code: string): Promise<TokenType | TokenErrorType | any>;
    is_valid_token(access_token: string): Promise<boolean>;
    get_user_data(access_token: string): Promise<UserType | any>;
}
export default Authenticator;
