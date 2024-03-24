import { Component } from '@angular/core';
import { TallyIconsComponent } from "../tally-icons/tally-icons.component";
import { DatenService } from '../shared/daten.service'; 
import { Tally } from '../shared/tally';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tally-list',
  standalone: true,
  imports: [
    TallyIconsComponent,
    CommonModule,
  ],
  templateUrl: './tally-list.component.html',
  styleUrl: './tally-list.component.scss'
})


export class TallyListComponent {

  tallys!: Tally[];
 heini: string = 'Heini';

  constructor(private datenService: DatenService) {

  }

  ngOnInit(): void {
    this.tallys = this.datenService.getTallys();
  }



  // Zählestriche werden generiert
  generateTallyImages(counterValues: number): string {
    let quotient = Math.floor(counterValues / 5);
    let rest = counterValues % 5;
    let output = '';
    for (let i = 1; i <= quotient; i++) {
      output += "<img src='assets/img/5.png' alt='5' height='30px'>";
    }
    if (rest > 0) {
      output += "<img src='assets/img/" + rest + ".png' alt='" + rest + "' height='30px'>";
    }
    return output;
  }


  // Events  
  incrTally(id: number) {
    const index = this.tallys.findIndex(item => item.id === id)
    if (index !== -1) {
      this.tallys[index].counter++;
    }
  }


}