import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from '../../core/components/confirm-dialog/confirm-dialog';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

type Carrera = {
  nombre: string;
  descripcion: string;
  area?: string;                 // informativo (no se muestra ya debajo del título)
  nivel?: 'Licenciatura' | 'Ingeniería' | 'Técnico'; // informativo (tampoco se muestra)
  icono: string;
  imagenUrl: string;             // portada superior
  slug?: string;
  miniUrl?: string;              // opcional: miniatura en el cuerpo
  externalUrl?: string;          // opcional: URL externa con la información oficial de la carrera
};

@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatRippleModule, MatDialogModule],
  templateUrl: './carreras.html',
  styleUrls: ['./carreras.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrerasComponent {
  readonly carreras = signal<Carrera[]>([

    // ==== Ciencias Jurídicas y Sociales ====
    {
      nombre: 'Licenciatura en Ciencias Jurídicas y Sociales',
      descripcion:
        'Formación sólida en derecho con enfoque ético y social. Desarrolla competencias para interpretar normativas, litigar y asesorar jurídicamente en el sector público o privado.',
      area: 'Ciencias Jurídicas y Sociales',
      nivel: 'Licenciatura',
      icono: 'gavel',
      imagenUrl: 'assets/img/carreras/ciencias-economicas.jpg', // tu imagen local; cámbiala si deseas
      slug: 'licenciatura-ciencias-juridicas-sociales',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-ciencias-juridicas-y-sociales/',
    },
    {
      nombre: 'Licenciatura en Investigación Criminal y Forense',
      descripcion:
        'Aprende técnicas de investigación, criminalística y análisis forense para apoyar la resolución de casos, con dominio de procedimientos y cadena de custodia.',
      area: 'Ciencias Jurídicas y Sociales',
      nivel: 'Licenciatura',
      icono: 'fingerprint',
      imagenUrl: 'assets/img/carreras/criminalistica-forense.jpg', // tu imagen local; cámbiala si deseas
      slug: 'licenciatura-investigacion-criminal-forense',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-investigacion-criminal-y-forense/',
    },

    // ==== Ciencias de la Comunicación ====
    {
      nombre: 'Licenciatura en Ciencias de la Comunicación',
      descripcion:
        'Domina estrategias de comunicación, medios y contenidos digitales para gestionar marcas, campañas y proyectos de comunicación institucional y social.',
      area: 'Ciencias de la Comunicación',
      nivel: 'Licenciatura',
      icono: 'campaign',
      imagenUrl: 'assets/img/carreras/comunicacion.jpg',
      slug: 'licenciatura-ciencias-comunicacion',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-ciencias-de-la-comunicacion-con-enfasis-en-publicidad/',
    },

    // ==== Humanidades ====
    {
      nombre: 'Licenciatura en Trabajo Social',
      descripcion:
        'Intervención social con enfoque humano y comunitario. Diseña y ejecuta proyectos para mejorar condiciones de vida y promover la inclusión.',
      area: 'Humanidades',
      nivel: 'Licenciatura',
      icono: 'diversity_3',
      imagenUrl: 'assets/img/carreras/trabajo-social.jpg',
      slug: 'licenciatura-trabajo-social',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-trabajo-social/',
    },

    // ==== Ciencias Económicas ====
    {
      nombre: 'Licenciatura en Administración de Sistemas Informáticos',
      descripcion:
        'Gestiona infraestructuras y servicios TI, seguridad de la información y soporte a usuarios. Enlace entre procesos de negocio y tecnología.',
      area: 'Ciencias Económicas',
      nivel: 'Licenciatura',
      icono: 'computer',
      imagenUrl: 'assets/img/carreras/sistemas.jpg',
      slug: 'licenciatura-administracion-sistemas-informaticos',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-administracion-de-sistemas-informaticos/',
    },

    // ==== Contaduria Publica ====
    {
      nombre: 'Licenciatura en Contaduría Pública y Auditoría',
      descripcion:
        'Contabilidad financiera, fiscal y auditoría con normativa local e internacional. Prepara informes, asegura cumplimiento y aporta a la toma de decisiones.',
      area: 'Ciencias Económicas',
      nivel: 'Licenciatura',
      icono: 'calculate',
      imagenUrl: 'assets/img/carreras/auditoria.jpg',
      slug: 'licenciatura-contaduria-publica-auditoria',
      // Ejemplo: URL oficial de la carrera proporcionada por el usuario
      // Añade o edita esta propiedad para apuntar a la página oficial de la carrera
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-contaduria-publica-y-auditoria/',
    },

    // ==== Administración de Empresas ====
    {
      nombre: 'Licenciatura en Administración de Empresas',
      descripcion:
        'Planificación, liderazgo y estrategia para gestionar recursos, finanzas y operaciones. Enfocada en resultados y crecimiento organizacional.',
      area: 'Ciencias Económicas',
      nivel: 'Licenciatura',
      icono: 'business_center',
      imagenUrl: 'assets/img/carreras/administracion-de-empresas.jpg',
      slug: 'licenciatura-administracion-empresas',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-administracion-de-empresas-ele/',
    },

    // ==== Ciencias de la Salud ====
    {
      nombre: 'Licenciatura en Nutrición',
      descripcion:
        'Promoción de hábitos saludables, evaluación nutricional y planificación de dietas en personas y comunidades, con base científica y enfoque preventivo.',
      area: 'Ciencias de la Salud',
      nivel: 'Licenciatura',
      icono: 'restaurant',
      imagenUrl: 'assets/img/carreras/nutricion.jpg',
      slug: 'licenciatura-nutricion',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-nutricion/',
    },

    // ==== Psicología ====

    {
      nombre: 'Licenciatura en Psicología Clínica',
      descripcion:
        'Evaluación, diagnóstico e intervención psicológica con herramientas basadas en evidencia para la salud mental individual y grupal.',
      area: 'Ciencias de la Salud',
      nivel: 'Licenciatura',
      icono: 'psychology',
      imagenUrl: 'assets/img/carreras/psicologia-clinica.jpg',
      slug: 'licenciatura-psicologia-clinica',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-psicologia-clinica/',
    },

    // ==== Psicología Industrial ====

    {
      nombre: 'Licenciatura en Psicología Industrial',
      descripcion:
        'Optimiza el talento humano y el clima organizacional: selección, capacitación, evaluación del desempeño y desarrollo de personas.',
      area: 'Ciencias de la Salud',
      nivel: 'Licenciatura',
      icono: 'psychology_alt',
      imagenUrl: 'assets/img/carreras/psicologia-industrial.jpg',
      slug: 'licenciatura-psicologia-industrial',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-psicologia-industrial/',
    },

    // ==== Técnico en Gestión ambiental ====

    {
      nombre: 'Técnico en Gestión Ambiental',
      descripcion:
        'La carrera de Técnico en Gestión Ambiental comprende el conocimiento crítico, la interpretación y comprensión de los fenómenos socioambientales desde una visión holística, con el fin de contribuir al desarrollo social y humano de la población guatemalteca.',
      area: 'Ciencias Ambientales',
      nivel: 'Técnico',
      icono: 'engineering',
      imagenUrl: 'assets/img/carreras/tecnico-en-gestion-ambiental.jpg',
      slug: 'tecnico-en-gestion-ambiental',
      externalUrl: 'https://uregionalregion2.edu.gt/tecnico-en-gestion-ambiental/',
    },

    // ==== Ingeniería ====

    {
      nombre: 'Ingeniería Industrial',
      descripcion:
        'Mejora de procesos, producción y calidad. Diseña soluciones eficientes para la industria con enfoque en costos y productividad.',
      area: 'Ingeniería',
      nivel: 'Ingeniería',
      icono: 'engineering',
      imagenUrl: 'assets/img/carreras/ingenieria-industrial.jpg',
      slug: 'ingenieria-industrial',
      externalUrl: 'https://uregionalregion2.edu.gt/ingenieria-industrial/',
    },

    // ==== Técnico en Sistemas de Producción Agrícola ====

    {
      nombre: 'Técnico en Sistemas de Producción Agrícola (Agronomía)',
      descripcion:
        'Gestión de cultivos y recursos para una producción sostenible. Integra tecnología y buenas prácticas agrícolas.',
      area: 'Ingeniería',
      nivel: 'Ingeniería',
      icono: 'agriculture',
      imagenUrl: 'assets/img/carreras/sistemas-de-produccion-agricola.jpg',
      slug: 'ingenieria-sistemas-produccion-agricola',
      externalUrl: 'https://uregionalregion2.edu.gt/tecnico-en-sistemas-de-produccion-agricola/',
    },

    // ==== Educación Primaria Intercultural ====

    {
      nombre: 'Licenciatura en Educación Primaria Intercultural',
      descripcion:
        'Diseña propuestas pedagógicas pertinentes al contexto, promoviendo inclusión, diversidad y aprendizaje significativo.',
      area: 'Educación',
      nivel: 'Licenciatura',
      icono: 'school',
      imagenUrl: 'assets/img/carreras/educacion-intercultural.jpg',
      slug: 'licenciatura-educacion-primaria-intercultural',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-educacion-primaria-intercultural/',
    },

    // ==== Licenciatura en Liderazgo en Educación y Administración Educativa ====

    {
      nombre: 'Licenciatura en Liderazgo en Educación y Administración Educativa',
      descripcion:
        'Gestión de centros educativos, liderazgo pedagógico y administración de proyectos académicos con enfoque en mejora continua.',
      area: 'Educación',
      nivel: 'Licenciatura',
      icono: 'leaderboard',
      imagenUrl: 'assets/img/carreras/liderazgo-educacional.jpg',
      slug: 'licenciatura-liderazgo-educacion-administracion-educativa',
      externalUrl: 'https://uregionalregion2.edu.gt/licenciatura-en-licenciatura-en-liderazgo-en-educacion-y-administracion-educativa/',
    },

  ]);

  trackByNombre = (_: number, c: Carrera) => c.nombre;
  readonly carrerasVm = computed(() => this.carreras());

  constructor(private router: Router, private dialog: MatDialog) { }

  verDetalles(c: Carrera) {
    // If the carrera provides an externalUrl, prefer opening it (after user confirmation)
    if (c.externalUrl) {
      const url = c.externalUrl;
      // We use a Material dialog for confirmation to keep UI consistent
      const ref = this.dialog.open(ConfirmDialog, {
        width: '460px',
        data: {
          title: 'Ir a página oficial',
          message: 'Serás redirigido a la página oficial de la Universidad Regional (sede San Raymundo). ¿Deseas continuar?'
        }
      });

      ref.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          window.open(url, '_blank', 'noopener');
        }
      });
      return;
    }

    // For other carreras, navigate to internal detail route if slug exists
    if (c.slug) {
      this.router.navigate(['/carreras', c.slug]);
    }
  }
}