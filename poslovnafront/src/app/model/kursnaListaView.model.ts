import { KursValutaCreation } from './kursValutaCreation.model';
export class KursnaListaView {
  constructor(
    public primenjujeSeOd: Date,
    public id: number,
    public naziv: string,
    public valute: Array<KursValutaCreation>
  ){}
}
