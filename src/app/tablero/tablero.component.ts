import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  constructor(public juegoService: JuegoService) {
  }

  ngOnInit(): void {

  }
}
