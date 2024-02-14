import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produit} from "../../models/produit";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-ma-commande',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CurrencyPipe,
  ],
  templateUrl: './ma-commande.component.html',
  styleUrl: './ma-commande.component.scss'
})
export class MaCommandeComponent {

  @Input() order?: Produit [] = [];

  calculateTotal(): number {
    // @ts-ignore
    return this.order.reduce((total, produit) => total + produit.prix, 0);
  }

  getUniqueProducts(): {produit: Produit, count: number}[] {
    const uniqueProductsMap = new Map<number, {produit: Produit, count: number}>();

    if (this.order && this.order.length > 0) {
      this.order.forEach(produit => {
        if (!uniqueProductsMap.has(<number>produit.id)) {
          // @ts-ignore
            uniqueProductsMap.set(produit.id, {produit: produit, count: 1});
        } else {
          // @ts-ignore
          const existingProduct = uniqueProductsMap.get(produit.id);
          if (existingProduct) {
            existingProduct.count++;
            // @ts-ignore
            uniqueProductsMap.set(produit.id, existingProduct);
          }
        }
      });
    }

    return Array.from(uniqueProductsMap.values());
  }

  removeOneUnit(produit: Produit): void {
    // @ts-ignore
    const index = this.order.findIndex(p => p.id === produit.id);
    if (index !== -1) {
      // @ts-ignore
      this.order.splice(index, 1);
    }
  }

}
