import { Component } from '@angular/core';
import { ProductoService } from './services/producto.service';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  listado: Producto[]=[];
  total:number | undefined;

  constructor(private _productoService: ProductoService){}

  ngOnInit():void{
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data=>{
      this.listado=data;
      this.total=this.listado.length;
    },error =>{
      console.log(error);
    }

    )
  }
}
