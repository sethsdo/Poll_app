import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pollList;
  currentUser = ''
  dashboard = ''
  constructor(private _landing: PublicService, private _router: Router) { }

  displayUser() {
    this._landing.inSession().subscribe(
      (response) => {
        if (response.json() !== false) {
          console.log(response.json())
          this.currentUser = response.json()
        }
        else {
          this._router.navigate([''])
        }
      },
      (err) => {
        console.log(err);
      })
  }
  displayPoll(){
    this._landing.getPolls().subscribe(
      (response) => {
        console.log(response.json())
        this.pollList = response.json()
        console.log(this.pollList)
      },
      (err) => {
        console.log(err);
      })
  }
  onDelete(id){
    this._landing.destroy(id).subscribe(
      (response) => {
        console.log(response.json())
        this.displayPoll()
      },
      (err) => {
        console.log(err);
      })
  }
  onClick(id){
    this._landing.currentPoll = id
    this._router.navigate(["poll", id])
  }
  onLogout() {
    this._landing.logout()
    this._router.navigate([''])
  }

  ngOnInit() {
    this.displayUser()
    this.displayPoll()
  }

}
