import { GithubApiService } from "./GithubApiService";
import * as lodash from "lodash";
import { Repo } from "./Repo";
import { User } from "./User";

export let print= new GithubApiService();

if(process.argv.length <3){
  console.log("Please enter user name!")
}else{
  let username = process.argv[2];
print.getUser(username, (user:User) => {
  print.getRepos(username, (repoArray: Repo[]) => {
    let sortedRepo = lodash.sortBy(repoArray,[(repo:Repo)=> repo.forks * -1 ])
    let filteredRepo = lodash.take(sortedRepo, 4);
    user.public_repos = filteredRepo;
    console.log(user);
  });
});
}


