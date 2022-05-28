import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {shareReplay, tap} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string ) {
    const requestOptions = {
      headers: new HttpHeaders({Authorization: "Basic " + btoa(username + ":" + password)}),
      responseType: "text" as "json",
    };
    return this.http.post<string>('/api/token', null, requestOptions).pipe(tap(this.setSession), shareReplay());
  }

  private setSession(token: string) {
    const payload = token.split(".")[1];
    const expiry = JSON.parse(atob(payload)).exp;
    localStorage.setItem('id_token', token);
    localStorage.setItem("expires_at", expiry);
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    if(!this.getExpiration()) return false;
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    if(!expiration) return null;
    const expiresAt = parseInt(expiration);
    return moment.unix(expiresAt);
  }

  checkExpiration() {
    const expiration = localStorage.getItem("expires_at");
    if(!expiration) return null;
    if (moment().isAfter(moment.unix(parseInt(expiration)))) {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
    }
    return true;
  }

  getExp() {
    const expiration = localStorage.getItem("expires_at");
    if(!expiration) return null;
    return expiration;
  }

}
