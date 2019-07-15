import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepositoryService } from 'src/app/services/repository/repository.service';
import { Posts, Post } from 'src/app/models/post';

@Injectable()
export class PostService {

    configUrl: string;
    constructor(private http: HttpClient, private repo: RepositoryService) {}

    async fetchAll(): Promise<Posts> {
        return this.repo.send<Posts>('GET', 'posts');
    }

    async fetchOne(id: number): Promise<Post> {
        return this.repo.send<Post>('GET', 'posts/{id}', { id: id });
    } 

    fetchPost(): Observable<object> {
        this.configUrl = 'https://jsonplaceholder.ir/posts';
        return this.http.get(this.configUrl);
    }

    fetchUser(): Observable<object> {
        this.configUrl = 'https://jsonplaceholder.ir/users';
        return this.http.get(this.configUrl);
    }

    fetchComment(): Observable<object> {
        this.configUrl = 'https://jsonplaceholder.ir/comments';
        return this.http.get(this.configUrl);
    }
}