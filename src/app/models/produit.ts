export class Produit  {
  constructor(nom: string, image: string, prix: number, id: number,description: string) {
    this.nom = nom;
    this.image = image;
    this.prix = prix;
    this.id = id;
    this.description = description
  }
  id:number;
  nom:string;
  image:string;
  prix:number;
  description:string;
}
