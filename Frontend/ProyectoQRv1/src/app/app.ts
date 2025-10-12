import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './Vista/menu/menu';
import { Footer } from './Vista/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}




