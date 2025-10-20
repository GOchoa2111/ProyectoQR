import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HistorialMarcaje } from '../../Interface/historial-marcajes';
import { HistorialService } from '../../Service/historial-marcajes.service';

@Injectable({ providedIn: 'root' })
export class HistorialResolver implements Resolve<HistorialMarcaje[] | null> {
  constructor(private service: HistorialService) {}

  resolve(): Observable<HistorialMarcaje[] | null> {
    return this.service.obtenerHistorial().pipe(
      catchError(err => {
        console.error('[HistorialResolver] error fetching historial', err);
        // return empty array on error so component can render gracefully
        return of([] as HistorialMarcaje[]);
      })
    );
  }
}
