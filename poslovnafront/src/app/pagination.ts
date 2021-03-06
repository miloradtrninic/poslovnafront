import {Page} from './model/page.model';
import {AbstractService} from './services/entity-service.service';

export abstract class Pagination<T, N> {
  pageset: Page<T>;
  error: any;
  message: any;
  page: number;
  protected constructor(public entityService: AbstractService<T, N>) {
    this.pageset = new Page<T>();
  }
  range(): Array<number> {
    if (this.pageset.totalPages === 0) { return []; }
    const step = 2;
    const doubleStep = step * 2;
    const start = Math.max(0, this.page - step);
    let end = start + 1 + doubleStep;
    if (end > this.pageset.totalPages) { end = this.pageset.totalPages; }

    const ret = [];
    for (let i = start; i !== end; ++i) {
      ret.push(i);
    }
    return ret;
  }

  pagePlus(count: number): number {
    return this.page + count;
  }
  search(i, searchQuery?: string): void {
    this.page = i;
    window.scrollTo(0, 0);
    this.entityService.getAll(this.page, 10, searchQuery).subscribe(
      (pageset: Page<T>) => {
        this.pageset = pageset;
        this.page = pageset.number;
      },
      (error) => {
        this.error = error;
      }
    );
  }
  public firstPage() {
    this.search(0);
  }

  public lastPage() {
    this.search(this.pageset.totalPages - 1);
  }

  public nextPage() {
    this.search(this.page + 1);
  }
  public previousPage() {
    this.search(this.page - 1);
  }
  public goToPage(n: number) {
    this.search(n);
  }

}
