import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'f3571d8e55e169540825';
  private clientsecret = 'a6c2b7d8f7c691e771b1908873e1322028e097c4';

  constructor(private http:HttpClient) { }

  getProfileAllInfo(){
  	return this.http.get("https://api.github.com/users?since=100")
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
