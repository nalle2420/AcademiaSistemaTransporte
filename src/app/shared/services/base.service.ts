import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map, tap } from "rxjs";

export abstract class BaseService {

  constructor(protected httpClient: HttpClient) {

  }

  protected get$<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url).pipe(map((x: any) => x.data));
  }

  protected post$<T>(url:string, body:string):Observable<T> {



    return this.httpClient.post<T>(url,body).pipe(map((x: any) => x.message));
  }

  protected put$<T>(url:string, body:string):Observable<T> {

    return this.httpClient.put<T>(url,body).pipe(map((x: any) => x.message));
  }

  protected patch$<T>(url:string, idEmpleado:number):Observable<T> {
    return this.httpClient.patch<T>(`${url}?id=${idEmpleado}`,'').pipe(map((x: any) => x.message));
  }



}
