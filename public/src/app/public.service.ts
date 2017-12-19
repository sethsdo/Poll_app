import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class PublicService {
  currentPoll = ''
  constructor(private _http: Http) { }

  inSession() {
    // return this._http.get("/api/inSession").map(data => data.json()).toPromise();
    return this._http.get('/api/inSession')
  }

  display() {
    return this._http.get("/api/dashboard").map(data => data.json()).toPromise()
  }

  create(user) {
    return this._http.post('/api/create', user)
  }

  login(user) {
    return this._http.post('/api/login', user)
  }
  logout() {
    return this._http.get('/api/logout')
      .subscribe(
      (response) => {
        console.log('Successful response from the server');
      },
      (err) => {
        console.log(err);
      })
  }

  newPoll(poll){
    return this._http.post('/api/createPoll', poll)
  }

  getPolls(){
    return this._http.get('/api/getPoll')
  }
  getPoll(){
    let id = this.currentPoll
    console.log(id)
    return this._http.get(`/api/poll/${id}`)
  }
  destroy(id){
    return this._http.delete(`/api/destroy/${id}`)
  }
  onLike(option, id){
    console.log(option, id)
    let context={
      'num': option,
      'id': id
    }
    return this._http.put("/api/optionLike", context)
  }

}
