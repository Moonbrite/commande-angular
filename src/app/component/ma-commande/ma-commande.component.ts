import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produit} from "../../models/produit";
import {NgForOf, NgIf} from "@angular/common";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-ma-commande',
  standalone: true,
  imports: [NgForOf, NgIf,AppComponent],
  templateUrl: './ma-commande.component.html',
  styleUrl: './ma-commande.component.scss'
})
export class MaCommandeComponent {

  @Input() order?: Produit [] = [];

  calculateTotal(): number {
    // @ts-ignore
    return this.order.reduce((total, produit) => total + produit.prix, 0);
  }

}
