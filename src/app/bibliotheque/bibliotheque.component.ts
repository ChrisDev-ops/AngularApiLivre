import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {

  constructor(private router: Router, private livreService: LivreService) { }

  ngOnInit() {
    this.listeLivre()
  }

  livres: Livre[]

  listeLivre() {
    console.log('Liste livre')
    this.livreService.getLivre().subscribe(
      (resultat) => {
        console.log("res ", resultat)
        this.livres = resultat
      })
    console.log('fin list livre')
  }

  deleteLivre(livre : Livre) {
    {
      this.livreService.deleteLivre(livre.numero).subscribe(
        resultat => {
          console.log(resultat)
          this.listeLivre()

        })
    }
  }
  ajouterLivre(numero:number, titre:string, pages:[string]){
    
      this.livreService.ajouterLivre(numero,titre,pages).subscribe( 
    ajouter =>{
      console.log(ajouter)
      this.listeLivre()
      })
    }
  }
