import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{

    configUrl: string;
    constructor(private http: HttpClient) {}


    fetchUser(): Observable<any> {
        this.configUrl = 'https://jsonplaceholder.ir/users';
        return this.http.get(this.configUrl);
    }

    fetchPost(): Observable<any> {
        this.configUrl = 'https://jsonplaceholder.ir/posts';
        return this.http.get(this.configUrl);
    }

}
