import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listUser:any[];
  profile:any[];
  repos: any[];
  username:string;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
      this.getAllGitUsers();
  }

  // To get all git users
  getAllGitUsers(){
    this._profileService.getProfileAllInfo().subscribe(response => {
      console.log(response);
      const data = JSON.stringify(response)
      this.listUser = JSON.parse(data);
      console.log("listUser",this.listUser[0].url);
    })
  }

  // To get Profile
  findProfile(){
  	this._profileService.updateProfile(this.username);
  	this._profileService.getProfileInfo().subscribe(response => {
      console.log(response);
      const data = JSON.stringify(response)
  		this.profile = JSON.parse(data);
  	});

  	this._profileService.getProfileRepos().subscribe(response => {
      console.log(response);
      const data = JSON.stringify(response)
  		this.repos = JSON.parse(data);
  	})  	
  }

  

}
