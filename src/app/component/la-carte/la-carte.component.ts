import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Produit} from "../../models/produit";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-la-carte',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
  ],
  templateUrl: './la-carte.component.html',
  styleUrl: './la-carte.component.scss'
})
export class LaCarteComponent {

  @Output() voteEmitter = new EventEmitter<Produit>();



  produits:Produit [] = [
    new Produit('Burger Menu','https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg',12,1),
    new Produit('Pizza Menu','https://www.galbani.fr/wp-content/uploads/2017/07/Image7.jpg',14,2),
    new Produit('Sushi Menu','https://img.cuisineaz.com/660x660/2013/12/20/i8238-maki-sushi.jpeg',17,3),
  ]

  order : Produit[]= [];


  produitAddOnCommande(produit: Produit) {
    this.voteEmitter.emit(produit);
    this.order.push(produit);
  }

}
