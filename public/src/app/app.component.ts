import { Component } from '@angular/core';
import { PublicService } from './public.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _landing: PublicService, private _router: Router) { }

  inSession() {
    this._landing.inSession().subscribe(
      (response) => {
        if (response.json() !== false) {
          this._router.navigate(['/dashboard'])
        }
        else {
          this._router.navigate([''])
        }
      },
      (err) => {
        console.log(err);
      })
  }

  ngOnInit() {
    this.inSession()
  }
}
