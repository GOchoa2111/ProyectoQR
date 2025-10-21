import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

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
};

@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatRippleModule],
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
      imagenUrl: 'assets/img/ciencias-economicas.jpg', // tu imagen local; cámbiala si deseas
      slug: 'licenciatura-ciencias-juridicas-sociales',
      // miniUrl: 'assets/img/mini-juridicas.jpg',
    },
    {
      nombre: 'Licenciatura en Investigación Criminal y Forense',
      descripcion:
        'Aprende técnicas de investigación, criminalística y análisis forense para apoyar la resolución de casos, con dominio de procedimientos y cadena de custodia.',
      area: 'Ciencias Jurídicas y Sociales',
      nivel: 'Licenciatura',
      icono: 'fingerprint',
      imagenUrl: 'assets/img/ciencias-juridicas-y-sociales.jpg', // tu imagen local; cámbiala si deseas
      slug: 'licenciatura-investigacion-criminal-forense',
    },

    // ==== Ciencias de la Comunicación ====
    {
      nombre: 'Licenciatura en Ciencias de la Comunicación',
      descripcion:
        'Domina estrategias de comunicación, medios y contenidos digitales para gestionar marcas, campañas y proyectos de comunicación institucional y social.',
      area: 'Ciencias de la Comunicación',
      nivel: 'Licenciatura',
      icono: 'campaign',
      imagenUrl: 'assets/img/comunicacion.jpg',
      slug: 'licenciatura-ciencias-comunicacion',
    },

    // ==== Humanidades ====
    {
      nombre: 'Licenciatura en Trabajo Social',
      descripcion:
        'Intervención social con enfoque humano y comunitario. Diseña y ejecuta proyectos para mejorar condiciones de vida y promover la inclusión.',
      area: 'Humanidades',
      nivel: 'Licenciatura',
      icono: 'diversity_3',
      imagenUrl: 'https://placehold.co/1200x800/1e293b/ffffff?text=Trabajo+Social',
      slug: 'licenciatura-trabajo-social',
    },

    // ==== Ciencias Económicas ====
    {
      nombre: 'Licenciatura en Administración de Sistemas Informáticos',
      descripcion:
        'Gestiona infraestructuras y servicios TI, seguridad de la información y soporte a usuarios. Enlace entre procesos de negocio y tecnología.',
      area: 'Ciencias Económicas',
      nivel: 'Licenciatura',
      icono: 'computer',
      imagenUrl: 'https://placehold.co/1200x800/0b1220/ffffff?text=Admin.+Sistemas+Inform%C3%A1ticos',
      slug: 'licenciatura-administracion-sistemas-informaticos',
    },
    {
      nombre: 'Licenciatura en Contaduría Pública y Auditoría',
      descripcion:
        'Contabilidad financiera, fiscal y auditoría con normativa local e internacional. Prepara informes, asegura cumplimiento y aporta a la toma de decisiones.',
      area: 'Ciencias Económicas',
      nivel: 'Licenciatura',
      icono: 'calculate',
      imagenUrl: 'https://placehold.co/1200x800/111827/ffffff?text=Contadur%C3%ADa+y+Auditor%C3%ADa',
      slug: 'licenciatura-contaduria-publica-auditoria',
    },
    {
      nombre: 'Licenciatura en Administración de Empresas',
      descripcion:
        'Planificación, liderazgo y estrategia para gestionar recursos, finanzas y operaciones. Enfocada en resultados y crecimiento organizacional.',
      area: 'Ciencias Económicas',
      nivel: 'Licenciatura',
      icono: 'business_center',
      imagenUrl: 'https://placehold.co/1200x800/1e293b/ffffff?text=Administraci%C3%B3n+de+Empresas',
      slug: 'licenciatura-administracion-empresas',
    },

    // ==== Ciencias de la Salud ====
    {
      nombre: 'Licenciatura en Nutrición',
      descripcion:
        'Promoción de hábitos saludables, evaluación nutricional y planificación de dietas en personas y comunidades, con base científica y enfoque preventivo.',
      area: 'Ciencias de la Salud',
      nivel: 'Licenciatura',
      icono: 'restaurant',
      imagenUrl: 'https://placehold.co/1200x800/0f172a/ffffff?text=Nutrici%C3%B3n',
      slug: 'licenciatura-nutricion',
    },
    {
      nombre: 'Licenciatura en Psicología Clínica',
      descripcion:
        'Evaluación, diagnóstico e intervención psicológica con herramientas basadas en evidencia para la salud mental individual y grupal.',
      area: 'Ciencias de la Salud',
      nivel: 'Licenciatura',
      icono: 'psychology',
      imagenUrl: 'https://placehold.co/1200x800/1e293b/ffffff?text=Psicolog%C3%ADa+Cl%C3%ADnica',
      slug: 'licenciatura-psicologia-clinica',
    },
    {
      nombre: 'Licenciatura en Psicología Industrial',
      descripcion:
        'Optimiza el talento humano y el clima organizacional: selección, capacitación, evaluación del desempeño y desarrollo de personas.',
      area: 'Ciencias de la Salud',
      nivel: 'Licenciatura',
      icono: 'psychology_alt',
      imagenUrl: 'https://placehold.co/1200x800/111827/ffffff?text=Psicolog%C3%ADa+Industrial',
      slug: 'licenciatura-psicologia-industrial',
    },
    {
      nombre: 'Técnico en Enfermería',
      descripcion:
        'Cuidados básicos, apoyo clínico y promoción de la salud bajo protocolos y estándares de calidad, con vocación de servicio.',
      area: 'Ciencias de la Salud',
      nivel: 'Técnico',
      icono: 'medical_services',
      imagenUrl: 'https://placehold.co/1200x800/0b1220/ffffff?text=T%C3%A9cnico+en+Enfermer%C3%ADa',
      slug: 'tecnico-en-enfermeria',
    },

    // ==== Ingeniería ====
    {
      nombre: 'Ingeniería Industrial',
      descripcion:
        'Mejora de procesos, producción y calidad. Diseña soluciones eficientes para la industria con enfoque en costos y productividad.',
      area: 'Ingeniería',
      nivel: 'Ingeniería',
      icono: 'engineering',
      imagenUrl: 'https://placehold.co/1200x800/1f2937/ffffff?text=Ingenier%C3%ADa+Industrial',
      slug: 'ingenieria-industrial',
    },
    {
      nombre: 'Ingeniería en Sistemas de Producción Agrícola (Agronomía)',
      descripcion:
        'Gestión de cultivos y recursos para una producción sostenible. Integra tecnología y buenas prácticas agrícolas.',
      area: 'Ingeniería',
      nivel: 'Ingeniería',
      icono: 'agriculture',
      imagenUrl: 'https://placehold.co/1200x800/0b1220/ffffff?text=Ing.+Sistemas+Producci%C3%B3n+Agr%C3%ADcola',
      slug: 'ingenieria-sistemas-produccion-agricola',
    },

    // ==== Educación ====
    {
      nombre: 'Licenciatura en Educación Primaria Intercultural',
      descripcion:
        'Diseña propuestas pedagógicas pertinentes al contexto, promoviendo inclusión, diversidad y aprendizaje significativo.',
      area: 'Educación',
      nivel: 'Licenciatura',
      icono: 'school',
      imagenUrl: 'https://placehold.co/1200x800/0f172a/ffffff?text=Educaci%C3%B3n+Primaria+Intercultural',
      slug: 'licenciatura-educacion-primaria-intercultural',
    },
    {
      nombre: 'Liderazgo en Educación y Administración Educativa',
      descripcion:
        'Gestión de centros educativos, liderazgo pedagógico y administración de proyectos académicos con enfoque en mejora continua.',
      area: 'Educación',
      nivel: 'Licenciatura',
      icono: 'leaderboard',
      imagenUrl: 'https://placehold.co/1200x800/1e293b/ffffff?text=Liderazgo+en+Educaci%C3%B3n',
      slug: 'licenciatura-liderazgo-educacion-administracion-educativa',
    },
  ]);

  trackByNombre = (_: number, c: Carrera) => c.nombre;
  readonly carrerasVm = computed(() => this.carreras());
}
