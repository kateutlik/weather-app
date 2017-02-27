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

// function stringifyObjectWithMethods(key: string, value: Object) {
//    if (typeof value === 'function') {
//        return value.toString();
//    } else {
//        return value;
//    }
// }
//
// function parseJsonWithMethods(key: string, value: string) {
//    let prefix: string;
//
//    if (typeof value !== 'string') {
//        return value;
//    }
//
//    if (value.length < 8) {
//        return value;
//    }
//
//    prefix = value.substring(0, 8);
//
//    if (prefix === 'function') {
//        return eval('(' + value + ')');
//    }
//
//    return value;
// }