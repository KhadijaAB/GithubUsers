"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.name = userResponse.name;
        this.company = userResponse.company;
        this.url = userResponse.html_url;
        this.followers = userResponse.followers;
        //this.public_repos= userResponse.public_repos;
    }
    return User;
}());
exports.User = User;
