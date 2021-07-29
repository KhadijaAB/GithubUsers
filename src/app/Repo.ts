
export class Repo{
    name: string;
    description: string;
    repoUrl: string;
    size: number;
    forks: number;

constructor(reposResponse: any){
   this.name= reposResponse.name;
   this.description= reposResponse.description;
   this.repoUrl= reposResponse.html_url;
   this.size= reposResponse.size;
   this.forks= reposResponse.forks;
 }
}