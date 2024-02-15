import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LaCarteComponent} from "./component/la-carte/la-carte.component";
import {MaCommandeComponent} from "./component/ma-commande/ma-commande.component";
import {Produit} from "./models/produit";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppComponent,LaCarteComponent,MaCommandeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'exo-carte';

  commandes: Produit[] = [];

  voteEmit($event: Produit) {
    this.commandes.push($event)
    console.log(this.commandes)
  }

}
