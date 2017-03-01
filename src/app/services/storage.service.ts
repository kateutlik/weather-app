import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    setData<T>(key: string, data: T) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getData<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key));
    }
}