import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteService extends BaseService {
  api: string = environment.webApis.transporteApi;
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);

  }

  get<T>(url: string): Promise<T> {
    const endPoint: string = `${this.api}/${url}`;

    return lastValueFrom(super.get$<T>(endPoint));
  }

  getId<T>(url: string,id:number): Promise<T> {
    const endPoint: string = `${this.api}/${url}/${id}`;

    return lastValueFrom(super.get$<T>(endPoint));
  }

  post<T>(url: string,body: string): Promise<T> {
    const endPoint: string = `${this.api}/${url}`;

    return lastValueFrom(super.post$<T>(endPoint,body));
  }

  put<T>(url: string,body: string): Promise<T> {
    const endPoint: string = `${this.api}/${url}`;
    return lastValueFrom(super.put$<T>(endPoint,body));
  }

  patch<T>(url: string,idEmpleado: number): Promise<T> {
    const endPoint: string = `${this.api}/${url}`;
    return lastValueFrom(super.patch$<T>(endPoint,idEmpleado));
  }


}
