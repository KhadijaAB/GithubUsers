import { Repo } from "./Repo";

export class User{
    login: string;
    name: string;
    company: String;
    url: string;
    followers: number;
    public_repos?: Repo[];

    constructor(userResponse: any){
        this.login= userResponse.login;
        this.name= userResponse.name;
        this.company= userResponse.company;
        this.url= userResponse.html_url;
        this.followers= userResponse.followers;
        //this.public_repos= userResponse.public_repos;
    }
}