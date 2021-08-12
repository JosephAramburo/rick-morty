import { Observable } from "rxjs";

export interface ApiRestInterface {
    get():Observable<any>;
    getByIds(ids : string):Observable<any[]>;
}
