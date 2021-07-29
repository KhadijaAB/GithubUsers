"use strict";
exports.__esModule = true;
exports.print = void 0;
var GithubApiService_1 = require("./GithubApiService");
var lodash = require("lodash");
exports.print = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please enter user name!");
}
else {
    var username_1 = process.argv[2];
    exports.print.getUser(username_1, function (user) {
        exports.print.getRepos(username_1, function (repoArray) {
            var sortedRepo = lodash.sortBy(repoArray, [function (repo) { return repo.forks * -1; }]);
            var filteredRepo = lodash.take(sortedRepo, 4);
            user.public_repos = filteredRepo;
            console.log(user);
        });
    });
}
