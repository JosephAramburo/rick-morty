import { Observable } from "rxjs";

export interface ApiRestInterface {
    get():Observable<any>;
    getById(id : string):Observable<any>;
    getByIds(ids : string):Observable<any[]>;
}
