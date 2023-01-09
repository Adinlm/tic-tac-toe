import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  public tablero: any = [];
  tamanoTablero: number = 9;
  jugadorActivo: string = "X";
  contadorTurnos: number = 0;
  elJuegoActivo: boolean = false;
  elJuegoTerminado: boolean = false;
  ganador: boolean = false;

  constructor() {
    this.juegoNuevo();
  }

  juegoNuevo() {
    this.jugadorActivo = "X";
    this.contadorTurnos = 0;
    this.elJuegoActivo = false;
    this.elJuegoTerminado = false;
    this.ganador = false;
    this.tablero = this.crearTablero();
  }

  crearTablero() {
    let tablero = [];
    for (let i = 0; i < 9; i++) {
      tablero.push({ id: 1, state: null });
    };
    return tablero;
  }

  get getTablero() {
    return this.tablero;
  }

  set setTablero(tablero: any) {
    this.tablero = [...tablero];
  }

  cambiarTurnoJugador(clickCuadrado: any) {
    this.actualizaTablero(clickCuadrado);
    if (!this.elJuegoTerminado) this.jugadorActivo = this.jugadorActivo === "X" ? "O" : "X"
    this.contadorTurnos++;
    this.elJuegoTerminado = this.elJuegoTerminado ? true : false;
  }

  actualizaTablero(clickCuadrado: any) {
    this.tablero[clickCuadrado.id].state = clickCuadrado.state;
    if (this.ganador) {
      this.ganador = true;
      this.elJuegoTerminado = false;
      this.elJuegoTerminado = true;
    }
  }

  get juegoAcabado(): boolean {
    return this.contadorTurnos > 8 || this.ganador ? true : false;
  }

  get esGanador(): boolean {
    return this.comprobarDiagonal() || this.comprobarColumnas(this.tablero, "row") || this.comprobarColumnas(this.tablero, "col") ? true : false;
  }

  comprobarColumnas(tablero: any, mode: any) {

    const ROW = mode === "row" ? true : false;
    const DIST = ROW ? 1 : 3;
    const INC = ROW ? 3 : 1;
    const NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC) {
      let primerCuadrado = tablero[i], state;
      let segundoCuadrado = tablero[i + DIST].state;
      let tercerCuadrado = tablero[i + (DIST * 2)].state;

      if (primerCuadrado && segundoCuadrado && tercerCuadrado) {
        if (primerCuadrado === segundoCuadrado && segundoCuadrado == tercerCuadrado) return true;
      }
    }

    return false

  }

  comprobarDiagonal() {
    const timesRun = 2,
      cuadradoMedio = this.tablero[4].state;

    for (let i = 0; i <= timesRun; i += 2) {

      let esquinaSuperior = this.tablero[i].state;
      let esquinaInferior = this.tablero[8 - i].state;

      if (cuadradoMedio && esquinaSuperior && esquinaInferior) {
        if (cuadradoMedio === esquinaSuperior && esquinaSuperior === esquinaInferior) return true;
      }

    }
    return false;
  }

}
