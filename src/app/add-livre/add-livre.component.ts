import { Component, OnInit } from '@angular/core';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

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

  update(numero:number, titre:string, pages:[string]){
    this.livreService.update(numero,titre,pages).subscribe( 
  ajouter =>{
    console.log(ajouter)
    this.listeLivre()
    })
  }

}
