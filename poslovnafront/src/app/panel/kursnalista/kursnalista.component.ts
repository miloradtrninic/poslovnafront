import { KursnaListaView } from './../../model/kursnaListaView.model';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../pagination';
import { KursnaListaCreation } from '../../model/kursnaListaCreation.model';
import { KursnaListaService } from '../../services/kursnalista.service';

@Component({
  selector: 'app-kursnalista',
  templateUrl: './kursnalista.component.html',
  styleUrls: ['./kursnalista.component.css']
})
export class KursnalistaComponent extends Pagination<KursnaListaCreation, number> implements OnInit {
  kursneliste: KursnaListaView[];

  constructor(public kursnaListaService: KursnaListaService) {
    super(kursnaListaService);
   }

   getAll(){
    this.kursnaListaService.getAll(0, 10, '').subscribe((data)=>{
      console.log(data);
      this.kursneliste = data['content'];
    }
  );
   }

  ngOnInit() {
    this.getAll();
  }

}
