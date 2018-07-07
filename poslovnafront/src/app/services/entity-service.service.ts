import { HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';



export abstract class AbstractService<Entity, Key> {
  actionUrl = 'http://localhost:8080';

  constructor(protected http: HttpClient, protected url: string) {
    this.actionUrl = this.actionUrl + url;
  }
  getAll(): Observable<any[]> {
    return this.http.get(this.actionUrl).map(resp => resp as Entity[]);
  }

  getAllByZone(zoneId: number): Observable<Entity[]> {
    return this.http.get(this.actionUrl + '/getall/' + zoneId)
      .map(resp => resp as Entity[]);
  }

  getOne(id: Key): Observable<any> {
    return this.http.get(`${this.actionUrl}/${id}`)
      .map(resp => resp as Entity);
  }

  insert(toInsert: any): Observable<Entity> {
    console.log(this.actionUrl + '/new');
    return this.http.post(this.actionUrl + '/new', toInsert)
      .map(resp => resp as Entity);
  }

  update(toUpdate: any): Observable<any> {

    return this.http.put(this.actionUrl + '/update/', toUpdate);

  }

}
