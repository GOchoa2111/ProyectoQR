import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialMarcaje } from '../../Interface/historial-marcajes';
import { HistorialMarcajesService } from '../../Service/historial-marcajes.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-mis-marcajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-marcajes.html',
  styleUrls: ['./mis-marcajes.css']
})
export class MisMarcajesComponent implements OnInit {
  marcajes: HistorialMarcaje[] = [];
  loading = false;
  error: string | null = null;

  constructor(private servicio: HistorialMarcajesService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.servicio.getMyMarcajes()
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: data => { this.marcajes = data; console.debug('[MisMarcajes] recibidos', data); },
        error: err => {
          console.error('[MisMarcajes] error al cargar marcajes', err);
          if (err?.status === 401) {
            // Token missing/invalid/expired: redirigir a login
            this.router.navigate(['/login']);
            return;
          }
          if (err?.name === 'TimeoutError') {
            this.error = 'El servidor tardó demasiado en responder.';
            return;
          }
          this.error = 'No se pudieron cargar los marcajes';
        }
      });
  }
}
