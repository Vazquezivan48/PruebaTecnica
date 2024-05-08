import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() arreglorecibido: any;

  ngOnInit(){
    console.log(this.arreglorecibido);
  }
}
