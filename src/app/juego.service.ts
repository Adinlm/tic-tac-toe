import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  public tablero: any = [];
  tamanoTablero: number = 9;
  jugadorActivo: string = "X";
  contadorTurnos: number = 0;
  juegoActivo: boolean = false;
  juegoTerminado: boolean = false;
  ganador: boolean = false;

  constructor() { 
    this.juegoNuevo();
  }

  juegoNuevo(){
    this.jugadorActivo = "X";
    this.contadorTurnos = 0;
    this.juegoActivo = false;
    this.juegoTerminado = false;
    this.ganador = false;
    this.tablero = this.crearTablero();
  }

  crearTablero(){
    let tablero = [];
    for (let i = 0; i<9; i++){
      tablero.push({id:1, state:null});
    };
    return tablero;
  }

  get getTablero(){
    return this.tablero;
  }

  set setTablero(tablero:any){
    this.tablero = [...tablero];
  }
}
