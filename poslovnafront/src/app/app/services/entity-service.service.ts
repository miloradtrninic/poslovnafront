import {HttpClient, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Page} from '../model/page.model';


export abstract class AbstractService<Entity, Key> {
  actionUrl = 'http://localhost:8080/api';
  protected constructor(protected http: HttpClient, protected url: string) {
    this.actionUrl = this.actionUrl + url;
  }
  getAll(page: number, pageSize: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', pageSize.toString());
    return this.http.get<Page<Entity>>(this.actionUrl + '/all', {params: params});
  }
  getOne(id: Key): Observable<any> {
    return this.http.get<Entity>(`${this.actionUrl}/${id}`);
  }
  insert(toInsert: any): Observable<Entity> {
    return this.http.post<Entity>(this.actionUrl + '/insert', toInsert);
  }
  delete(id: Key): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id.toString());
    return this.http.delete<Entity>(this.actionUrl + '/delete');
  }
  update(toUpdate: any): Observable<any> {
    return this.http.put(this.actionUrl + '/update/', toUpdate);
  }

}
