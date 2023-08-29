import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Le Sphinx';
  essai=0;
  nombreSecret = 666;
  tropHaut=false;
  tropBas:boolean = false;
  bingo=false;
  nbEssais=0;



  validerEssai()
  {
    this.tropHaut=false;
    this.tropBas = false;
    this.bingo=false;

    this.nbEssais++;
  

      if (this.essai > this.nombreSecret)
      {
        this.tropHaut = true;
      }
  
      if (this.essai < this.nombreSecret)
         this.tropBas = true;
      
  
      if (this.essai == this.nombreSecret)
         this.bingo=  true;
  }

  changement()
  {
    this.essai = 420000; 

    alert('Valeur de essai:' + this.essai);
  }

}
