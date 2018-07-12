import {Component, OnInit, ViewChild} from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractService } from './entity-service.service';
import { VrstaPlacanjaModel } from '../model/vrstaplacanja.model';

@Injectable({
providedIn: 'root'
})
export class VrstaPlacanjaService extends AbstractService<VrstaPlacanjaModel, number>  {

  constructor(protected http: HttpClient) {
    super(http, '/vrstaplacanja');
  }
}
