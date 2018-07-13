import { KursValutaCreation } from './kursValutaCreation.model';
export class KursnaListaCreation {
  constructor(
    public primenjujeSeOd: Date,
    public naziv: string,
    public pib: string,
    public valute: Array<KursValutaCreation>
  ){}
}
