import { KursValutaCreation } from './kursValutaCreation.model';
export class KursnaListaCreation {
  constructor(
    public primenjujeSeOd: Date,
    public PIB: string,
    public valute: Array<KursValutaCreation>
  ){}
}
