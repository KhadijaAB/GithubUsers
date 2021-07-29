import * as request from "request";
import { Repo } from "./Repo";
import { User } from "./User";

let OPTIONS: any= {
    headers:{
      "User-Agent": "request"
    },
    json: true
}

export class GithubApiService{
    getUser(userName: string, cb: (user:User)=> any){
      request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response:any, data: any)=>{
       let user = new User(data);
       cb(user);
      })
    }

    getRepos(userName: string, cb: (repoArray:Repo[])=> any){
       request.get('https://api.github.com/users/' + userName + "/repos", OPTIONS, (error: any, response:any, data: any)=>{
         let repos=data.map((repo: any) => new Repo(repo));
         cb(repos);
      })
    }
}