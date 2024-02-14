export class Produit  {
  constructor(nom: string, image: string, prix: number, id: number) {
    this.nom = nom;
    this.image = image;
    this.prix = prix;
    this.id = id;
  }
  id?:number;
  nom?:string;
  image?:string;
  prix?:number;
}
