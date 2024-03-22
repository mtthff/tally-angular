import { Component, Input } from '@angular/core';
import { Tally } from '../shared/tally';
import { DatenService } from '../shared/daten.service'; 

@Component({
  selector: 'app-tally-icons',
  standalone: true,
  imports: [

  ],
  templateUrl: './tally-icons.component.html',
  styleUrl: './tally-icons.component.scss'
})
export class TallyIconsComponent {
  tallys!: Tally[];
  @Input() tally!: Tally; // Definiert die Varibale, die via Property Binding übergeben wurde

  constructor(private datenService: DatenService) {

  }

  ngOnInit(): void {
    this.tallys = this.datenService.getTallys();
  }

  // Imgages
  imgLock: string = 'assets/img/lock_FILL0_wght400_GRAD0_opsz24.svg';
  imgUnlock: string = 'assets/img/lock_open_FILL0_wght400_GRAD0_opsz24.svg';
  imgShare: string = 'assets/img/share_FILL0_wght400_GRAD0_opsz24.svg';
  imgEdit: string = 'assets/img/edit_FILL0_wght400_GRAD0_opsz24.svg';
  imgArchive: string = 'assets/img/archive_FILL0_wght400_GRAD0_opsz24.svg';
  imgUnarchive: string = 'assets/img/unarchive_FILL0_wght400_GRAD0_opsz24.svg';
  imgDelete: string = 'assets/img/delete_FILL0_wght400_GRAD0_opsz24.svg';

// showTally(tally: any): any{
//   console.log(tally); 
// }

// Events zum tally modifizieren 
  shareTally(id: number) {
    console.log("share - id: " + id);
    const index = this.tallys?.findIndex(item => item.id === id);

    if (index !== -1) {
      // this.tallys?[index].name = "Neuer Name";
      // this.tallys?[index].counter = 42;
      // Weitere Eigenschaften nach Bedarf aktualisieren
    }
  }

  editTally(id: number) {
    console.log("edit - id: " + id);
  }
  deleteTally(id: number) {
    console.log("delete - id: " + id);
  }

  lockTally(id: number) {
    const index = this.tallys.findIndex(item => item.id === id);
    if (index !== -1) {
      this.tallys[index].lock = !this.tallys[index].lock;
      if(this.tallys[index].lock){
        let counterButton = document.getElementById('counterButton' + id) as HTMLButtonElement;
        counterButton.disabled = true;
      }else{
        let counterButton = document.getElementById('counterButton' + id) as HTMLButtonElement;
        counterButton.disabled = false;
      }
    }
  }
  
  archiveTally(id: number) {
    console.log("archive - id: " + id);
    const index = this.tallys.findIndex(item => item.id === id);
    if (index !== -1) {
      this.tallys[index].archive = !this.tallys[index].archive;
      if(this.tallys[index].archive){
        let counterButton = document.getElementById('counterButton' + id) as HTMLButtonElement;
        counterButton.disabled = true;
      }else{
        let counterButton = document.getElementById('counterButton' + id) as HTMLButtonElement;
        counterButton.disabled = false;
      }
    }
  }
}