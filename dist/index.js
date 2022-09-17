"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var GET_ACCESS_TOKEN_URL = "https://api.intra.42.fr/oauth/token";
var TEST_ACCESS_TOKEN = "https://api.intra.42.fr/oauth/token/info";
var GET_USER_DATA_URL = "https://api.intra.42.fr/v2/me";
var RESET_BOLD = "\u001b[22m";
var BOLD = "\u001b[1m";
var FG_GREEN = "\x1b[32m";
var RESET_COLOR = "\x1b[0m";
var FG_RED = "\x1b[31m";
var FG_YELLOW = "\x1b[33m";
var BOLD_FG_GREEN = "".concat(BOLD).concat(FG_GREEN);
var RESET_BOLD_FG_GREEN = "".concat(RESET_BOLD).concat(RESET_COLOR);
var BOLD_FG_RED = "".concat(BOLD).concat(FG_RED);
var RESET_BOLD_FG_RED = "".concat(RESET_BOLD).concat(RESET_COLOR);
var BOLD_FG_YELLOW = "".concat(BOLD).concat(FG_YELLOW);
var RESET_BOLD_FG_YELLOW = "".concat(RESET_BOLD).concat(RESET_COLOR);
var description = "\n\t\tAuthenticator\n\t\t\n\t\tThe Authenticator make you connect to the 42 School API with the Authorization Code flow,\n\t\tthis step for geting the Access-token That access token is used by the client to make API calls.\n\t\t\n\t\tOptions:\n\t\t- \"uid\"      \t\t:\tyour 42 application's UID\n\t\t- \"secret\"  \t\t:\tyour 42 application's SECRET\n\t\t- \"redirect_uri\"  : \tURL to which 42 will redirect the user after granting authorization\n\t";
var Authenticator = /** @class */ (function () {
    function Authenticator(uid, secret, redirect_uri) {
        this.uid = uid;
        this.secret = secret;
        this.redirect_uri = redirect_uri;
    }
    Authenticator.prototype.get_Access_token = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            grant_type: "authorization_code",
                            client_id: this.uid,
                            client_secret: this.secret,
                            code: code,
                            redirect_uri: this.redirect_uri,
                        };
                        return [4 /*yield*/, (0, node_fetch_1.default)(GET_ACCESS_TOKEN_URL, {
                                method: "POST",
                                body: JSON.stringify(payload),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 1:
                        res = _a.sent();
                        if (!res.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw new Error("".concat(BOLD_FG_RED, "Error while getting access token").concat(RESET_BOLD_FG_RED, "\n       ").concat(BOLD_FG_YELLOW, "Please be sure that you use the right:").concat(RESET_BOLD_FG_YELLOW, "\n         - uid, secret and redirect_uri\n         - and the right code getted from the 42 API\n"));
                }
            });
        });
    };
    Authenticator.prototype.is_valid_token = function (access_token) {
        return __awaiter(this, void 0, void 0, function () {
            var header, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = {
                            Authorization: "Bearer ".concat(access_token),
                        };
                        return [4 /*yield*/, (0, node_fetch_1.default)(TEST_ACCESS_TOKEN, {
                                method: "GET",
                                headers: header,
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.status == 200 ? true : false];
                }
            });
        });
    };
    Authenticator.prototype.get_user_data = function (access_token) {
        return __awaiter(this, void 0, void 0, function () {
            var header, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = {
                            Authorization: "Bearer ".concat(access_token),
                        };
                        return [4 /*yield*/, (0, node_fetch_1.default)(GET_USER_DATA_URL, {
                                method: "GET",
                                headers: header,
                            })];
                    case 1:
                        res = _a.sent();
                        if (!res.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw new Error("".concat(BOLD_FG_RED, "Error while getting user data").concat(RESET_BOLD_FG_RED, "\n\t\t").concat(BOLD_FG_YELLOW, "Please be sure that you have access to user data on 42 api").concat(RESET_BOLD_FG_YELLOW));
                }
            });
        });
    };
    return Authenticator;
}());
exports.default = Authenticator;
