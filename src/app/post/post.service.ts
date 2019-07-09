import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService{

    configUrl: string;
    constructor(private http: HttpClient) {}


    fetchPost(): Observable<any> {
        this.configUrl = 'https://jsonplaceholder.ir/posts';
        return this.http.get(this.configUrl);
    }

    fetchUser(): Observable<any> {
        this.configUrl = 'https://jsonplaceholder.ir/users';
        return this.http.get(this.configUrl);
    }

    fetchComment(): Observable<any> {
        this.configUrl = 'https://jsonplaceholder.ir/comments';
        return this.http.get(this.configUrl);
    }
}