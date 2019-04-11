import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class HttpService {
    public canEdit: boolean = false; 

    url: String = "http://localhost:8090";

    constructor(private http: HttpClient) {
     }
// Connection Whith Server On Url
    userDelete(user: User) {
        const body = { logonID: user.logonID }
        return this.http.post( this.url + '/userDelete', body)
    }

    userUpdate(user: User) {
        const body = { logonID: user.logonID, name: user.name, email: user.email, password: user.password };
        return this.http.post(this.url + '/userUpdate', body);
    }

    checkUserAut(id: String) {
        const body = { logonID: id };
        return this.http.post(this.url + '/checkUserAut', body);
    }

    logout(id: String) {
        const body = { logonID: id };
        return this.http.post(this.url + '/logout', body);
    }
    
    getUserInfo(id: String) {
        const body = { logonID: id };
        return this.http.post(this.url + '/userInfo', body);
    }

    postData(user: User) {
        const body = { logonID: user.logonID, name: user.name, password: user.password };
        return this.http.post(this.url + '/user', body);
    }

    checkUser(user: User) {
        const body = { logonID: user.logonID, password: user.password };
        return this.http.post(this.url + '/userCheck', body);
    }

    searchUser(user: User) {
        const body = { name: user.name };
        return this.http.post(this.url + '/userSearch', body);
    }

    getAllUsers() {
        return this.http.get(this.url + '/getAllUsers');
    }
}