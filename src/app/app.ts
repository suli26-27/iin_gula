/*
* File: app.ts
* Author: Erős István
* Copyright: 2026, Erős István
* Group: Szoft II-N
* Date: 2026-09-30
* Github: https://github.com/eros/
* Licenc: MIT
*/
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gula');
}
