import { Component, OnInit, Input } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent implements OnInit {

  constructor(public juegoService: JuegoService) { }

  @Input() cuadrado: any;

  ngOnInit(): void {

  }
//permite cambiar jugador
  cambiarJugador() {
    this.juegoService.elJuegoActivo = true;

    if (this.juegoService.elJuegoActivo && this.cuadrado.state === null) {
      this.cuadrado.state = this.juegoService.jugadorActivo;
      this.juegoService.cambiarTurnoJugador(this.cuadrado);
    }

  }

}
