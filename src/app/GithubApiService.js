"use strict";
exports.__esModule = true;
exports.GithubApiService = void 0;
var request = require("request");
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUser = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, data) {
            var user = new User_1.User(data);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + "/repos", OPTIONS, function (error, response, data) {
            var repos = data.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
