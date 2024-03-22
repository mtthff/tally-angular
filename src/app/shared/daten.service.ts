import { Injectable } from '@angular/core';
import { Tally } from "./tally";

@Injectable({
  providedIn: 'root'
})
export class DatenService {
  private tallys: Tally[] = [
    { id: 1, name: "gefrühstückt", counter: 32, class: "primary", lock: false, archive: false },
    { id: 2, name: "gelogen", counter: 23, class: "warning", lock: false, archive: false },
    { id: 3, name: "dumm gewesen", counter: 3, class: "success", lock: false, archive: false },
    { id: 4, name: "schlau gewesen", counter: 23, class: "danger", lock: false, archive: false }
  ];

  constructor() { }

  getTallys(): Tally[] {
    return this.tallys;
  }

  // Weitere Methoden wie addTally, updateTally, deleteTally, etc. können hier folgen.
}