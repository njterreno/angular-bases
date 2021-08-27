import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ['Spiderman','Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string[] = [];

borrarHeroe(heroe:number):void{
  this.heroeBorrado = this.heroes.splice(heroe,1);
}

}
