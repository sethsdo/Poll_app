import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
  errors = ''
  constructor(private _client: PublicService, private _router: Router) { }

  onSubmit() {
    this._client.newPoll(this.poll).subscribe(
      (response) => {
        console.log('Successful response from the server');
        this._router.navigate(["dashboard"])
      },
      (err) => {
        this.errors = err.json().message
        console.log(err.json());
      })
  }

  ngOnInit() {
  }

}
