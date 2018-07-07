import { HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export abstract class AbstractService<Entity, Key> {
  actionUrl = 'http://localhost:8080';

  constructor(protected http: HttpClient, protected url: string) {
    this.actionUrl = this.actionUrl + url;
  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.actionUrl);
  }

  getAllByZone(zoneId: number): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.actionUrl + '/getall/' + zoneId);
  }

  getOne(id: Key): Observable<any> {
    return this.http.get<any>(`${this.actionUrl}/${id}`);
  }

  insert(toInsert: any): Observable<Entity> {
    return this.http.post<Entity>(this.actionUrl + '/new', toInsert);
  }

  update(toUpdate: any): Observable<any> {
    return this.http.put<any>(this.actionUrl + '/update/', toUpdate);
  }

}
