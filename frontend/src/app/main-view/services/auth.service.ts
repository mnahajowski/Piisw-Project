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
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expiry = payload.exp;
    const scopes = payload.scope;
    localStorage.setItem('id_token', token);
    localStorage.setItem("expires_at", expiry);
    localStorage.setItem("scopes", scopes);
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("scopes");
  }

  public isLoggedIn() {
    if(!this.getExpiration()) return false;
    return moment().isBefore(this.getExpiration());
  }

  public isTicketer(): boolean {
    return localStorage.getItem("scopes")?.split(" ").includes("Ticketer") ?? false;
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
