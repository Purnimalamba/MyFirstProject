import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GitService {
  public name;
  public user;
  public urlForRepo = "https://api.github.com/search/repositories?q=";
  public url = "https://api.github.com/users/";
  constructor(private _http: Http) { }


  setRepoName(userName) {
    this.name = userName;
  }

  RepoInfo(): Observable<any> {
    return this._http.get(this.urlForRepo + this.name).map(
      res => res.json()
    )
  }

  setUserName(username) {
    this.user = username;
  }

  userInfo(): Observable<any> {
    return this._http.get(this.url + this.user).map(
    res => res.json()
    )
  }



}
