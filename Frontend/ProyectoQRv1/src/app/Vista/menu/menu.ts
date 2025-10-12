import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  isOpen = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faInstagram, faYoutube, faTiktok);
  }

  toggle(): void { this.isOpen = !this.isOpen; }
  close(): void { this.isOpen = false; }
}
