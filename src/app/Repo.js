"use strict";
exports.__esModule = true;
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(reposResponse) {
        this.name = reposResponse.name;
        this.description = reposResponse.description;
        this.repoUrl = reposResponse.html_url;
        this.size = reposResponse.size;
        this.forks = reposResponse.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
