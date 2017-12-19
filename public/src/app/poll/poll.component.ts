import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  pollList;
  poll;
  current;
  constructor(private _landing: PublicService, private _router: Router, private route: ActivatedRoute) { }
  displayPoll() {
    this._landing.getPoll().subscribe(
      (response) => {
        console.log(response.json())
        this.pollList = response.json()
        console.log(this.pollList)
      },
      (err) => {
        console.log(err);
      })
  }
  onLike(option, id){
    console.log(option, id)
    this._landing.onLike(option, id).subscribe(
      (response) => {
        console.log(true)
        // this.pollList = response.json()
        // console.log(this.pollList)
      },
      (err) => {
        console.log(err);
      })
    this.displayPoll()
  }

  ngOnInit() {
    this.displayPoll()
    console.log(this.poll)
  }

}
