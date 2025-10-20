import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_platform-browser.js?v=3a7f64c5";

// src/app/app.config.ts
import { provideBrowserGlobalErrorListeners } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { provideRouter, withViewTransitions } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";

// src/app/Vista/inicio/inicio.ts
import { Component, signal, effect } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { MatButtonModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_button.js?v=3a7f64c5";
import { MatCardModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_card.js?v=3a7f64c5";
import { CommonModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i0 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i1 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_bidi.js?v=3a7f64c5";
import * as i2 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_button.js?v=3a7f64c5";
import * as i3 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_card.js?v=3a7f64c5";
import * as i4 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
function Inicio_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 6);
    i0.\u0275\u0275element(1, "img", 7);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const imagen_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275classProp("active", i_r2 === ctx_r2.imagenActual());
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("src", imagen_r1, i0.\u0275\u0275sanitizeUrl);
  }
}
var Inicio = class _Inicio {
  imagenes = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsLYhNpGPpeu5RTOh8VL9EggGnee6fgW5QvxHN9FVFUnYqYF-IU1w4SHIHV_yUvLMopgua1YoYiyidZ9S0lvABoK8VBMYS3WuqWZoZPt0ZJ-0mQtnQYBqCo4_0QvV6yEQ7OsIdkpKpEC_K/s1600/DJI_0040.jpg",
    "https://uregional.online/pluginfile.php/1/theme_academi/mspotmedia/1739474848/Logo%202.jpg"
  ];
  imagenActual = signal(0, ...ngDevMode ? [{ debugName: "imagenActual" }] : []);
  constructor() {
    effect(() => {
      setInterval(() => {
        this.imagenActual.update((i) => (i + 1) % this.imagenes.length);
      }, 4e3);
    });
  }
  static \u0275fac = function Inicio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inicio)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _Inicio, selectors: [["app-inicio"]], decls: 16, vars: 1, consts: [[1, "carousel-container"], ["class", "carousel-slide", 3, "active", 4, "ngFor", "ngForOf"], [1, "card-container"], ["href", "https://wa.me/50236075643?text=Hola%20necesito%20informaci%C3%B3n", "target", "_blank", "rel", "noopener", "aria-label", "Contactar por WhatsApp", 1, "fab-whatsapp"], ["viewBox", "0 0 32 32", "aria-hidden", "true", "focusable", "false", 1, "wa-icon"], ["d", "M19.11 17.2c-.27-.13-1.57-.77-1.81-.86-.24-.09-.41-.13-.59.13-.18.27-.68.86-.83 1.04-.15.18-.31.2-.58.07-.27-.13-1.15-.42-2.19-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.11-.54.11-.11.27-.29.4-.43.13-.15.18-.25.27-.43.09-.18.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.95-.21-.5-.43-.43-.59-.44l-.5-.01c-.16 0-.43.07-.66.32-.22.25-.87.85-.87 2.08 0 1.23.9 2.41 1.03 2.58.13.18 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.57-.64 1.79-1.25.22-.61.22-1.13.15-1.25-.07-.11-.24-.18-.5-.31zM16.03 4C9.93 4 5 8.93 5 15.03c0 1.94.51 3.76 1.39 5.34L5 27l6.78-1.78a11.02 11.02 0 0 0 4.25.81c6.09 0 11.03-4.93 11.03-11.03S22.12 4 16.03 4zm0 20.17c-1.5 0-2.9-.4-4.12-1.11l-.29-.17-4.02 1.06 1.08-3.92-.19-.3a8.99 8.99 0 1 1 7.54 4.44z"], [1, "carousel-slide"], ["alt", "Imagen del carrusel", 1, "carousel-image", 3, "src"]], template: function Inicio_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0);
      i0.\u0275\u0275template(1, Inicio_div_1_Template, 2, 3, "div", 1);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(2, "div", 2)(3, "mat-card")(4, "mat-card-header")(5, "mat-card-title");
      i0.\u0275\u0275text(6, "Bienvenidos");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(7, "mat-card-subtitle");
      i0.\u0275\u0275text(8, "Control de ingresos con c\xF3digo QR");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(9, "mat-card-content")(10, "p");
      i0.\u0275\u0275text(11, " Este sistema te permite registrar ingresos y egresos de forma r\xE1pida y segura usando c\xF3digos QR. Explora las opciones del men\xFA para comenzar. ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275element(12, "mat-card-actions");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(13, "a", 3);
      i0.\u0275\u0275namespaceSVG();
      i0.\u0275\u0275elementStart(14, "svg", 4);
      i0.\u0275\u0275element(15, "path", 5);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("ngForOf", ctx.imagenes);
    }
  }, dependencies: [
    MatButtonModule,
    i1.Dir,
    i2.MatButton,
    i2.MatMiniFabButton,
    i2.MatIconButton,
    i2.MatFabButton,
    MatCardModule,
    i3.MatCard,
    i3.MatCardActions,
    i3.MatCardAvatar,
    i3.MatCardContent,
    i3.MatCardFooter,
    i3.MatCardHeader,
    i3.MatCardImage,
    i3.MatCardLgImage,
    i3.MatCardMdImage,
    i3.MatCardSmImage,
    i3.MatCardSubtitle,
    i3.MatCardTitle,
    i3.MatCardTitleGroup,
    i3.MatCardXlImage,
    //RouterLinkWithHref, // Descomentar si se usa en la plantilla
    CommonModule,
    i4.NgClass,
    i4.NgComponentOutlet,
    i4.NgForOf,
    i4.NgIf,
    i4.NgTemplateOutlet,
    i4.NgStyle,
    i4.NgSwitch,
    i4.NgSwitchCase,
    i4.NgSwitchDefault,
    i4.NgPlural,
    i4.NgPluralCase,
    i4.AsyncPipe,
    i4.UpperCasePipe,
    i4.LowerCasePipe,
    i4.JsonPipe,
    i4.SlicePipe,
    i4.DecimalPipe,
    i4.PercentPipe,
    i4.TitleCasePipe,
    i4.CurrencyPipe,
    i4.DatePipe,
    i4.I18nPluralPipe,
    i4.I18nSelectPipe,
    i4.KeyValuePipe
  ], styles: ["\n\n.carousel-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 700px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n}\n.carousel-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transform: scale(1.02);\n  transition: opacity 700ms ease, transform 700ms ease;\n}\n.carousel-slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  z-index: 1;\n}\n.carousel-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.button-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n.register-button[_ngcontent-%COMP%] {\n  background-color: #003563;\n  color: #fff;\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n}\n.register-button[_ngcontent-%COMP%]:hover, \n.register-button[_ngcontent-%COMP%]:focus {\n  filter: brightness(1.05);\n  outline: 2px solid rgb(255, 255, 255);\n  outline-offset: 2px;\n}\n.card-container[_ngcontent-%COMP%] {\n  margin-top: 8rem;\n  margin: 32px auto;\n  max-width: 960px;\n  padding: 0 16px;\n  color: #003563;\n}\nmat-card[_ngcontent-%COMP%] {\n  background-color: #003563;\n  box-shadow: 0 2px 8px rgba(255, 253, 253, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 50px;\n  color: #ffffff;\n}\n.fab-whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 5.5rem;\n  right: 1.5rem;\n  z-index: 1000;\n  padding: 0.8rem;\n  background-color: #25d366;\n  border-radius: 9999px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  transition: transform 0.2s ease-in-out;\n}\n.fab-whatsapp[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.wa-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: white;\n}\n/*# sourceMappingURL=inicio.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Inicio, [{
    type: Component,
    args: [{ selector: "app-inicio", standalone: true, imports: [
      MatButtonModule,
      MatCardModule,
      //RouterLinkWithHref, // Descomentar si se usa en la plantilla
      CommonModule
    ], template: '<!-- Carrusel -->\r\n<div class="carousel-container">\r\n  <div\r\n    class="carousel-slide"\r\n    *ngFor="let imagen of imagenes; let i = index"\r\n    [class.active]="i === imagenActual()"\r\n  >\r\n    <img [src]="imagen" alt="Imagen del carrusel" class="carousel-image" />\r\n  </div>\r\n\r\n  <!--<div class="button-overlay">\r\n    <button\r\n      mat-raised-button\r\n      color="primary"\r\n      class="register-button"\r\n      routerLink="/registro"\r\n    >\r\n      Reg\xEDstrate\r\n    </button>\r\n  </div>-->\r\n</div>\r\n\r\n<!-- Card de Angular Material -->\r\n<div class="card-container">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>Bienvenidos</mat-card-title>\r\n      <mat-card-subtitle>Control de ingresos con c\xF3digo QR</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\r\n        Este sistema te permite registrar ingresos y egresos de forma r\xE1pida y segura usando c\xF3digos QR. Explora las opciones del men\xFA para comenzar.\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n     <!--<button mat-button routerLink="/registro">Ir a Registro</button>-->\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- FAB WhatsApp (Boton flotante, fijo abajo a la derecha) -->\r\n<a class="fab-whatsapp" href="https://wa.me/50236075643?text=Hola%20necesito%20informaci%C3%B3n" target="_blank"\r\n  rel="noopener" aria-label="Contactar por WhatsApp">\r\n  <!-- SVG inline WhatsApp (blanco sobre verde) -->\r\n  <svg class="wa-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">\r\n    <path\r\n      d="M19.11 17.2c-.27-.13-1.57-.77-1.81-.86-.24-.09-.41-.13-.59.13-.18.27-.68.86-.83 1.04-.15.18-.31.2-.58.07-.27-.13-1.15-.42-2.19-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.11-.54.11-.11.27-.29.4-.43.13-.15.18-.25.27-.43.09-.18.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.95-.21-.5-.43-.43-.59-.44l-.5-.01c-.16 0-.43.07-.66.32-.22.25-.87.85-.87 2.08 0 1.23.9 2.41 1.03 2.58.13.18 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.57-.64 1.79-1.25.22-.61.22-1.13.15-1.25-.07-.11-.24-.18-.5-.31zM16.03 4C9.93 4 5 8.93 5 15.03c0 1.94.51 3.76 1.39 5.34L5 27l6.78-1.78a11.02 11.02 0 0 0 4.25.81c6.09 0 11.03-4.93 11.03-11.03S22.12 4 16.03 4zm0 20.17c-1.5 0-2.9-.4-4.12-1.11l-.29-.17-4.02 1.06 1.08-3.92-.19-.3a8.99 8.99 0 1 1 7.54 4.44z" />\r\n  </svg>\r\n</a>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n', styles: ["/* src/app/Vista/inicio/inicio.css */\n.carousel-container {\n  position: relative;\n  width: 100%;\n  height: 700px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n}\n.carousel-slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transform: scale(1.02);\n  transition: opacity 700ms ease, transform 700ms ease;\n}\n.carousel-slide.active {\n  opacity: 1;\n  transform: scale(1);\n  z-index: 1;\n}\n.carousel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.button-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n.register-button {\n  background-color: #003563;\n  color: #fff;\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n}\n.register-button:hover,\n.register-button:focus {\n  filter: brightness(1.05);\n  outline: 2px solid rgb(255, 255, 255);\n  outline-offset: 2px;\n}\n.card-container {\n  margin-top: 8rem;\n  margin: 32px auto;\n  max-width: 960px;\n  padding: 0 16px;\n  color: #003563;\n}\nmat-card {\n  background-color: #003563;\n  box-shadow: 0 2px 8px rgba(255, 253, 253, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 50px;\n  color: #ffffff;\n}\n.fab-whatsapp {\n  position: fixed;\n  bottom: 5.5rem;\n  right: 1.5rem;\n  z-index: 1000;\n  padding: 0.8rem;\n  background-color: #25d366;\n  border-radius: 9999px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  transition: transform 0.2s ease-in-out;\n}\n.fab-whatsapp:hover {\n  transform: scale(1.1);\n}\n.wa-icon {\n  width: 30px;\n  height: 30px;\n  fill: white;\n}\n/*# sourceMappingURL=inicio.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(Inicio, { className: "Inicio", filePath: "src/app/vista/inicio/inicio.ts", lineNumber: 19 });
})();
(() => {
  const id = "src%2Fapp%2Fvista%2Finicio%2Finicio.ts%40Inicio";
  function Inicio_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(Inicio, m.default, [i0, i1, i2, i3, i4], [MatButtonModule, MatCardModule, CommonModule, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Inicio_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Inicio_HmrLoad(d.timestamp)));
})();

// src/app/Vista/registro/registro.ts
import { Component as Component3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { CommonModule as CommonModule3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import { FormsModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_forms.js?v=3a7f64c5";
import { MatCardModule as MatCardModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_card.js?v=3a7f64c5";
import { MatFormFieldModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_form-field.js?v=3a7f64c5";
import { MatInputModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_input.js?v=3a7f64c5";
import { MatSelectModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_select.js?v=3a7f64c5";
import { MatIconModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_icon.js?v=3a7f64c5";
import { MatButtonModule as MatButtonModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_button.js?v=3a7f64c5";
import { MatDividerModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_divider.js?v=3a7f64c5";

// src/app/Vista/modal-qr/modal-qr.ts
import { Component as Component2, Input, Output, EventEmitter } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { CommonModule as CommonModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i02 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i12 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
import * as i22 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
function ModalQr_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3");
    i02.\u0275\u0275text(3);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(4, "p");
    i02.\u0275\u0275text(5, "Tu c\xF3digo QR es:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(6, "img", 3);
    i02.\u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    i02.\u0275\u0275listener("click", function ModalQr_div_0_Template_button_click_8_listener() {
      i02.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r1.descargarQR());
    });
    i02.\u0275\u0275text(9, "Descargar QR");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(10, "button", 5);
    i02.\u0275\u0275listener("click", function ModalQr_div_0_Template_button_click_10_listener() {
      i02.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r1.enviarQR());
    });
    i02.\u0275\u0275text(11, "Enviar por correo");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(12, "button", 5);
    i02.\u0275\u0275listener("click", function ModalQr_div_0_Template_button_click_12_listener() {
      i02.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r1.cerrar.emit());
    });
    i02.\u0275\u0275text(13, "Cerrar");
    i02.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance(3);
    i02.\u0275\u0275textInterpolate2("\xA1Bienvenido ", ctx_r1.nombre, " ", ctx_r1.apellido, "!");
    i02.\u0275\u0275advance(3);
    i02.\u0275\u0275property("src", ctx_r1.qrImagen, i02.\u0275\u0275sanitizeUrl);
  }
}
var ModalQr = class _ModalQr {
  http;
  qrImagen = null;
  visible = false;
  nombre = "";
  apellido = "";
  correo = "";
  // ✅ Nuevo input
  cerrar = new EventEmitter();
  constructor(http) {
    this.http = http;
  }
  descargarQR() {
    if (!this.qrImagen)
      return;
    const link = document.createElement("a");
    link.href = this.qrImagen;
    link.download = "codigoQR_estudiante.png";
    link.click();
  }
  enviarQR() {
    if (!this.qrImagen || !this.correo) {
      alert("No se puede enviar el QR. Verifica que el correo est\xE9 disponible.");
      return;
    }
    const payload = {
      correo: this.correo,
      nombre: this.nombre,
      apellido: this.apellido,
      imagenQR: this.qrImagen
    };
    this.http.post("http://109.199.118.104:5111/api/Email/enviar-correo", payload).subscribe({
      next: () => alert("QR enviado por correo exitosamente."),
      error: () => alert("Error al enviar el QR por correo.")
    });
  }
  cerrarModal() {
    this.cerrar.emit();
  }
  static \u0275fac = function ModalQr_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalQr)(i02.\u0275\u0275directiveInject(i12.HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _ModalQr, selectors: [["app-modal-qr"]], inputs: { qrImagen: "qrImagen", visible: "visible", nombre: "nombre", apellido: "apellido", correo: "correo" }, outputs: { cerrar: "cerrar" }, decls: 1, vars: 1, consts: [["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-content"], ["alt", "QR del estudiante", "id", "qrImage", 3, "src"], [1, "botones"], [3, "click"]], template: function ModalQr_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275template(0, ModalQr_div_0_Template, 14, 3, "div", 0);
    }
    if (rf & 2) {
      i02.\u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule2, i22.NgClass, i22.NgComponentOutlet, i22.NgForOf, i22.NgIf, i22.NgTemplateOutlet, i22.NgStyle, i22.NgSwitch, i22.NgSwitchCase, i22.NgSwitchDefault, i22.NgPlural, i22.NgPluralCase, i22.AsyncPipe, i22.UpperCasePipe, i22.LowerCasePipe, i22.JsonPipe, i22.SlicePipe, i22.DecimalPipe, i22.PercentPipe, i22.TitleCasePipe, i22.CurrencyPipe, i22.DatePipe, i22.I18nPluralPipe, i22.I18nSelectPipe, i22.KeyValuePipe], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      to right,\n      #4facfe,\n      #00f2fe);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 30px 25px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n  max-width: 400px;\n  width: 90%;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #0077cc;\n  font-size: 24px;\n  font-weight: bold;\n}\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333333;\n}\n.modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  margin: 20px 0;\n  border: 3px solid #0077cc;\n  border-radius: 12px;\n  transition: transform 0.3s ease;\n}\n.modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.botones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 20px;\n}\n.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  background-color: #0077cc;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #005fa3;\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=modal-qr.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(ModalQr, [{
    type: Component2,
    args: [{ selector: "app-modal-qr", standalone: true, imports: [CommonModule2], template: '\n<div *ngIf="visible" class="modal-overlay">\n  <div class="modal-content">\n    <h3>\xA1Bienvenido {{ nombre }} {{ apellido }}!</h3>\n    <p>Tu c\xF3digo QR es:</p>\n    <img [src]="qrImagen" alt="QR del estudiante" id="qrImage" />\n\n    <div class="botones">\n      <button (click)="descargarQR()">Descargar QR</button>\n      <button (click)="enviarQR()">Enviar por correo</button> <!-- \u2705 Nuevo bot\xF3n -->\n      <button (click)="cerrar.emit()">Cerrar</button>\n    </div>\n  </div>\n</div>\n\n', styles: ['/* src/app/Vista/modal-qr/modal-qr.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      to right,\n      #4facfe,\n      #00f2fe);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.modal-content {\n  background-color: #ffffff;\n  padding: 30px 25px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n  max-width: 400px;\n  width: 90%;\n  animation: fadeIn 0.4s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-content h3 {\n  margin-bottom: 10px;\n  color: #0077cc;\n  font-size: 24px;\n  font-weight: bold;\n}\n.modal-content p {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333333;\n}\n.modal-content img {\n  max-width: 250px;\n  margin: 20px 0;\n  border: 3px solid #0077cc;\n  border-radius: 12px;\n  transition: transform 0.3s ease;\n}\n.modal-content img:hover {\n  transform: scale(1.05);\n}\n.botones {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 20px;\n}\n.botones button {\n  padding: 10px 20px;\n  border: none;\n  background-color: #0077cc;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n.botones button:hover {\n  background-color: #005fa3;\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=modal-qr.css.map */\n'] }]
  }], () => [{ type: i12.HttpClient }], { qrImagen: [{
    type: Input
  }], visible: [{
    type: Input
  }], nombre: [{
    type: Input
  }], apellido: [{
    type: Input
  }], correo: [{
    type: Input
  }], cerrar: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(ModalQr, { className: "ModalQr", filePath: "src/app/vista/modal-qr/modal-qr.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fvista%2Fmodal-qr%2Fmodal-qr.ts%40ModalQr";
  function ModalQr_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(ModalQr, m.default, [i02, i22, i12], [CommonModule2, Component2, Input, Output], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ModalQr_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ModalQr_HmrLoad(d.timestamp)));
})();

// src/app/Vista/registro/registro.ts
import * as i04 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";

// src/app/Service/registro-estudiante.service.ts
var registro_estudiante_service_exports = {};
__export(registro_estudiante_service_exports, {
  RegistroEstudianteService: () => RegistroEstudianteService
});
import { Injectable } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i03 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i13 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
var RegistroEstudianteService = class _RegistroEstudianteService {
  http;
  apiUrl = "http://109.199.118.104:5111/api/Estudiantes";
  constructor(http) {
    this.http = http;
  }
  registrar(estudiante) {
    return this.http.post(this.apiUrl, estudiante);
  }
  static \u0275fac = function RegistroEstudianteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistroEstudianteService)(i03.\u0275\u0275inject(i13.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({ token: _RegistroEstudianteService, factory: _RegistroEstudianteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(RegistroEstudianteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i13.HttpClient }], null);
})();

// src/app/Vista/registro/registro.ts
import * as i23 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/ngx-toastr.js?v=3a7f64c5";
import * as i32 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i42 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_forms.js?v=3a7f64c5";
import * as i5 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_card.js?v=3a7f64c5";
import * as i6 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_bidi.js?v=3a7f64c5";
import * as i7 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_form-field.js?v=3a7f64c5";
import * as i8 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_input.js?v=3a7f64c5";
import * as i9 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_text-field.js?v=3a7f64c5";
import * as i10 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_scrolling.js?v=3a7f64c5";
import * as i11 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_select.js?v=3a7f64c5";
import * as i122 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_icon.js?v=3a7f64c5";
import * as i132 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_button.js?v=3a7f64c5";
import * as i14 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_divider.js?v=3a7f64c5";
function Registro_mat_error_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "El nombre es obligatorio.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "M\xEDnimo 2 caracteres.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_17_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_17_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const nombre_r3 = i04.\u0275\u0275reference(16);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", nombre_r3.errors == null ? null : nombre_r3.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", nombre_r3.errors == null ? null : nombre_r3.errors["minlength"]);
  }
}
function Registro_mat_error_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "El apellido es obligatorio.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "M\xEDnimo 2 caracteres.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_23_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_23_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const apellido_r4 = i04.\u0275\u0275reference(22);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", apellido_r4.errors == null ? null : apellido_r4.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", apellido_r4.errors == null ? null : apellido_r4.errors["minlength"]);
  }
}
function Registro_mat_error_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "El correo es obligatorio.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "Formato de correo inv\xE1lido.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_29_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_29_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const email_r5 = i04.\u0275\u0275reference(28);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", email_r5.errors == null ? null : email_r5.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", email_r5.errors == null ? null : email_r5.errors["email"]);
  }
}
function Registro_mat_error_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "La contrase\xF1a es obligatoria.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "M\xEDnimo 6 caracteres.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_38_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_38_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const contrasena_r6 = i04.\u0275\u0275reference(34);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", contrasena_r6.errors == null ? null : contrasena_r6.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", contrasena_r6.errors == null ? null : contrasena_r6.errors["minlength"]);
  }
}
function Registro_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-option", 36);
    i04.\u0275\u0275text(1);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    i04.\u0275\u0275property("value", r_r7);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate(r_r7);
  }
}
function Registro_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " El rol es obligatorio. ");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_56_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "El carnet es obligatorio para el rol ESTUDIANTE.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_56_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "Use letras/n\xFAmeros (m\xEDn. 4). Puede incluir guion.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_56_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_56_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const numeroCarnet_r8 = i04.\u0275\u0275reference(55);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", numeroCarnet_r8.errors == null ? null : numeroCarnet_r8.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", numeroCarnet_r8.errors == null ? null : numeroCarnet_r8.errors["pattern"]);
  }
}
function Registro_mat_error_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "El tel\xE9fono es obligatorio.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_62_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "Debe tener 8 d\xEDgitos.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_62_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_62_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_62_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const telefono_r9 = i04.\u0275\u0275reference(61);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", telefono_r9.errors == null ? null : telefono_r9.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", telefono_r9.errors == null ? null : telefono_r9.errors["pattern"]);
  }
}
function Registro_mat_error_68_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "La direcci\xF3n es obligatoria.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_68_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "M\xEDnimo 5 caracteres.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_68_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_68_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_68_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const direccion_r10 = i04.\u0275\u0275reference(67);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", direccion_r10.errors == null ? null : direccion_r10.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", direccion_r10.errors == null ? null : direccion_r10.errors["minlength"]);
  }
}
function Registro_mat_error_74_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "El a\xF1o es obligatorio.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_74_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "Ingrese un n\xFAmero (1 a 4 d\xEDgitos).");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_74_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_74_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const anio_r11 = i04.\u0275\u0275reference(73);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", anio_r11.errors == null ? null : anio_r11.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", anio_r11.errors == null ? null : anio_r11.errors["pattern"]);
  }
}
function Registro_mat_error_80_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "La sede es obligatoria.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_80_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span");
    i04.\u0275\u0275text(1, "M\xEDnimo 2 caracteres.");
    i04.\u0275\u0275elementEnd();
  }
}
function Registro_mat_error_80_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275template(1, Registro_mat_error_80_span_1_Template, 2, 0, "span", 19)(2, Registro_mat_error_80_span_2_Template, 2, 0, "span", 19);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i04.\u0275\u0275nextContext();
    const sede_r12 = i04.\u0275\u0275reference(79);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", sede_r12.errors == null ? null : sede_r12.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", sede_r12.errors == null ? null : sede_r12.errors["minlength"]);
  }
}
var Registro = class _Registro {
  servicio;
  toastr;
  zone;
  hide = true;
  // mostrar/ocultar contraseña
  estudiante = {
    nombre: "",
    apellido: "",
    numeroCarnet: "",
    telefono: "",
    direccion: "",
    anio: "",
    sede: "",
    email: "",
    contrasena: "",
    rol: "ESTUDIANTE",
    usuario: ""
    // opcional; puedes dejarlo vacío
  };
  qrGenerado = null;
  qrVisible = false;
  // La propiedad roles se mantiene intacta
  roles = ["ESTUDIANTE", "DOCENTE", "ADMIN"];
  constructor(servicio, toastr, zone) {
    this.servicio = servicio;
    this.toastr = toastr;
    this.zone = zone;
  }
  registrar(form) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.toastr.warning("Por favor completa los campos resaltados.");
      return;
    }
    if (!this.estudiante.usuario)
      delete this.estudiante.usuario;
    this.servicio.registrar(this.estudiante).subscribe({
      next: (respuesta) => {
        this.qrGenerado = respuesta?.imagenQR ?? null;
        this.qrVisible = !!this.qrGenerado;
        this.zone.run(() => {
          setTimeout(() => {
            this.toastr.success("Estudiante registrado correctamente", "\xC9xito");
          }, 60);
        });
        form.resetForm({
          rol: "ESTUDIANTE"
        });
      },
      error: (error) => {
        console.error("Error al registrar:", error);
        if (error.status === 400 && error.error) {
          this.toastr.error(error.error);
        } else {
          this.toastr.error("Error inesperado al registrar estudiante");
        }
      }
    });
  }
  // Se llama cuando el modal emite el evento (cerrar)
  cerrarQR() {
    this.qrVisible = false;
    this.qrGenerado = null;
  }
  static \u0275fac = function Registro_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Registro)(i04.\u0275\u0275directiveInject(RegistroEstudianteService), i04.\u0275\u0275directiveInject(i23.ToastrService), i04.\u0275\u0275directiveInject(i04.NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _Registro, selectors: [["app-registro"]], decls: 87, vars: 30, consts: [["form", "ngForm"], ["nombre", "ngModel"], ["apellido", "ngModel"], ["email", "ngModel"], ["contrasena", "ngModel"], ["rol", "ngModel"], ["numeroCarnet", "ngModel"], ["telefono", "ngModel"], ["direccion", "ngModel"], ["anio", "ngModel"], ["sede", "ngModel"], [1, "np-card"], [1, "np-title"], [1, "m-0"], [1, "np-subtitle"], ["novalidate", "", 1, "np-form", 3, "ngSubmit"], [1, "np-col"], ["appearance", "outline"], ["matInput", "", "name", "nombre", "required", "", "minlength", "2", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["matInput", "", "name", "apellido", "required", "", "minlength", "2", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", "name", "email", "required", "", "email", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "contrasena", "required", "", "minlength", "6", 3, "ngModelChange", "type", "ngModel"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Mostrar/ocultar contrase\xF1a", 3, "click"], ["name", "rol", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "usuario", "placeholder", "Si lo dejas vac\xEDo, se autogenera", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "numeroCarnet", "pattern", "^[A-Za-z0-9\\-]{4,}$", 3, "ngModelChange", "ngModel", "required"], ["matInput", "", "name", "telefono", "required", "", "pattern", "^[0-9]{8}$", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "direccion", "required", "", "minlength", "5", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "anio", "required", "", "pattern", "^[0-9]{1,4}$", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "sede", "required", "", "minlength", "2", 3, "ngModelChange", "ngModel"], [1, "np-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "mr-1"], [3, "cerrar", "visible", "qrImagen", "nombre", "apellido", "correo"], [3, "value"]], template: function Registro_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i04.\u0275\u0275getCurrentView();
      i04.\u0275\u0275elementStart(0, "mat-card", 11)(1, "div", 12)(2, "mat-icon");
      i04.\u0275\u0275text(3, "person_add");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(4, "div")(5, "h2", 13);
      i04.\u0275\u0275text(6, "Registro Usuarios");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(7, "p", 14);
      i04.\u0275\u0275text(8, "Completa los datos para crear la cuenta y generar el QR");
      i04.\u0275\u0275elementEnd()()();
      i04.\u0275\u0275elementStart(9, "form", 15, 0);
      i04.\u0275\u0275listener("ngSubmit", function Registro_Template_form_ngSubmit_9_listener() {
        i04.\u0275\u0275restoreView(_r1);
        const form_r2 = i04.\u0275\u0275reference(10);
        return i04.\u0275\u0275resetView(ctx.registrar(form_r2));
      });
      i04.\u0275\u0275elementStart(11, "div", 16)(12, "mat-form-field", 17)(13, "mat-label");
      i04.\u0275\u0275text(14, "Nombre");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(15, "input", 18, 1);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_15_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.nombre, $event) || (ctx.estudiante.nombre = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(17, Registro_mat_error_17_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(18, "mat-form-field", 17)(19, "mat-label");
      i04.\u0275\u0275text(20, "Apellido");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(21, "input", 20, 2);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_21_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.apellido, $event) || (ctx.estudiante.apellido = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(23, Registro_mat_error_23_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(24, "mat-form-field", 17)(25, "mat-label");
      i04.\u0275\u0275text(26, "Correo electr\xF3nico");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(27, "input", 21, 3);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_27_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.email, $event) || (ctx.estudiante.email = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(29, Registro_mat_error_29_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(30, "mat-form-field", 17)(31, "mat-label");
      i04.\u0275\u0275text(32, "Contrase\xF1a");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(33, "input", 22, 4);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_33_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.contrasena, $event) || (ctx.estudiante.contrasena = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(35, "button", 23);
      i04.\u0275\u0275listener("click", function Registro_Template_button_click_35_listener() {
        i04.\u0275\u0275restoreView(_r1);
        return i04.\u0275\u0275resetView(ctx.hide = !ctx.hide);
      });
      i04.\u0275\u0275elementStart(36, "mat-icon");
      i04.\u0275\u0275text(37);
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275template(38, Registro_mat_error_38_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(39, "mat-form-field", 17)(40, "mat-label");
      i04.\u0275\u0275text(41, "Rol");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(42, "mat-select", 24, 5);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_mat_select_ngModelChange_42_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.rol, $event) || (ctx.estudiante.rol = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275template(44, Registro_mat_option_44_Template, 2, 2, "mat-option", 25);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(45, Registro_mat_error_45_Template, 2, 0, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(46, "mat-form-field", 17)(47, "mat-label");
      i04.\u0275\u0275text(48, "Usuario (opcional)");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(49, "input", 26);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_49_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.usuario, $event) || (ctx.estudiante.usuario = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd()()();
      i04.\u0275\u0275elementStart(50, "div", 16)(51, "mat-form-field", 17)(52, "mat-label");
      i04.\u0275\u0275text(53, "N\xFAmero de Carnet");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(54, "input", 27, 6);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_54_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.numeroCarnet, $event) || (ctx.estudiante.numeroCarnet = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(56, Registro_mat_error_56_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(57, "mat-form-field", 17)(58, "mat-label");
      i04.\u0275\u0275text(59, "Tel\xE9fono");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(60, "input", 28, 7);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_60_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.telefono, $event) || (ctx.estudiante.telefono = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(62, Registro_mat_error_62_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(63, "mat-form-field", 17)(64, "mat-label");
      i04.\u0275\u0275text(65, "Direcci\xF3n");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(66, "input", 29, 8);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_66_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.direccion, $event) || (ctx.estudiante.direccion = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(68, Registro_mat_error_68_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(69, "mat-form-field", 17)(70, "mat-label");
      i04.\u0275\u0275text(71, "A\xF1o");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(72, "input", 30, 9);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_72_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.anio, $event) || (ctx.estudiante.anio = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(74, Registro_mat_error_74_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(75, "mat-form-field", 17)(76, "mat-label");
      i04.\u0275\u0275text(77, "Sede");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(78, "input", 31, 10);
      i04.\u0275\u0275twoWayListener("ngModelChange", function Registro_Template_input_ngModelChange_78_listener($event) {
        i04.\u0275\u0275restoreView(_r1);
        i04.\u0275\u0275twoWayBindingSet(ctx.estudiante.sede, $event) || (ctx.estudiante.sede = $event);
        return i04.\u0275\u0275resetView($event);
      });
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275template(80, Registro_mat_error_80_Template, 3, 2, "mat-error", 19);
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275elementStart(81, "div", 32)(82, "button", 33)(83, "mat-icon", 34);
      i04.\u0275\u0275text(84, "save");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275text(85, " Registrar ");
      i04.\u0275\u0275elementEnd()()()();
      i04.\u0275\u0275elementStart(86, "app-modal-qr", 35);
      i04.\u0275\u0275listener("cerrar", function Registro_Template_app_modal_qr_cerrar_86_listener() {
        i04.\u0275\u0275restoreView(_r1);
        return i04.\u0275\u0275resetView(ctx.cerrarQR());
      });
      i04.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const form_r2 = i04.\u0275\u0275reference(10);
      const nombre_r3 = i04.\u0275\u0275reference(16);
      const apellido_r4 = i04.\u0275\u0275reference(22);
      const email_r5 = i04.\u0275\u0275reference(28);
      const contrasena_r6 = i04.\u0275\u0275reference(34);
      const rol_r13 = i04.\u0275\u0275reference(43);
      const numeroCarnet_r8 = i04.\u0275\u0275reference(55);
      const telefono_r9 = i04.\u0275\u0275reference(61);
      const direccion_r10 = i04.\u0275\u0275reference(67);
      const anio_r11 = i04.\u0275\u0275reference(73);
      const sede_r12 = i04.\u0275\u0275reference(79);
      i04.\u0275\u0275advance(15);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.nombre);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", nombre_r3.invalid && (nombre_r3.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.apellido);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", apellido_r4.invalid && (apellido_r4.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.email);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", email_r5.invalid && (email_r5.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275property("type", ctx.hide ? "password" : "text");
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.contrasena);
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275textInterpolate(ctx.hide ? "visibility" : "visibility_off");
      i04.\u0275\u0275advance();
      i04.\u0275\u0275property("ngIf", contrasena_r6.invalid && (contrasena_r6.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.rol);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngForOf", ctx.roles);
      i04.\u0275\u0275advance();
      i04.\u0275\u0275property("ngIf", rol_r13.invalid && (rol_r13.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.usuario);
      i04.\u0275\u0275advance(5);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.numeroCarnet);
      i04.\u0275\u0275property("required", ctx.estudiante.rol === "ESTUDIANTE");
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", numeroCarnet_r8.invalid && (numeroCarnet_r8.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.telefono);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", telefono_r9.invalid && (telefono_r9.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.direccion);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", direccion_r10.invalid && (direccion_r10.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.anio);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", anio_r11.invalid && (anio_r11.touched || form_r2.submitted));
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.estudiante.sede);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", sede_r12.invalid && (sede_r12.touched || form_r2.submitted));
      i04.\u0275\u0275advance(6);
      i04.\u0275\u0275property("visible", ctx.qrVisible)("qrImagen", ctx.qrGenerado)("nombre", ctx.estudiante.nombre)("apellido", ctx.estudiante.apellido)("correo", ctx.estudiante.email);
    }
  }, dependencies: [
    CommonModule3,
    i32.NgClass,
    i32.NgComponentOutlet,
    i32.NgForOf,
    i32.NgIf,
    i32.NgTemplateOutlet,
    i32.NgStyle,
    i32.NgSwitch,
    i32.NgSwitchCase,
    i32.NgSwitchDefault,
    i32.NgPlural,
    i32.NgPluralCase,
    FormsModule,
    i42.\u0275NgNoValidate,
    i42.NgSelectOption,
    i42.\u0275NgSelectMultipleOption,
    i42.DefaultValueAccessor,
    i42.NumberValueAccessor,
    i42.RangeValueAccessor,
    i42.CheckboxControlValueAccessor,
    i42.SelectControlValueAccessor,
    i42.SelectMultipleControlValueAccessor,
    i42.RadioControlValueAccessor,
    i42.NgControlStatus,
    i42.NgControlStatusGroup,
    i42.RequiredValidator,
    i42.MinLengthValidator,
    i42.MaxLengthValidator,
    i42.PatternValidator,
    i42.CheckboxRequiredValidator,
    i42.EmailValidator,
    i42.MinValidator,
    i42.MaxValidator,
    i42.NgModel,
    i42.NgModelGroup,
    i42.NgForm,
    MatCardModule2,
    i5.MatCard,
    i5.MatCardActions,
    i5.MatCardAvatar,
    i5.MatCardContent,
    i5.MatCardFooter,
    i5.MatCardHeader,
    i5.MatCardImage,
    i5.MatCardLgImage,
    i5.MatCardMdImage,
    i5.MatCardSmImage,
    i5.MatCardSubtitle,
    i5.MatCardTitle,
    i5.MatCardTitleGroup,
    i5.MatCardXlImage,
    i6.Dir,
    MatFormFieldModule,
    i7.MatFormField,
    i7.MatLabel,
    i7.MatHint,
    i7.MatError,
    i7.MatPrefix,
    i7.MatSuffix,
    MatInputModule,
    i8.MatInput,
    i9.CdkAutofill,
    i9.CdkTextareaAutosize,
    MatSelectModule,
    i10.CdkScrollable,
    i11.MatSelect,
    i11.MatSelectTrigger,
    i11.MatOption,
    i11.MatOptgroup,
    MatIconModule,
    i122.MatIcon,
    MatButtonModule2,
    i132.MatButton,
    i132.MatMiniFabButton,
    i132.MatIconButton,
    i132.MatFabButton,
    MatDividerModule,
    i14.MatDivider,
    // Se añade el componente del Modal a los imports
    ModalQr,
    i32.AsyncPipe,
    i32.UpperCasePipe,
    i32.LowerCasePipe,
    i32.JsonPipe,
    i32.SlicePipe,
    i32.DecimalPipe,
    i32.PercentPipe,
    i32.TitleCasePipe,
    i32.CurrencyPipe,
    i32.DatePipe,
    i32.I18nPluralPipe,
    i32.I18nSelectPipe,
    i32.KeyValuePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 16px;\n}\n.np-card[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  border-radius: 16px;\n}\n.np-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.np-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n}\n.np-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  opacity: .8;\n}\n.np-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px 24px;\n  margin-top: 16px;\n}\n.np-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.np-actions[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.qr-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 2000;\n  pointer-events: none;\n}\n.qr-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, .35);\n  pointer-events: auto;\n}\n.qr-card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 10px 30px rgba(8, 38, 170, 0.616);\n  width: 360px;\n  max-width: 90vw;\n  text-align: center;\n  pointer-events: auto;\n}\n.qr-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 240px;\n  max-width: 80%;\n  height: auto;\n  margin: 8px 0 12px;\n}\n.qr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.qr-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 8px;\n  font-size: 20px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n#toast-container[_ngcontent-%COMP%] {\n  z-index: 99999 !important;\n}\n/*# sourceMappingURL=registro.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(Registro, [{
    type: Component3,
    args: [{ selector: "app-registro", standalone: true, imports: [
      CommonModule3,
      FormsModule,
      MatCardModule2,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatButtonModule2,
      MatDividerModule,
      // Se añade el componente del Modal a los imports
      ModalQr
    ], template: `<mat-card class="np-card">\r
  <div class="np-title">\r
    <mat-icon>person_add</mat-icon>\r
    <div>\r
      <h2 class="m-0">Registro Usuarios</h2>\r
      <p class="np-subtitle">Completa los datos para crear la cuenta y generar el QR</p>\r
    </div>\r
  </div>\r
\r
  <form #form="ngForm" (ngSubmit)="registrar(form)" class="np-form" novalidate>\r
    <div class="np-col">\r
      <!-- Nombre -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Nombre</mat-label>\r
        <input matInput\r
               name="nombre"\r
               [(ngModel)]="estudiante.nombre"\r
               required minlength="2"\r
               #nombre="ngModel">\r
        <mat-error *ngIf="nombre.invalid && (nombre.touched || form.submitted)">\r
          <span *ngIf="nombre.errors?.['required']">El nombre es obligatorio.</span>\r
          <span *ngIf="nombre.errors?.['minlength']">M\xEDnimo 2 caracteres.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Apellido -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Apellido</mat-label>\r
        <input matInput\r
               name="apellido"\r
               [(ngModel)]="estudiante.apellido"\r
               required minlength="2"\r
               #apellido="ngModel">\r
        <mat-error *ngIf="apellido.invalid && (apellido.touched || form.submitted)">\r
          <span *ngIf="apellido.errors?.['required']">El apellido es obligatorio.</span>\r
          <span *ngIf="apellido.errors?.['minlength']">M\xEDnimo 2 caracteres.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Email -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Correo electr\xF3nico</mat-label>\r
        <input matInput\r
               type="email"\r
               name="email"\r
               [(ngModel)]="estudiante.email"\r
               required\r
               email\r
               #email="ngModel">\r
        <mat-error *ngIf="email.invalid && (email.touched || form.submitted)">\r
          <span *ngIf="email.errors?.['required']">El correo es obligatorio.</span>\r
          <span *ngIf="email.errors?.['email']">Formato de correo inv\xE1lido.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Contrase\xF1a -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Contrase\xF1a</mat-label>\r
        <input matInput\r
               [type]="hide ? 'password' : 'text'"\r
               name="contrasena"\r
               [(ngModel)]="estudiante.contrasena"\r
               required minlength="6"\r
               #contrasena="ngModel">\r
        <button mat-icon-button matSuffix type="button" (click)="hide = !hide" aria-label="Mostrar/ocultar contrase\xF1a">\r
          <mat-icon>{{ hide ? 'visibility' : 'visibility_off' }}</mat-icon>\r
        </button>\r
        <mat-error *ngIf="contrasena.invalid && (contrasena.touched || form.submitted)">\r
          <span *ngIf="contrasena.errors?.['required']">La contrase\xF1a es obligatoria.</span>\r
          <span *ngIf="contrasena.errors?.['minlength']">M\xEDnimo 6 caracteres.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Rol -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Rol</mat-label>\r
        <mat-select name="rol" [(ngModel)]="estudiante.rol" required #rol="ngModel">\r
          <mat-option *ngFor="let r of roles" [value]="r">{{ r }}</mat-option>\r
        </mat-select>\r
        <mat-error *ngIf="rol.invalid && (rol.touched || form.submitted)">\r
          El rol es obligatorio.\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Usuario (opcional) -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Usuario (opcional)</mat-label>\r
        <input matInput\r
               name="usuario"\r
               [(ngModel)]="estudiante.usuario"\r
               placeholder="Si lo dejas vac\xEDo, se autogenera">\r
      </mat-form-field>\r
    </div>\r
\r
    <div class="np-col">\r
      <!-- N\xFAmero de Carnet: Solo es obligatorio si el rol es ESTUDIANTE -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>N\xFAmero de Carnet</mat-label>\r
        <input matInput\r
               name="numeroCarnet"\r
               [(ngModel)]="estudiante.numeroCarnet"\r
               [required]="estudiante.rol === 'ESTUDIANTE'"\r
               pattern="^[A-Za-z0-9\\-]{4,}$"\r
               #numeroCarnet="ngModel">\r
        <mat-error *ngIf="numeroCarnet.invalid && (numeroCarnet.touched || form.submitted)">\r
          <span *ngIf="numeroCarnet.errors?.['required']">El carnet es obligatorio para el rol ESTUDIANTE.</span>\r
          <span *ngIf="numeroCarnet.errors?.['pattern']">Use letras/n\xFAmeros (m\xEDn. 4). Puede incluir guion.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Tel\xE9fono -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Tel\xE9fono</mat-label>\r
        <input matInput\r
               name="telefono"\r
               [(ngModel)]="estudiante.telefono"\r
               required\r
               pattern="^[0-9]{8}$"\r
               #telefono="ngModel">\r
        <mat-error *ngIf="telefono.invalid && (telefono.touched || form.submitted)">\r
          <span *ngIf="telefono.errors?.['required']">El tel\xE9fono es obligatorio.</span>\r
          <span *ngIf="telefono.errors?.['pattern']">Debe tener 8 d\xEDgitos.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Direcci\xF3n -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Direcci\xF3n</mat-label>\r
        <input matInput\r
               name="direccion"\r
               [(ngModel)]="estudiante.direccion"\r
               required minlength="5"\r
               #direccion="ngModel">\r
        <mat-error *ngIf="direccion.invalid && (direccion.touched || form.submitted)">\r
          <span *ngIf="direccion.errors?.['required']">La direcci\xF3n es obligatoria.</span>\r
          <span *ngIf="direccion.errors?.['minlength']">M\xEDnimo 5 caracteres.</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- A\xF1o -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>A\xF1o</mat-label>\r
        <input matInput\r
               name="anio"\r
               [(ngModel)]="estudiante.anio"\r
               required\r
               pattern="^[0-9]{1,4}$"\r
               #anio="ngModel">\r
        <mat-error *ngIf="anio.invalid && (anio.touched || form.submitted)">\r
          <span *ngIf="anio.errors?.['required']">El a\xF1o es obligatorio.</span>\r
          <span *ngIf="anio.errors?.['pattern']">Ingrese un n\xFAmero (1 a 4 d\xEDgitos).</span>\r
        </mat-error>\r
      </mat-form-field>\r
\r
      <!-- Sede -->\r
      <mat-form-field appearance="outline">\r
        <mat-label>Sede</mat-label>\r
        <input matInput\r
               name="sede"\r
               [(ngModel)]="estudiante.sede"\r
               required minlength="2"\r
               #sede="ngModel">\r
        <mat-error *ngIf="sede.invalid && (sede.touched || form.submitted)">\r
          <span *ngIf="sede.errors?.['required']">La sede es obligatoria.</span>\r
          <span *ngIf="sede.errors?.['minlength']">M\xEDnimo 2 caracteres.</span>\r
        </mat-error>\r
      </mat-form-field>\r
    </div>\r
\r
    <div class="np-actions">\r
      <button mat-raised-button color="primary" type="submit">\r
        <mat-icon class="mr-1">save</mat-icon>\r
        Registrar\r
      </button>\r
    </div>\r
  </form>\r
</mat-card>\r
\r
<!-- \r
  INTEGRACI\xD3N DEL COMPONENTE MODAL-QR\r
  Se reemplaza la estructura anterior del modal por el componente reutilizable.\r
  - [visible]: Controla si el modal se muestra o no.\r
  - [qrImagen]: Le pasa la URL de la imagen del QR generada.\r
  - [nombre], [apellido], [correo]: Pasa los datos del estudiante para el env\xEDo por correo.\r
  - (cerrar): Escucha el evento del modal para llamar a la funci\xF3n cerrarQR().\r
-->\r
<app-modal-qr \r
  [visible]="qrVisible" \r
  [qrImagen]="qrGenerado"\r
  [nombre]="estudiante.nombre"\r
  [apellido]="estudiante.apellido"\r
  [correo]="estudiante.email"\r
  (cerrar)="cerrarQR()">\r
</app-modal-qr>\r
\r
`, styles: ["/* src/app/Vista/registro/registro.css */\n:host {\n  display: block;\n  padding: 16px;\n}\n.np-card {\n  max-width: 1100px;\n  margin: 0 auto;\n  border-radius: 16px;\n}\n.np-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.np-title mat-icon {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n}\n.np-subtitle {\n  margin: 4px 0 0;\n  opacity: .8;\n}\n.np-form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px 24px;\n  margin-top: 16px;\n}\n.np-col {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.np-actions {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.qr-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 2000;\n  pointer-events: none;\n}\n.qr-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, .35);\n  pointer-events: auto;\n}\n.qr-card {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 10px 30px rgba(8, 38, 170, 0.616);\n  width: 360px;\n  max-width: 90vw;\n  text-align: center;\n  pointer-events: auto;\n}\n.qr-card img {\n  width: 240px;\n  max-width: 80%;\n  height: auto;\n  margin: 8px 0 12px;\n}\n.qr-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.qr-close {\n  position: absolute;\n  top: 6px;\n  right: 8px;\n  font-size: 20px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n#toast-container {\n  z-index: 99999 !important;\n}\n/*# sourceMappingURL=registro.css.map */\n"] }]
  }], () => [{ type: RegistroEstudianteService }, { type: i23.ToastrService }, { type: i04.NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(Registro, { className: "Registro", filePath: "src/app/vista/registro/registro.ts", lineNumber: 35 });
})();
(() => {
  const id = "src%2Fapp%2Fvista%2Fregistro%2Fregistro.ts%40Registro";
  function Registro_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(Registro, m.default, [i04, i32, i42, i5, i6, i7, i8, i9, i10, i11, i122, i132, i14, registro_estudiante_service_exports, i23], [CommonModule3, FormsModule, MatCardModule2, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatButtonModule2, MatDividerModule, ModalQr, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Registro_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Registro_HmrLoad(d.timestamp)));
})();

// src/app/Vista/lector-qr/lector-qr.ts
import { Component as Component4, Inject } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { ZXingScannerModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@zxing_ngx-scanner.js?v=3a7f64c5";
import { CommonModule as CommonModule4, isPlatformBrowser } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import { FormsModule as FormsModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_forms.js?v=3a7f64c5";
import { PLATFORM_ID } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://109.199.118.104:5111/api"
};

// src/app/Vista/lector-qr/lector-qr.ts
import * as i05 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i15 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
import * as i24 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/ngx-toastr.js?v=3a7f64c5";
import * as i33 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@zxing_ngx-scanner.js?v=3a7f64c5";
import * as i43 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i52 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_forms.js?v=3a7f64c5";
function LectorQR_option_5_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "option", 5);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const device_r1 = ctx.$implicit;
    i05.\u0275\u0275property("ngValue", device_r1);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", device_r1.label, " ");
  }
}
function LectorQR_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "div", 6)(1, "zxing-scanner", 7);
    i05.\u0275\u0275listener("scanSuccess", function LectorQR_div_6_Template_zxing_scanner_scanSuccess_1_listener($event) {
      i05.\u0275\u0275restoreView(_r2);
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.onCodeResult($event));
    })("camerasFound", function LectorQR_div_6_Template_zxing_scanner_camerasFound_1_listener($event) {
      i05.\u0275\u0275restoreView(_r2);
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.onDevicesFound($event));
    });
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("device", ctx_r2.selectedDevice);
  }
}
function LectorQR_p_7_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "p");
    i05.\u0275\u0275text(1, "\u2705 C\xF3digo escaneado: ");
    i05.\u0275\u0275elementStart(2, "strong");
    i05.\u0275\u0275text(3);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275textInterpolate(ctx_r2.qrResult);
  }
}
var LectorQR = class _LectorQR {
  http;
  platformId;
  toastr;
  qrResult = null;
  availableDevices = [];
  selectedDevice;
  constructor(http, platformId, toastr) {
    this.http = http;
    this.platformId = platformId;
    this.toastr = toastr;
  }
  // ✅ Esta función se puede usar directamente en el HTML
  isRunningInBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  onCodeResult(result) {
    this.qrResult = result;
    this.http.post(`${environment.apiUrl}/marcaje`, {
      codigoQR: result,
      tipo: "Ingreso"
    }).subscribe({
      next: (respuesta) => {
        this.toastr.success(respuesta.mensaje || "Marcaje registrado");
      },
      error: (err) => {
        console.error("Error al registrar marcaje:", err);
        this.toastr.error("Error al registrar marcaje: " + (err?.message ?? ""));
      }
    });
  }
  onDevicesFound(devices) {
    this.availableDevices = devices;
    this.selectedDevice = devices.find((d) => d.label.includes("C920")) || devices[0];
  }
  static \u0275fac = function LectorQR_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LectorQR)(i05.\u0275\u0275directiveInject(i15.HttpClient), i05.\u0275\u0275directiveInject(PLATFORM_ID), i05.\u0275\u0275directiveInject(i24.ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _LectorQR, selectors: [["app-lector-qr"]], decls: 8, vars: 4, consts: [["for", "camera"], ["id", "camera", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "qr-container", 4, "ngIf"], [4, "ngIf"], [3, "ngValue"], [1, "qr-container"], [3, "scanSuccess", "camerasFound", "device"]], template: function LectorQR_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "h2");
      i05.\u0275\u0275text(1, "Escaneo de C\xF3digo QR");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(2, "label", 0);
      i05.\u0275\u0275text(3, "Selecciona c\xE1mara:");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(4, "select", 1);
      i05.\u0275\u0275twoWayListener("ngModelChange", function LectorQR_Template_select_ngModelChange_4_listener($event) {
        i05.\u0275\u0275twoWayBindingSet(ctx.selectedDevice, $event) || (ctx.selectedDevice = $event);
        return $event;
      });
      i05.\u0275\u0275template(5, LectorQR_option_5_Template, 2, 2, "option", 2);
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275template(6, LectorQR_div_6_Template, 2, 1, "div", 3)(7, LectorQR_p_7_Template, 4, 1, "p", 4);
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(4);
      i05.\u0275\u0275twoWayProperty("ngModel", ctx.selectedDevice);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngForOf", ctx.availableDevices);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.isRunningInBrowser());
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.qrResult);
    }
  }, dependencies: [ZXingScannerModule, i33.ZXingScannerComponent, CommonModule4, i43.NgClass, i43.NgComponentOutlet, i43.NgForOf, i43.NgIf, i43.NgTemplateOutlet, i43.NgStyle, i43.NgSwitch, i43.NgSwitchCase, i43.NgSwitchDefault, i43.NgPlural, i43.NgPluralCase, FormsModule2, i52.\u0275NgNoValidate, i52.NgSelectOption, i52.\u0275NgSelectMultipleOption, i52.DefaultValueAccessor, i52.NumberValueAccessor, i52.RangeValueAccessor, i52.CheckboxControlValueAccessor, i52.SelectControlValueAccessor, i52.SelectMultipleControlValueAccessor, i52.RadioControlValueAccessor, i52.NgControlStatus, i52.NgControlStatusGroup, i52.RequiredValidator, i52.MinLengthValidator, i52.MaxLengthValidator, i52.PatternValidator, i52.CheckboxRequiredValidator, i52.EmailValidator, i52.MinValidator, i52.MaxValidator, i52.NgModel, i52.NgModelGroup, i52.NgForm, i43.AsyncPipe, i43.UpperCasePipe, i43.LowerCasePipe, i43.JsonPipe, i43.SlicePipe, i43.DecimalPipe, i43.PercentPipe, i43.TitleCasePipe, i43.CurrencyPipe, i43.DatePipe, i43.I18nPluralPipe, i43.I18nSelectPipe, i43.KeyValuePipe], styles: ["\n\n.qr-container[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  margin: 40px auto;\n  border: 2px solid #ec704a;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=lector-qr.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(LectorQR, [{
    type: Component4,
    args: [{ selector: "app-lector-qr", standalone: true, imports: [ZXingScannerModule, CommonModule4, FormsModule2], template: '<h2>Escaneo de C\xF3digo QR</h2>\r\n\r\n<!-- Selector de c\xE1mara -->\r\n<label for="camera">Selecciona c\xE1mara:</label>\r\n<select id="camera" [(ngModel)]="selectedDevice">\r\n  <option *ngFor="let device of availableDevices" [ngValue]="device">\r\n    {{ device.label }}\r\n  </option>\r\n</select>\r\n\r\n<!-- \xC1rea del esc\xE1ner QR -->\r\n<div class="qr-container" *ngIf="isRunningInBrowser()">\r\n  <zxing-scanner\r\n    [device]="selectedDevice"\r\n    (scanSuccess)="onCodeResult($event)"\r\n    (camerasFound)="onDevicesFound($event)">\r\n  </zxing-scanner>\r\n</div>\r\n\r\n<!-- Resultado del escaneo -->\r\n<p *ngIf="qrResult">\u2705 C\xF3digo escaneado: <strong>{{ qrResult }}</strong></p>\r\n', styles: ["/* src/app/Vista/lector-qr/lector-qr.css */\n.qr-container {\n  width: 300px;\n  height: 300px;\n  margin: 40px auto;\n  border: 2px solid #ec704a;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=lector-qr.css.map */\n"] }]
  }], () => [{ type: i15.HttpClient }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: i24.ToastrService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(LectorQR, { className: "LectorQR", filePath: "src/app/vista/lector-qr/lector-qr.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Fvista%2Flector-qr%2Flector-qr.ts%40LectorQR";
  function LectorQR_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(LectorQR, m.default, [i05, i33, i43, i52, i15, i24], [ZXingScannerModule, CommonModule4, FormsModule2, PLATFORM_ID, Component4, Inject], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LectorQR_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LectorQR_HmrLoad(d.timestamp)));
})();

// src/app/features/auth/login/login.ts
import { Component as Component5, signal as signal3, inject as inject2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { FormBuilder, ReactiveFormsModule, Validators } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_forms.js?v=3a7f64c5";
import { Router as Router2, RouterLink } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";

// src/app/core/services/auth.service.ts
import { Injectable as Injectable2, inject, signal as signal2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { HttpClient as HttpClient4 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
import { Router } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";
import { isPlatformBrowser as isPlatformBrowser2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import { PLATFORM_ID as PLATFORM_ID2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";

// src/app/core/models/auth.ts
var AUTH_TOKEN_KEY = "auth.token";
var AUTH_USER_KEY = "auth.user";
var AUTH_EXP_KEY = "auth.expiresAt";
var ROLE_ROUTE = {
  ESTUDIANTE: "../../Vista/historial",
  DOCENTE: "../../Vista/historial",
  ADMIN: "../../Vista/registro"
};

// src/app/core/services/auth.service.ts
import * as i06 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
var AuthService = class _AuthService {
  http = inject(HttpClient4);
  router = inject(Router);
  // PLATFORM / Browser check to avoid accessing localStorage during SSR
  platformId = inject(PLATFORM_ID2);
  isBrowser = isPlatformBrowser2(this.platformId);
  /** Endpoint del login (utiliza environment.apiUrl) */
  baseUrl = `${environment.apiUrl}/Auth/login`;
  /** Estado reactivo de autenticación (no leer localStorage en servidor) */
  authState = signal2({
    token: this.isBrowser ? localStorage.getItem(AUTH_TOKEN_KEY) : null,
    user: this.isBrowser ? this.loadUser() : null,
    expiresAt: this.isBrowser ? Number(localStorage.getItem(AUTH_EXP_KEY)) || null : null,
    isAuthenticated: this.isBrowser ? !!localStorage.getItem(AUTH_TOKEN_KEY) : false
  }, ...ngDevMode ? [{ debugName: "authState" }] : []);
  /** === LOGIN === */
  login(payload) {
    const body = {
      usuario: payload.username,
      contrasena: payload.password
    };
    return this.http.post(this.baseUrl, body, {
      headers: { "Content-Type": "application/json" }
    });
  }
  /** === GUARDAR DATOS TRAS LOGIN EXITOSO === */
  handleLoginSuccess(resp) {
    const expiresAt = Date.now() + resp.expiresIn * 1e3;
    const user = {
      id: this.decodeTokenSub(resp.accessToken),
      username: resp.usuario,
      role: resp.rol
    };
    if (this.isBrowser) {
      localStorage.setItem(AUTH_TOKEN_KEY, resp.accessToken);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      localStorage.setItem(AUTH_EXP_KEY, String(expiresAt));
    }
    this.authState.set({
      token: resp.accessToken,
      user,
      expiresAt,
      isAuthenticated: true
    });
    const redirect = ROLE_ROUTE[resp.rol] || "/";
    this.router.navigate([redirect]);
  }
  /** === CARGAR USUARIO DESDE STORAGE === */
  loadUser() {
    if (!this.isBrowser)
      return null;
    const data = localStorage.getItem(AUTH_USER_KEY);
    return data ? JSON.parse(data) : null;
  }
  /** === DECODIFICAR SUB DEL TOKEN === */
  decodeTokenSub(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.sub ?? "";
    } catch {
      return "";
    }
  }
  /** === DECODIFICAR EXP (segundos UNIX) DEL TOKEN === */
  decodeTokenExp(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return typeof payload.exp === "number" ? payload.exp : null;
    } catch {
      return null;
    }
  }
  /** === VALIDAR / SINCRONIZAR SESIÓN AL ARRANCAR LA APP === */
  ensureSessionOnBoot() {
    if (!this.isBrowser)
      return;
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    let expiresAt = Number(localStorage.getItem(AUTH_EXP_KEY)) || null;
    if (token && !expiresAt) {
      const expSec = this.decodeTokenExp(token);
      if (expSec) {
        expiresAt = expSec * 1e3;
        localStorage.setItem(AUTH_EXP_KEY, String(expiresAt));
      }
    }
    if (!token || expiresAt !== null && Date.now() >= expiresAt) {
      this.logout(false);
      return;
    }
    if (token && expiresAt && !this.authState().token) {
      this.authState.set({
        token,
        user: this.loadUser(),
        expiresAt,
        isAuthenticated: true
      });
    }
  }
  /** === OBTENER TOKEN ACTUAL === */
  get token() {
    return this.authState().token;
  }
  /** === SABER SI EL USUARIO ESTÁ LOGUEADO (verifica expiración) === */
  isLoggedIn() {
    const state = this.authState();
    if (!state.token || !state.expiresAt)
      return false;
    return Date.now() < state.expiresAt;
  }
  /** === OBTENER ROL DEL USUARIO === */
  getRole() {
    return this.authState().user?.role ?? null;
  }
  /** === CERRAR SESIÓN === */
  logout(navigateToLogin = true) {
    if (this.isBrowser) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      localStorage.removeItem(AUTH_EXP_KEY);
    }
    this.authState.set({
      token: null,
      user: null,
      expiresAt: null,
      isAuthenticated: false
    });
    if (navigateToLogin) {
      this.router.navigate(["/login"]);
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ i06.\u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(AuthService, [{
    type: Injectable2,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/auth/login/login.ts
import { MatFormFieldModule as MatFormFieldModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_form-field.js?v=3a7f64c5";
import { MatInputModule as MatInputModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_input.js?v=3a7f64c5";
import { MatButtonModule as MatButtonModule3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_button.js?v=3a7f64c5";
import { MatIconModule as MatIconModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_icon.js?v=3a7f64c5";
import { MatProgressSpinnerModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_progress-spinner.js?v=3a7f64c5";
import { CommonModule as CommonModule5 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i07 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i16 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i25 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_forms.js?v=3a7f64c5";
import * as i34 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_form-field.js?v=3a7f64c5";
import * as i44 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_bidi.js?v=3a7f64c5";
import * as i53 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_input.js?v=3a7f64c5";
import * as i62 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_text-field.js?v=3a7f64c5";
import * as i72 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_button.js?v=3a7f64c5";
import * as i82 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_icon.js?v=3a7f64c5";
import * as i92 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_progress-spinner.js?v=3a7f64c5";
function LoginComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, "El usuario es requerido");
    i07.\u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, "M\xEDnimo 3 caracteres");
    i07.\u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, "La contrase\xF1a es requerida");
    i07.\u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, "M\xEDnimo 4 caracteres");
    i07.\u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementContainerStart(0);
    i07.\u0275\u0275text(1, "Ingresar");
    i07.\u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275element(0, "mat-spinner", 16);
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 17);
    i07.\u0275\u0275text(1);
    i07.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275advance();
    i07.\u0275\u0275textInterpolate(ctx_r1.errorMsg());
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject2(FormBuilder);
  auth = inject2(AuthService);
  router = inject2(Router2);
  loading = signal3(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  hide = signal3(true, ...ngDevMode ? [{ debugName: "hide" }] : []);
  errorMsg = signal3(null, ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
  form = this.fb.nonNullable.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(4)]]
  });
  submit() {
    this.errorMsg.set(null);
    if (this.form.invalid || this.loading())
      return;
    this.loading.set(true);
    const payload = this.form.getRawValue();
    this.auth.login(payload).subscribe({
      next: (resp) => {
        this.auth.handleLoginSuccess(resp);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        if (err?.status === 401) {
          this.errorMsg.set("Usuario o contrase\xF1a incorrectos.");
        } else if (err?.status === 0) {
          this.errorMsg.set("No hay conexi\xF3n con el servidor.");
        } else {
          this.errorMsg.set("Ocurri\xF3 un error. Intenta nuevamente.");
        }
      }
    });
  }
  // helpers de template
  get f() {
    return this.form.controls;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 30, vars: 12, consts: [["loadingTpl", ""], [1, "login-wrapper"], [1, "login-card"], [1, "title"], [1, "subtitle"], [1, "form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["matInput", "", "formControlName", "username", "autocomplete", "username"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["class", "error", 4, "ngIf"], ["routerLink", "/", 1, "back-link"], ["diameter", "20"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i07.\u0275\u0275getCurrentView();
      i07.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
      i07.\u0275\u0275text(3, "Iniciar sesi\xF3n");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(4, "p", 4);
      i07.\u0275\u0275text(5, "Accede con tu usuario y contrase\xF1a");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(6, "form", 5);
      i07.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
        i07.\u0275\u0275restoreView(_r1);
        return i07.\u0275\u0275resetView(ctx.submit());
      });
      i07.\u0275\u0275elementStart(7, "mat-form-field", 6)(8, "mat-label");
      i07.\u0275\u0275text(9, "Usuario");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275element(10, "input", 7);
      i07.\u0275\u0275template(11, LoginComponent_mat_error_11_Template, 2, 0, "mat-error", 8)(12, LoginComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(13, "mat-form-field", 6)(14, "mat-label");
      i07.\u0275\u0275text(15, "Contrase\xF1a");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275element(16, "input", 9);
      i07.\u0275\u0275elementStart(17, "button", 10);
      i07.\u0275\u0275listener("click", function LoginComponent_Template_button_click_17_listener() {
        i07.\u0275\u0275restoreView(_r1);
        return i07.\u0275\u0275resetView(ctx.hide.set(!ctx.hide()));
      });
      i07.\u0275\u0275elementStart(18, "mat-icon");
      i07.\u0275\u0275text(19);
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275template(20, LoginComponent_mat_error_20_Template, 2, 0, "mat-error", 8)(21, LoginComponent_mat_error_21_Template, 2, 0, "mat-error", 8);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
      i07.\u0275\u0275template(24, LoginComponent_ng_container_24_Template, 2, 0, "ng-container", 13);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275template(25, LoginComponent_ng_template_25_Template, 1, 0, "ng-template", null, 0, i07.\u0275\u0275templateRefExtractor);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275template(27, LoginComponent_div_27_Template, 2, 1, "div", 14);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(28, "a", 15);
      i07.\u0275\u0275text(29, "\u2190 Volver al inicio");
      i07.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const loadingTpl_r3 = i07.\u0275\u0275reference(26);
      i07.\u0275\u0275advance(6);
      i07.\u0275\u0275property("formGroup", ctx.form);
      i07.\u0275\u0275advance(5);
      i07.\u0275\u0275property("ngIf", ctx.f.username.hasError("required"));
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.f.username.hasError("minlength"));
      i07.\u0275\u0275advance(4);
      i07.\u0275\u0275property("type", ctx.hide() ? "password" : "text");
      i07.\u0275\u0275advance();
      i07.\u0275\u0275attribute("aria-label", "mostrar/ocultar contrase\xF1a");
      i07.\u0275\u0275advance(2);
      i07.\u0275\u0275textInterpolate(ctx.hide() ? "visibility" : "visibility_off");
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.f.password.hasError("required"));
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", ctx.f.password.hasError("minlength"));
      i07.\u0275\u0275advance(2);
      i07.\u0275\u0275property("disabled", ctx.form.invalid || ctx.loading());
      i07.\u0275\u0275advance();
      i07.\u0275\u0275property("ngIf", !ctx.loading())("ngIfElse", loadingTpl_r3);
      i07.\u0275\u0275advance(3);
      i07.\u0275\u0275property("ngIf", ctx.errorMsg());
    }
  }, dependencies: [
    CommonModule5,
    i16.NgClass,
    i16.NgComponentOutlet,
    i16.NgForOf,
    i16.NgIf,
    i16.NgTemplateOutlet,
    i16.NgStyle,
    i16.NgSwitch,
    i16.NgSwitchCase,
    i16.NgSwitchDefault,
    i16.NgPlural,
    i16.NgPluralCase,
    RouterLink,
    ReactiveFormsModule,
    i25.\u0275NgNoValidate,
    i25.NgSelectOption,
    i25.\u0275NgSelectMultipleOption,
    i25.DefaultValueAccessor,
    i25.NumberValueAccessor,
    i25.RangeValueAccessor,
    i25.CheckboxControlValueAccessor,
    i25.SelectControlValueAccessor,
    i25.SelectMultipleControlValueAccessor,
    i25.RadioControlValueAccessor,
    i25.NgControlStatus,
    i25.NgControlStatusGroup,
    i25.RequiredValidator,
    i25.MinLengthValidator,
    i25.MaxLengthValidator,
    i25.PatternValidator,
    i25.CheckboxRequiredValidator,
    i25.EmailValidator,
    i25.MinValidator,
    i25.MaxValidator,
    i25.FormControlDirective,
    i25.FormGroupDirective,
    i25.FormControlName,
    i25.FormGroupName,
    i25.FormArrayName,
    MatFormFieldModule2,
    i34.MatFormField,
    i34.MatLabel,
    i34.MatHint,
    i34.MatError,
    i34.MatPrefix,
    i34.MatSuffix,
    i44.Dir,
    MatInputModule2,
    i53.MatInput,
    i62.CdkAutofill,
    i62.CdkTextareaAutosize,
    MatButtonModule3,
    i72.MatButton,
    i72.MatMiniFabButton,
    i72.MatIconButton,
    i72.MatFabButton,
    MatIconModule2,
    i82.MatIcon,
    MatProgressSpinnerModule,
    i92.MatProgressSpinner,
    i16.AsyncPipe,
    i16.UpperCasePipe,
    i16.LowerCasePipe,
    i16.JsonPipe,
    i16.SlicePipe,
    i16.DecimalPipe,
    i16.PercentPipe,
    i16.TitleCasePipe,
    i16.CurrencyPipe,
    i16.DatePipe,
    i16.I18nPluralPipe,
    i16.I18nSelectPipe,
    i16.KeyValuePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  background:\n    radial-gradient(\n      1200px 600px at -10% -10%,\n      #7c4dff22,\n      transparent 60%),\n    radial-gradient(\n      1000px 500px at 110% 110%,\n      #03a9f422,\n      transparent 60%),\n    linear-gradient(\n      180deg,\n      #0f172a,\n      #0b1222 50%,\n      #0f172a);\n  display: grid;\n  place-items: center;\n  padding: 24px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: #1e293b;\n  color: #e2e8f0;\n  border-radius: 16px;\n  padding: 28px 32px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .4), inset 0 1px 0 rgba(255, 255, 255, .04);\n  display: grid;\n  gap: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  text-align: center;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: -10px 0 10px;\n  color: #cbd5e1;\n  font-size: 15px;\n  text-align: center;\n}\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field.mat-mdc-form-field[_ngcontent-%COMP%] {\n  --mdc-outlined-container-color: #1e293b;\n  --mdc-outlined-outline-color: #334155;\n  --mdc-outlined-error-text-color: #ff8a80;\n  --mdc-outlined-label-color: #cbd5e1;\n  --mdc-outlined-text-color: #f1f5f9;\n  --mdc-outlined-trailing-icon-color: #cbd5e1;\n  --mdc-outlined-focused-outline-color: #7c4dff;\n  --mdc-outlined-focused-label-color: #7c4dff;\n  --mdc-outlined-focused-trailing-icon-color: #7c4dff;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%] {\n  height: 44px;\n  font-weight: 600;\n  letter-spacing: .2px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c4dff,\n      #03a9f4);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  width: 100%;\n  transition: all 0.3s ease;\n}\n.actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: scale(1.02);\n}\n.actions[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]:disabled {\n  background: #334155;\n  color: #f1f5f9;\n  opacity: 0.5;\n  transform: scale(1);\n}\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.actions[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]     .mdc-circular-progress__determinate-circle {\n  stroke: white !important;\n}\n.error[_ngcontent-%COMP%] {\n  color: #ff8a80;\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: #ff8a8014;\n  border: 1px solid #ff8a8044;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #90caf9;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n  transition: all 0.3s ease;\n  margin-top: 8px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(LoginComponent, [{
    type: Component5,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule5,
      RouterLink,
      ReactiveFormsModule,
      MatFormFieldModule2,
      MatInputModule2,
      MatButtonModule3,
      MatIconModule2,
      MatProgressSpinnerModule
    ], template: `<!-- src/app/features-auth-login/login.html -->\r
<div class="login-wrapper">\r
  <div class="login-card">\r
    <h2 class="title">Iniciar sesi\xF3n</h2>\r
    <p class="subtitle">Accede con tu usuario y contrase\xF1a</p>\r
\r
    <form [formGroup]="form" (ngSubmit)="submit()" class="form">\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Usuario</mat-label>\r
        <input matInput formControlName="username" autocomplete="username" />\r
        <mat-error *ngIf="f.username.hasError('required')">El usuario es requerido</mat-error>\r
        <mat-error *ngIf="f.username.hasError('minlength')">M\xEDnimo 3 caracteres</mat-error>\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Contrase\xF1a</mat-label>\r
        <input\r
          matInput\r
          [type]="hide() ? 'password' : 'text'"\r
          formControlName="password"\r
          autocomplete="current-password"\r
        />\r
        <button mat-icon-button matSuffix type="button" (click)="hide.set(!hide())" [attr.aria-label]="'mostrar/ocultar contrase\xF1a'">\r
          <mat-icon>{{ hide() ? 'visibility' : 'visibility_off' }}</mat-icon>\r
        </button>\r
        <mat-error *ngIf="f.password.hasError('required')">La contrase\xF1a es requerida</mat-error>\r
        <mat-error *ngIf="f.password.hasError('minlength')">M\xEDnimo 4 caracteres</mat-error>\r
      </mat-form-field>\r
\r
      <div class="actions">\r
        <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid || loading()">\r
          <ng-container *ngIf="!loading(); else loadingTpl">Ingresar</ng-container>\r
        </button>\r
        <ng-template #loadingTpl>\r
          <mat-spinner diameter="20"></mat-spinner>\r
        </ng-template>\r
      </div>\r
\r
      <div class="error" *ngIf="errorMsg()">{{ errorMsg() }}</div>\r
    </form>\r
\r
    <a routerLink="/" class="back-link">\u2190 Volver al inicio</a>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/auth/login/login.css */\n:host {\n  display: block;\n}\n.login-wrapper {\n  min-height: 100dvh;\n  background:\n    radial-gradient(\n      1200px 600px at -10% -10%,\n      #7c4dff22,\n      transparent 60%),\n    radial-gradient(\n      1000px 500px at 110% 110%,\n      #03a9f422,\n      transparent 60%),\n    linear-gradient(\n      180deg,\n      #0f172a,\n      #0b1222 50%,\n      #0f172a);\n  display: grid;\n  place-items: center;\n  padding: 24px;\n}\n.login-card {\n  width: 100%;\n  max-width: 420px;\n  background: #1e293b;\n  color: #e2e8f0;\n  border-radius: 16px;\n  padding: 28px 32px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .4), inset 0 1px 0 rgba(255, 255, 255, .04);\n  display: grid;\n  gap: 16px;\n}\n.title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  text-align: center;\n}\n.subtitle {\n  margin: -10px 0 10px;\n  color: #cbd5e1;\n  font-size: 15px;\n  text-align: center;\n}\n.form {\n  display: grid;\n  gap: 16px;\n}\n.full {\n  width: 100%;\n}\nmat-form-field.mat-mdc-form-field {\n  --mdc-outlined-container-color: #1e293b;\n  --mdc-outlined-outline-color: #334155;\n  --mdc-outlined-error-text-color: #ff8a80;\n  --mdc-outlined-label-color: #cbd5e1;\n  --mdc-outlined-text-color: #f1f5f9;\n  --mdc-outlined-trailing-icon-color: #cbd5e1;\n  --mdc-outlined-focused-outline-color: #7c4dff;\n  --mdc-outlined-focused-label-color: #7c4dff;\n  --mdc-outlined-focused-trailing-icon-color: #7c4dff;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.actions button[mat-raised-button] {\n  height: 44px;\n  font-weight: 600;\n  letter-spacing: .2px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c4dff,\n      #03a9f4);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  width: 100%;\n  transition: all 0.3s ease;\n}\n.actions button[mat-raised-button]:hover {\n  opacity: 0.9;\n  transform: scale(1.02);\n}\n.actions button[mat-raised-button]:disabled {\n  background: #334155;\n  color: #f1f5f9;\n  opacity: 0.5;\n  transform: scale(1);\n}\n.loading-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.actions mat-spinner ::ng-deep .mdc-circular-progress__determinate-circle {\n  stroke: white !important;\n}\n.error {\n  color: #ff8a80;\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: #ff8a8014;\n  border: 1px solid #ff8a8044;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n}\n.back-link {\n  color: #90caf9;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n  transition: all 0.3s ease;\n  margin-top: 8px;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.ts", lineNumber: 31 });
})();
(() => {
  const id = "src%2Fapp%2Ffeatures%2Fauth%2Flogin%2Flogin.ts%40LoginComponent";
  function LoginComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(LoginComponent, m.default, [i07, i16, i25, i34, i44, i53, i62, i72, i82, i92], [CommonModule5, RouterLink, ReactiveFormsModule, MatFormFieldModule2, MatInputModule2, MatButtonModule3, MatIconModule2, MatProgressSpinnerModule, Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LoginComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoginComponent_HmrLoad(d.timestamp)));
})();

// src/app/auth/auth.guard.ts
import { Router as Router3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";
import { inject as inject3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
var authGuard = (route, state) => {
  const auth = inject3(AuthService);
  const router = inject3(Router3);
  if (!auth.isLoggedIn()) {
    router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
  const roles = route.data?.["roles"];
  if (roles && roles.length > 0) {
    const userRole = auth.getRole();
    if (!userRole || !roles.includes(userRole)) {
      const fallback = userRole ? ROLE_ROUTE[userRole] : "/";
      router.navigate([fallback]);
      return false;
    }
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  // Arranque en Inicio (público)
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  // Público
  { path: "inicio", component: Inicio },
  { path: "login", component: LoginComponent },
  { path: "registro", component: Registro },
  //ruta para registro de usuarios pública para pruebas
  // Protegidas por rol (ajusta si lo deseas)
  {
    path: "lector",
    component: LectorQR,
    canActivate: [authGuard],
    data: { roles: ["ADMIN", "DOCENTE"] }
  },
  {
    path: "registro",
    component: Registro,
    canActivate: [authGuard],
    data: { roles: ["ADMIN", "DOCENTE", "ESTUDIANTE"] }
  },
  // 404 → inicio
  { path: "**", redirectTo: "inicio" }
];

// src/app/app.config.ts
import { provideClientHydration, withEventReplay } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_platform-browser.js?v=3a7f64c5";
import { provideAnimations } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_platform-browser_animations.js?v=3a7f64c5";
import { HttpClientModule } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
import { importProvidersFrom } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { provideHttpClient, withFetch } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
var appConfig = {
  providers: [
    // HttpClient con soporte de fetch; el interceptor se registra globalmente en main.ts
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(withEventReplay()),
    provideAnimations()
  ]
};

// src/app/app.ts
import { Component as Component8, ChangeDetectionStrategy } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { CommonModule as CommonModule6 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import { RouterOutlet } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";

// src/app/Vista/menu/menu.ts
import { Component as Component6 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { RouterLink as RouterLink2, RouterLinkActive } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";
import { MatIconModule as MatIconModule3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_icon.js?v=3a7f64c5";
import * as i08 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i17 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_icon.js?v=3a7f64c5";
import * as i26 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_bidi.js?v=3a7f64c5";
var Menu = class _Menu {
  isOpen = false;
  constructor() {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  close() {
    this.isOpen = false;
  }
  // Función para manejar el clic en el botón de Login
  handleLogin() {
    console.log("Bot\xF3n de Login presionado. Navegando a /login...");
  }
  static \u0275fac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)();
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _Menu, selectors: [["app-menu"]], decls: 64, vars: 3, consts: [["role", "banner", 1, "menu-wrap"], ["aria-label", "Navegacion principal", 1, "menu-grid"], [1, "menu-items"], ["routerLink", "/inicio", "routerLinkActive", "active-link"], ["routerLink", "/registro", "routerLinkActive", "active-link"], ["routerLink", "/historial", "routerLinkActive", "active-link"], ["routerLink", "/lector", "routerLinkActive", "active-link"], ["type", "button", "aria-label", "Abrir menu", "aria-controls", "mobile-menu", 1, "hamburger", 3, "click"], ["routerLink", "/", "aria-label", "Ir al inicio", 1, "logo"], ["src", "https://static.wixstatic.com/media/8a2cdc_fb088ff4add94711854b569553889689~mv2.png/v1/fill/w_164,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20blanco%20con%20l%C3%ADnea%20naranja.png", "alt", "Universidad Regional de Guatemala"], [1, "menu-actions"], ["type", "button", 1, "login-button", 3, "click"], ["id", "mobile-menu", "aria-hidden", "{{!isOpen}", 1, "drawer", 3, "click"], [1, "panel", 3, "click"], ["type", "button", "aria-label", "Cerrar menu", 1, "close", 3, "click"], [1, "drawer-items"], ["routerLink", "/inicio", 3, "click"], ["routerLink", "/registro", 3, "click"], ["routerLink", "/historial", 3, "click"], ["routerLink", "/lector", 3, "click"], ["type", "button", 1, "login-button-mobile", 3, "click"]], template: function Menu_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275elementStart(0, "header", 0)(1, "nav", 1)(2, "ul", 2)(3, "li")(4, "a", 3)(5, "mat-icon");
      i08.\u0275\u0275text(6, "home");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(7, " Inicio");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(8, "li")(9, "a", 4)(10, "mat-icon");
      i08.\u0275\u0275text(11, "edit");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(12, " Registro");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(13, "li")(14, "a", 5)(15, "mat-icon");
      i08.\u0275\u0275text(16, "history");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(17, " Historial");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(18, "li")(19, "a", 6)(20, "mat-icon");
      i08.\u0275\u0275text(21, "qr_code_scanner");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(22, "Escanear QR");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(23, "button", 7);
      i08.\u0275\u0275listener("click", function Menu_Template_button_click_23_listener() {
        return ctx.toggle();
      });
      i08.\u0275\u0275elementStart(24, "mat-icon");
      i08.\u0275\u0275text(25, "menu");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(26, "a", 8);
      i08.\u0275\u0275element(27, "img", 9);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(28, "div", 10)(29, "button", 11);
      i08.\u0275\u0275listener("click", function Menu_Template_button_click_29_listener() {
        return ctx.handleLogin();
      });
      i08.\u0275\u0275elementStart(30, "mat-icon");
      i08.\u0275\u0275text(31, "account_circle");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(32, " Bienvenido ");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(33, "div", 12);
      i08.\u0275\u0275listener("click", function Menu_Template_div_click_33_listener() {
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(34, "div", 13);
      i08.\u0275\u0275listener("click", function Menu_Template_div_click_34_listener($event) {
        return $event.stopPropagation();
      });
      i08.\u0275\u0275elementStart(35, "button", 14);
      i08.\u0275\u0275listener("click", function Menu_Template_button_click_35_listener() {
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(36, "mat-icon");
      i08.\u0275\u0275text(37, "close");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(38, "ul", 15)(39, "li")(40, "a", 16);
      i08.\u0275\u0275listener("click", function Menu_Template_a_click_40_listener() {
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(41, "mat-icon");
      i08.\u0275\u0275text(42, "home");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(43, " Inicio");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(44, "li")(45, "a", 17);
      i08.\u0275\u0275listener("click", function Menu_Template_a_click_45_listener() {
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(46, "mat-icon");
      i08.\u0275\u0275text(47, "edit");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(48, " Registro");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(49, "li")(50, "a", 18);
      i08.\u0275\u0275listener("click", function Menu_Template_a_click_50_listener() {
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(51, "mat-icon");
      i08.\u0275\u0275text(52, "history");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(53, " Historial");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(54, "li")(55, "a", 19);
      i08.\u0275\u0275listener("click", function Menu_Template_a_click_55_listener() {
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(56, "mat-icon");
      i08.\u0275\u0275text(57, "qr_code_scanner");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(58, " Escanear QR");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(59, "li")(60, "button", 20);
      i08.\u0275\u0275listener("click", function Menu_Template_button_click_60_listener() {
        ctx.handleLogin();
        return ctx.close();
      });
      i08.\u0275\u0275elementStart(61, "mat-icon");
      i08.\u0275\u0275text(62, "account_circle");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(63, " Login ");
      i08.\u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      i08.\u0275\u0275advance(23);
      i08.\u0275\u0275attribute("aria-expanded", ctx.isOpen);
      i08.\u0275\u0275advance(10);
      i08.\u0275\u0275classProp("open", ctx.isOpen);
    }
  }, dependencies: [RouterLink2, RouterLinkActive, MatIconModule3, i17.MatIcon, i26.Dir], styles: ["\n\n.menu-wrap[_ngcontent-%COMP%] {\n  --azul: #004383;\n  --azul-osc: #003563;\n  --texto: #ffffff;\n  --texto-dim: rgba(255, 255, 255, .8);\n  --cta: #ea8a1a;\n  background: var(--azul);\n}\n.menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 20px;\n}\n.menu-items[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 28px;\n  margin: 0;\n  padding: 0;\n  justify-self: start;\n}\n.menu-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--texto);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  font-size: 16px;\n  opacity: .9;\n}\n.menu-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n.logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: inline-flex;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 42px;\n  width: auto;\n  display: block;\n}\n.menu-actions[_ngcontent-%COMP%] {\n  justify-self: end;\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n}\n.cta[_ngcontent-%COMP%] {\n  background: var(--cta);\n  color: #fff;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.cta[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.05);\n}\n.social[_ngcontent-%COMP%] {\n  color: var(--texto);\n  font-size: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: color .2s ease;\n}\n.social[_ngcontent-%COMP%]:hover {\n  color: var(--texto-dim);\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1;\n  color: currentColor;\n}\n.login-button[_ngcontent-%COMP%] {\n  background-color: var(--cta);\n  color: var(--texto);\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition:\n    background-color 0.3s,\n    box-shadow 0.3s,\n    transform 0.1s;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.login-button[_ngcontent-%COMP%]:hover {\n  background-color: #e66f00;\n  box-shadow:\n    0 4px 5px -2px rgba(0, 0, 0, 0.2),\n    0 7px 10px 1px rgba(0, 0, 0, 0.14),\n    0 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.login-button[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n  box-shadow:\n    0 2px 2px -1px rgba(0, 0, 0, 0.2),\n    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n.drawer[_ngcontent-%COMP%]   .login-button-mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--cta);\n  color: var(--texto);\n  padding: 10px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  gap: 8px;\n  margin-top: 10px;\n  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.2s;\n  line-height: normal;\n}\n.drawer[_ngcontent-%COMP%]   .login-button-mobile[_ngcontent-%COMP%]:hover {\n  background-color: #e66f00;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  background: transparent;\n  border: 0;\n  color: var(--texto);\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.hamburger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n}\n.drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .35);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s ease;\n  z-index: 1200;\n}\n.drawer[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 78vw;\n  max-width: 320px;\n  height: 100dvh;\n  background: var(--azul);\n  padding: 16px;\n  transform: translateX(-100%);\n  transition: transform .2s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.drawer.open[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.drawer[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: transparent;\n  border: 0;\n  color: var(--texto);\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.drawer[_ngcontent-%COMP%]   .drawer-items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer[_ngcontent-%COMP%]   .drawer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--texto);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 8px;\n  border-radius: 8px;\n  font-weight: 500;\n}\n.drawer[_ngcontent-%COMP%]   .drawer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n}\n@media (max-width: 900px) {\n  .menu-items[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 36px;\n  }\n}\n@media (max-width: 720px) {\n  .menu-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n  .menu-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n/*# sourceMappingURL=menu.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(Menu, [{
    type: Component6,
    args: [{ selector: "app-menu", standalone: true, imports: [RouterLink2, RouterLinkActive, MatIconModule3], template: '<header class="menu-wrap" role="banner">\r\n  <nav class="menu-grid" aria-label="Navegacion principal">\r\n\r\n    <!-- IZQUIERDA: links (desktop) -->\r\n    <ul class="menu-items">\r\n      <li><a routerLink="/inicio" routerLinkActive="active-link"><mat-icon>home</mat-icon> Inicio</a></li>\r\n      <li><a routerLink="/registro" routerLinkActive="active-link"><mat-icon>edit</mat-icon> Registro</a></li>\r\n      <li><a routerLink="/historial" routerLinkActive="active-link"><mat-icon>history</mat-icon> Historial</a></li>\r\n      <li><a routerLink="/lector" routerLinkActive="active-link"><mat-icon>qr_code_scanner</mat-icon>Escanear QR</a></li>\r\n    </ul>\r\n\r\n    <!-- HAMBURGUESA (solo movil) -->\r\n    <button\r\n      class="hamburger"\r\n      type="button"\r\n      aria-label="Abrir menu"\r\n      aria-controls="mobile-menu"\r\n      [attr.aria-expanded]="isOpen"\r\n      (click)="toggle()">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n    <!-- CENTRO: logo -->\r\n    <a class="logo" routerLink="/" aria-label="Ir al inicio">\r\n      <img src="https://static.wixstatic.com/media/8a2cdc_fb088ff4add94711854b569553889689~mv2.png/v1/fill/w_164,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20blanco%20con%20l%C3%ADnea%20naranja.png" alt="Universidad Regional de Guatemala"/>\r\n    </a>\r\n\r\n    <!-- DERECHA: Bot\xF3n de Login (Reemplaza Redes Sociales) -->\r\n    <div class="menu-actions">\r\n      <!-- El bot\xF3n llama a la funci\xF3n handleLogin() definida en menu.ts -->\r\n      <button class="login-button" type="button" (click)="handleLogin()">\r\n        <mat-icon>account_circle</mat-icon>\r\n        Bienvenido\r\n      </button>\r\n    </div>\r\n\r\n  </nav>\r\n\r\n  <!-- DRAWER MOVIL -->\r\n  <div\r\n    id="mobile-menu"\r\n    class="drawer"\r\n    [class.open]="isOpen"\r\n    (click)="close()"\r\n    aria-hidden="{{!isOpen}"\r\n  >\r\n    <div class="panel" (click)="$event.stopPropagation()">\r\n      <button class="close" type="button" aria-label="Cerrar menu" (click)="close()">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n      <ul class="drawer-items">\r\n        <li><a routerLink="/inicio" (click)="close()"><mat-icon>home</mat-icon> Inicio</a></li>\r\n        <li><a routerLink="/registro" (click)="close()"><mat-icon>edit</mat-icon> Registro</a></li>\r\n        <li><a routerLink="/historial" (click)="close()"><mat-icon>history</mat-icon> Historial</a></li>\r\n        <li><a routerLink="/lector" (click)="close()"><mat-icon>qr_code_scanner</mat-icon> Escanear QR</a></li>\r\n        <!-- Bot\xF3n de Login en el men\xFA m\xF3vil tambi\xE9n -->\r\n        <li>\r\n          <!-- Usa la misma funci\xF3n, cerrando el men\xFA despu\xE9s de hacer clic -->\r\n          <button class="login-button-mobile" type="button" (click)="handleLogin(); close()">\r\n            <mat-icon>account_circle</mat-icon>\r\n            Login\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</header>\r\n', styles: ["/* src/app/Vista/menu/menu.css */\n.menu-wrap {\n  --azul: #004383;\n  --azul-osc: #003563;\n  --texto: #ffffff;\n  --texto-dim: rgba(255, 255, 255, .8);\n  --cta: #ea8a1a;\n  background: var(--azul);\n}\n.menu-grid {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 20px;\n}\n.menu-items {\n  list-style: none;\n  display: flex;\n  gap: 28px;\n  margin: 0;\n  padding: 0;\n  justify-self: start;\n}\n.menu-items li a {\n  text-decoration: none;\n  color: var(--texto);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  font-size: 16px;\n  opacity: .9;\n}\n.menu-items li a:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n.logo {\n  justify-self: center;\n  display: inline-flex;\n}\n.logo img {\n  height: 42px;\n  width: auto;\n  display: block;\n}\n.menu-actions {\n  justify-self: end;\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n}\n.cta {\n  background: var(--cta);\n  color: #fff;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.cta:hover {\n  filter: brightness(1.05);\n}\n.social {\n  color: var(--texto);\n  font-size: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: color .2s ease;\n}\n.social:hover {\n  color: var(--texto-dim);\n}\nmat-icon {\n  font-size: 20px;\n  line-height: 1;\n  color: currentColor;\n}\n.login-button {\n  background-color: var(--cta);\n  color: var(--texto);\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition:\n    background-color 0.3s,\n    box-shadow 0.3s,\n    transform 0.1s;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.login-button:hover {\n  background-color: #e66f00;\n  box-shadow:\n    0 4px 5px -2px rgba(0, 0, 0, 0.2),\n    0 7px 10px 1px rgba(0, 0, 0, 0.14),\n    0 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.login-button:active {\n  transform: translateY(1px);\n  box-shadow:\n    0 2px 2px -1px rgba(0, 0, 0, 0.2),\n    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n.drawer .login-button-mobile {\n  width: 100%;\n  background-color: var(--cta);\n  color: var(--texto);\n  padding: 10px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  gap: 8px;\n  margin-top: 10px;\n  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.2s;\n  line-height: normal;\n}\n.drawer .login-button-mobile:hover {\n  background-color: #e66f00;\n}\n.hamburger {\n  display: none;\n  background: transparent;\n  border: 0;\n  color: var(--texto);\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.hamburger:hover {\n  background: rgba(255, 255, 255, .08);\n}\n.drawer {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .35);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s ease;\n  z-index: 1200;\n}\n.drawer .panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 78vw;\n  max-width: 320px;\n  height: 100dvh;\n  background: var(--azul);\n  padding: 16px;\n  transform: translateX(-100%);\n  transition: transform .2s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer.open {\n  opacity: 1;\n  pointer-events: auto;\n}\n.drawer.open .panel {\n  transform: translateX(0);\n}\n.drawer .close {\n  align-self: flex-end;\n  background: transparent;\n  border: 0;\n  color: var(--texto);\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.drawer .drawer-items {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.drawer .drawer-items a {\n  color: var(--texto);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 8px;\n  border-radius: 8px;\n  font-weight: 500;\n}\n.drawer .drawer-items a:hover {\n  background: rgba(255, 255, 255, .08);\n}\n@media (max-width: 900px) {\n  .menu-items {\n    gap: 18px;\n  }\n  .logo img {\n    height: 36px;\n  }\n}\n@media (max-width: 720px) {\n  .menu-items {\n    display: none;\n  }\n  .logo {\n    justify-self: start;\n  }\n  .menu-actions {\n    display: none;\n  }\n  .hamburger {\n    display: inline-flex;\n  }\n}\n/*# sourceMappingURL=menu.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(Menu, { className: "Menu", filePath: "src/app/vista/menu/menu.ts", lineNumber: 15 });
})();
(() => {
  const id = "src%2Fapp%2Fvista%2Fmenu%2Fmenu.ts%40Menu";
  function Menu_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i08.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(Menu, m.default, [i08, i17, i26], [RouterLink2, RouterLinkActive, MatIconModule3, Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Menu_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Menu_HmrLoad(d.timestamp)));
})();

// src/app/Vista/footer/footer.ts
import { Component as Component7 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i09 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 19, vars: 0, consts: [[1, "footer-container"], [1, "footer-content"], [1, "footer-copyright"], ["aria-label", "S\xEDguenos en redes", 1, "footer-social"], [1, "social-text"], ["href", "https://www.facebook.com/people/Universidad-Regional-San-Raymundo/61576954335076/?mibextid=ZbWKwL", "target", "_blank", "rel", "noopener", "aria-label", "Facebook", 1, "social-link", "facebook"], ["viewBox", "0 0 24 24", "aria-hidden", "true", "focusable", "false", 1, "icon"], ["d", "M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .18 2 .18v2.2h-1.1c-1.1 0-1.5.68-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"], ["href", "https://www.instagram.com/uregionalr2/", "target", "_blank", "rel", "noopener", "aria-label", "Instagram", 1, "social-link", "instagram"], ["d", "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.75-.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"], ["href", "https://www.linkedin.com/in/universidad-regional-de-guatemala-regi%C3%B3n-2-aa6b052a0/", "target", "_blank", "rel", "noopener", "aria-label", "LinkedIn", 1, "social-link", "linkedin"], ["d", "M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.08V21H18v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z"], ["href", "https://www.youtube.com/channel/UC_T1zjwXfbgDF1y-dwmIX3w", "target", "_blank", "rel", "noopener", "aria-label", "YouTube", 1, "social-link", "youtube"], ["d", "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      i09.\u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "p", 2);
      i09.\u0275\u0275text(3, "\xA9 2025 ProyectoQRv1 - Todos los derechos reservados");
      i09.\u0275\u0275domElementEnd();
      i09.\u0275\u0275domElementStart(4, "div", 3)(5, "span", 4);
      i09.\u0275\u0275text(6, "S\xEDguenos en nuestras redes sociales:");
      i09.\u0275\u0275domElementEnd();
      i09.\u0275\u0275domElementStart(7, "a", 5);
      i09.\u0275\u0275namespaceSVG();
      i09.\u0275\u0275domElementStart(8, "svg", 6);
      i09.\u0275\u0275domElement(9, "path", 7);
      i09.\u0275\u0275domElementEnd()();
      i09.\u0275\u0275namespaceHTML();
      i09.\u0275\u0275domElementStart(10, "a", 8);
      i09.\u0275\u0275namespaceSVG();
      i09.\u0275\u0275domElementStart(11, "svg", 6);
      i09.\u0275\u0275domElement(12, "path", 9);
      i09.\u0275\u0275domElementEnd()();
      i09.\u0275\u0275namespaceHTML();
      i09.\u0275\u0275domElementStart(13, "a", 10);
      i09.\u0275\u0275namespaceSVG();
      i09.\u0275\u0275domElementStart(14, "svg", 6);
      i09.\u0275\u0275domElement(15, "path", 11);
      i09.\u0275\u0275domElementEnd()();
      i09.\u0275\u0275namespaceHTML();
      i09.\u0275\u0275domElementStart(16, "a", 12);
      i09.\u0275\u0275namespaceSVG();
      i09.\u0275\u0275domElementStart(17, "svg", 6);
      i09.\u0275\u0275domElement(18, "path", 13);
      i09.\u0275\u0275domElementEnd()()()()();
    }
  }, styles: ["\n\nbody[_ngcontent-%COMP%] {\n  padding-bottom: 6rem;\n  margin: 0;\n}\n.footer-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #003563;\n  color: #f9fafb;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  min-height: var(--footer-h);\n}\n.footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.social-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #d1d5db;\n  font-weight: normal;\n}\n.social-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.5rem;\n  border-radius: 9999px;\n  color: #f9fafb;\n  transition: color 0.2s ease-in-out;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n}\n@media (max-width: 768px) {\n  .footer-container[_ngcontent-%COMP%] {\n    padding: 1rem 1rem;\n  }\n  .footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    text-align: center;\n  }\n  .footer-copyright[_ngcontent-%COMP%] {\n    order: 2;\n    font-size: 0.75rem;\n    color: #9ca3af;\n  }\n  .footer-social[_ngcontent-%COMP%] {\n    order: 1;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=footer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(Footer, [{
    type: Component7,
    args: [{ selector: "app-footer", standalone: true, template: '<footer class="footer-container">\r\n    <!-- Contenedor flexible que alinea el copyright a la izquierda y lo social a la derecha. -->\r\n    <div class="footer-content">\r\n        <!-- Copyright -->\r\n        <p class="footer-copyright">&copy; 2025 ProyectoQRv1 - Todos los derechos reservados</p>\r\n\r\n        <!-- Bloque social (Alineado a la izquierda dentro de este div) -->\r\n        <div class="footer-social" aria-label="S\xEDguenos en redes">\r\n            <!-- Texto sin negrita, corregido "nuestras" -->\r\n            <span class="social-text">S\xEDguenos en nuestras redes sociales:</span>\r\n\r\n            <!-- Facebook -->\r\n            <a class="social-link facebook" href="https://www.facebook.com/people/Universidad-Regional-San-Raymundo/61576954335076/?mibextid=ZbWKwL" target="_blank" rel="noopener" aria-label="Facebook">\r\n                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r\n                    <path\r\n                        d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .18 2 .18v2.2h-1.1c-1.1 0-1.5.68-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />\r\n                </svg>\r\n            </a>\r\n\r\n            <!-- Instagram -->\r\n            <a class="social-link instagram" href="https://www.instagram.com/uregionalr2/" target="_blank" rel="noopener" aria-label="Instagram">\r\n                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r\n                    <path\r\n                        d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.75-.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />\r\n                </svg>\r\n            </a>\r\n\r\n            <!-- LinkedIn -->\r\n            <a class="social-link linkedin" href="https://www.linkedin.com/in/universidad-regional-de-guatemala-regi%C3%B3n-2-aa6b052a0/"\r\n                target="_blank" rel="noopener" aria-label="LinkedIn">\r\n                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r\n                    <path\r\n                        d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.08V21H18v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z" />\r\n                </svg>\r\n            </a>\r\n\r\n\r\n            <!-- YouTube -->\r\n            <a class="social-link youtube" href="https://www.youtube.com/channel/UC_T1zjwXfbgDF1y-dwmIX3w" target="_blank"\r\n                rel="noopener" aria-label="YouTube">\r\n                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">\r\n                    <path\r\n                        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />\r\n                </svg>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n\r\n', styles: ["/* src/app/Vista/footer/footer.css */\nbody {\n  padding-bottom: 6rem;\n  margin: 0;\n}\n.footer-container {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #003563;\n  color: #f9fafb;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  min-height: var(--footer-h);\n}\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.footer-social {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.social-text {\n  font-size: 0.875rem;\n  color: #d1d5db;\n  font-weight: normal;\n}\n.social-link {\n  display: inline-flex;\n  padding: 0.5rem;\n  border-radius: 9999px;\n  color: #f9fafb;\n  transition: color 0.2s ease-in-out;\n}\n.icon {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n}\n.social-link:hover {\n  color: #3b82f6;\n}\n@media (max-width: 768px) {\n  .footer-container {\n    padding: 1rem 1rem;\n  }\n  .footer-content {\n    flex-direction: column;\n    gap: 0.75rem;\n    text-align: center;\n  }\n  .footer-copyright {\n    order: 2;\n    font-size: 0.75rem;\n    color: #9ca3af;\n  }\n  .footer-social {\n    order: 1;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/vista/footer/footer.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fvista%2Ffooter%2Ffooter.ts%40Footer";
  function Footer_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i09.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i09.\u0275\u0275replaceMetadata(Footer, m.default, [i09], [Component7], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Footer_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Footer_HmrLoad(d.timestamp)));
})();

// src/app/app.ts
import { MatProgressSpinnerModule as MatProgressSpinnerModule2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_progress-spinner.js?v=3a7f64c5";
import * as i010 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i18 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common.js?v=3a7f64c5";
import * as i27 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_material_progress-spinner.js?v=3a7f64c5";
import * as i35 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_cdk_bidi.js?v=3a7f64c5";
function App_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "div")(1, "div", 2)(2, "div", 3);
    i010.\u0275\u0275element(3, "img", 4);
    i010.\u0275\u0275elementStart(4, "h1");
    i010.\u0275\u0275text(5, "Universidad Regional de Guatemala");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(6, "h1");
    i010.\u0275\u0275text(7, "Sede San Raymundo");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275element(8, "mat-spinner", 5);
    i010.\u0275\u0275elementStart(9, "p");
    i010.\u0275\u0275text(10, "Cargando aplicaci\xF3n...");
    i010.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i010.\u0275\u0275nextContext();
    i010.\u0275\u0275advance(3);
    i010.\u0275\u0275property("src", ctx_r0.logoUrl, i010.\u0275\u0275sanitizeUrl);
  }
}
function App_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "div", 6);
    i010.\u0275\u0275element(1, "app-menu");
    i010.\u0275\u0275elementStart(2, "main", 7);
    i010.\u0275\u0275element(3, "router-outlet");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275element(4, "app-footer");
    i010.\u0275\u0275elementEnd();
  }
}
var App = class _App {
  cdr;
  // Estado para controlar la visibilidad del splash screen
  showSplash = true;
  // URL del logo de la universidad
  logoUrl = "https://static.wixstatic.com/media/8a2cdc_fb088ff4add94711854b569553889689~mv2.png/v1/fill/w_164,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20blanco%20con%20l%C3%ADnea%20naranja.png";
  // Inyectamos ChangeDetectorRef para forzar la actualización del DOM
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;
      this.cdr.detectChanges();
    }, 3e3);
  }
  /**
   * Método para mostrar el splash temporalmente, útil para transiciones
   * como después de un login o al cargar una ruta pesada.
   * @param duration Duración en milisegundos del splash.
   */
  triggerSplash(duration = 1500) {
    this.showSplash = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showSplash = false;
      this.cdr.detectChanges();
    }, duration);
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(i010.\u0275\u0275directiveInject(i010.ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ i010.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["mainContent", ""], [4, "ngIf", "ngIfElse"], [1, "splash-screen"], [1, "splash-content"], ["alt", "Logo de la Universidad", 1, "splash-logo", 3, "src"], ["color", "warn", "diameter", "50"], [1, "main-content"], [1, "router-view-container"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i010.\u0275\u0275template(0, App_div_0_Template, 11, 1, "div", 1)(1, App_ng_template_1_Template, 5, 0, "ng-template", null, 0, i010.\u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const mainContent_r2 = i010.\u0275\u0275reference(2);
      i010.\u0275\u0275property("ngIf", ctx.showSplash)("ngIfElse", mainContent_r2);
    }
  }, dependencies: [CommonModule6, i18.NgClass, i18.NgComponentOutlet, i18.NgForOf, i18.NgIf, i18.NgTemplateOutlet, i18.NgStyle, i18.NgSwitch, i18.NgSwitchCase, i18.NgSwitchDefault, i18.NgPlural, i18.NgPluralCase, Menu, MatProgressSpinnerModule2, i27.MatProgressSpinner, i35.Dir, RouterOutlet, Footer, i18.AsyncPipe, i18.UpperCasePipe, i18.LowerCasePipe, i18.JsonPipe, i18.SlicePipe, i18.DecimalPipe, i18.PercentPipe, i18.TitleCasePipe, i18.CurrencyPipe, i18.DatePipe, i18.I18nPluralPipe, i18.I18nSelectPipe, i18.KeyValuePipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --footer-h: 80px;\n}\n@media (max-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --footer-h: 120px;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: var(--footer-h);\n}\n[_ngcontent-%COMP%]:root {\n  --azul: #004383;\n  --cta: #ea8a1a;\n  --texto: #ffffff;\n}\n.splash-screen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--azul);\n  color: var(--texto);\n  z-index: 9999;\n  background-color: #034a8b;\n  color: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-style: italic;\n}\n.splash-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 20px;\n}\n.splash-logo[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  margin-bottom: 25px;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n}\n.splash-screen[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.splash-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 1rem;\n  color: var(--texto);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 0.9;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.main-content[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n}\n.router-view-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 20px;\n}\n/*# sourceMappingURL=app.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(App, [{
    type: Component8,
    args: [{ selector: "app-root", standalone: true, imports: [CommonModule6, Menu, MatProgressSpinnerModule2, RouterOutlet, Footer], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- Muestra el Splash Screen mientras showSplash es true -->\r\n<div *ngIf="showSplash; else mainContent">\r\n  <!-- SPLASH SCREEN -->\r\n  <div class="splash-screen">\r\n    <div class="splash-content">\r\n      <!-- El [src] usa la variable logoUrl definida en app.ts -->\r\n      <img [src]="logoUrl" alt="Logo de la Universidad" class="splash-logo">\r\n      <h1>Universidad Regional de Guatemala</h1>\r\n      <h1>Sede San Raymundo</h1>\r\n      <!-- Utilizamos el spinner de Material para indicar carga -->\r\n      <mat-spinner color="warn" diameter="50"></mat-spinner>\r\n      <p>Cargando aplicaci\xF3n...</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Main content que se muestra cuando showSplash es false -->\r\n<ng-template #mainContent>\r\n  <div class="main-content">\r\n    <!-- 1. Menu -->\r\n    <app-menu></app-menu>\r\n    <!-- 2. Contenedor principal de las rutas -->\r\n    <main class="router-view-container">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n    <!-- 3. Footer -->\r\n    <app-footer></app-footer>\r\n  </div>\r\n</ng-template>\r\n', styles: ['/* src/app/app.css */\n:root {\n  --footer-h: 80px;\n}\n@media (max-width: 768px) {\n  :root {\n    --footer-h: 120px;\n  }\n}\nbody {\n  margin: 0;\n  padding-bottom: var(--footer-h);\n}\n:root {\n  --azul: #004383;\n  --cta: #ea8a1a;\n  --texto: #ffffff;\n}\n.splash-screen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--azul);\n  color: var(--texto);\n  z-index: 9999;\n  background-color: #034a8b;\n  color: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-style: italic;\n}\n.splash-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 20px;\n}\n.splash-logo {\n  width: 150px;\n  height: auto;\n  margin-bottom: 25px;\n  animation: pulse 1.5s infinite ease-in-out;\n}\n.splash-screen h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.splash-screen p {\n  margin-top: 15px;\n  font-size: 1rem;\n  color: var(--texto);\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 0.9;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.main-content {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n}\n.router-view-container {\n  flex-grow: 1;\n  padding: 20px;\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [{ type: i010.ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 22 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i010.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i010.\u0275\u0275replaceMetadata(App, m.default, [i010, i18, i27, i35], [CommonModule6, Menu, MatProgressSpinnerModule2, RouterOutlet, Footer, Component8, ChangeDetectionStrategy], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
import { provideAnimations as provideAnimations2 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_platform-browser_animations.js?v=3a7f64c5";
import { provideToastr } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/ngx-toastr.js?v=3a7f64c5";

// src/app/core/interceptors/auth.interceptor.ts
import { Injectable as Injectable3 } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import { HTTP_INTERCEPTORS } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_common_http.js?v=3a7f64c5";
import { throwError } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/rxjs.js?v=3a7f64c5";
import { catchError } from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/rxjs_operators.js?v=3a7f64c5";
import * as i011 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_core.js?v=3a7f64c5";
import * as i28 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/@angular_router.js?v=3a7f64c5";
import * as i36 from "/@fs/C:/Users/Carlos Orozco/Documents/Sistema-Asistencia-Serve-Windows/proyectoQR/frontend/ProyectoQRV1/.angular/cache/20.3.6/ProyectoQRv1/vite/deps/ngx-toastr.js?v=3a7f64c5";
var AuthInterceptor = class _AuthInterceptor {
  auth;
  router;
  toastr;
  constructor(auth, router, toastr) {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
  }
  intercept(req, next) {
    const token = this.auth.token;
    let authReq = req;
    if (token) {
      authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    return next.handle(authReq).pipe(catchError((err) => {
      if (err.status === 401) {
        this.auth.logout(false);
        try {
          this.toastr.warning("Tu sesi\xF3n expir\xF3. Por favor inicia sesi\xF3n nuevamente.");
        } catch {
        }
        this.router.navigate(["/login"]);
      }
      return throwError(() => err);
    }));
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)(i011.\u0275\u0275inject(AuthService), i011.\u0275\u0275inject(i28.Router), i011.\u0275\u0275inject(i36.ToastrService));
  };
  static \u0275prov = /* @__PURE__ */ i011.\u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(AuthInterceptor, [{
    type: Injectable3
  }], () => [{ type: AuthService }, { type: i28.Router }, { type: i36.ToastrService }], null);
})();
var authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

// src/main.ts
bootstrapApplication(App, __spreadProps(__spreadValues({}, appConfig), {
  providers: [
    ...appConfig.providers ?? [],
    provideAnimations2(),
    // reemplaza a BrowserAnimationsModule
    provideToastr({
      timeOut: 3500,
      positionClass: "toast-bottom-center",
      preventDuplicates: true,
      progressBar: true,
      closeButton: false,
      newestOnTop: true
    }),
    authInterceptorProvider
  ]
})).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9WaXN0YS9pbmljaW8vaW5pY2lvLnRzIiwic3JjL2FwcC9WaXN0YS9pbmljaW8vaW5pY2lvLmh0bWwiLCJzcmMvYXBwL1Zpc3RhL3JlZ2lzdHJvL3JlZ2lzdHJvLnRzIiwic3JjL2FwcC9WaXN0YS9yZWdpc3Ryby9yZWdpc3Ryby5odG1sIiwic3JjL2FwcC9WaXN0YS9tb2RhbC1xci9tb2RhbC1xci50cyIsInNyYy9hcHAvVmlzdGEvbW9kYWwtcXIvbW9kYWwtcXIuaHRtbCIsInNyYy9hcHAvU2VydmljZS9yZWdpc3Ryby1lc3R1ZGlhbnRlLnNlcnZpY2UudHMiLCJzcmMvYXBwL1Zpc3RhL2xlY3Rvci1xci9sZWN0b3ItcXIudHMiLCJzcmMvYXBwL1Zpc3RhL2xlY3Rvci1xci9sZWN0b3ItcXIuaHRtbCIsInNyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvbG9naW4vbG9naW4udHMiLCJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvbG9naW4vbG9naW4uaHRtbCIsInNyYy9hcHAvY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJzcmMvYXBwL2NvcmUvbW9kZWxzL2F1dGgudHMiLCJzcmMvYXBwL2F1dGgvYXV0aC5ndWFyZC50cyIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLnRzIiwic3JjL2FwcC9hcHAuaHRtbCIsInNyYy9hcHAvVmlzdGEvbWVudS9tZW51LnRzIiwic3JjL2FwcC9WaXN0YS9tZW51L21lbnUuaHRtbCIsInNyYy9hcHAvVmlzdGEvZm9vdGVyL2Zvb3Rlci50cyIsInNyYy9hcHAvVmlzdGEvZm9vdGVyL2Zvb3Rlci5odG1sIiwic3JjL2FwcC9jb3JlL2ludGVyY2VwdG9ycy9hdXRoLmludGVyY2VwdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW4udHNcclxuaW1wb3J0IHsgYm9vdHN0cmFwQXBwbGljYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcCc7XHJcblxyXG4vLyBTdGFuZGFsb25lOiB1c2FyIHByb3ZpZGVycywgbm8gbcOzZHVsb3MuXHJcbmltcG9ydCB7IHByb3ZpZGVBbmltYXRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgcHJvdmlkZVRvYXN0ciB9IGZyb20gJ25neC10b2FzdHInO1xyXG5pbXBvcnQgeyBhdXRoSW50ZXJjZXB0b3JQcm92aWRlciB9IGZyb20gJy4vYXBwL2NvcmUvaW50ZXJjZXB0b3JzL2F1dGguaW50ZXJjZXB0b3InO1xyXG5cclxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwLCB7XHJcbiAgLi4uYXBwQ29uZmlnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uKGFwcENvbmZpZy5wcm92aWRlcnMgPz8gW10pLFxyXG4gICAgcHJvdmlkZUFuaW1hdGlvbnMoKSwgLy8gcmVlbXBsYXphIGEgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuICAgIHByb3ZpZGVUb2FzdHIoe1xyXG4gICAgICB0aW1lT3V0OiAzNTAwLFxyXG4gICAgICBwb3NpdGlvbkNsYXNzOiAndG9hc3QtYm90dG9tLWNlbnRlcicsXHJcbiAgICAgIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICBuZXdlc3RPblRvcDogdHJ1ZSxcclxuICAgICAgXHJcbiAgICB9KSxcclxuICAgICAgYXV0aEludGVyY2VwdG9yUHJvdmlkZXIsXHJcbiAgXSxcclxufSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiIsIi8vIGFwcC5jb25maWcudHNcclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvbkNvbmZpZyxcclxuICBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzLFxyXG4gIHByb3ZpZGVab25lbGVzc0NoYW5nZURldGVjdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwcm92aWRlUm91dGVyLCB3aXRoVmlld1RyYW5zaXRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuaW1wb3J0IHsgcHJvdmlkZUNsaWVudEh5ZHJhdGlvbiwgd2l0aEV2ZW50UmVwbGF5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHByb3ZpZGVBbmltYXRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgaW1wb3J0UHJvdmlkZXJzRnJvbSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIHdpdGhJbnRlcmNlcHRvcnMgeSB0dSBpbnRlcmNlcHRvclxyXG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCwgd2l0aEZldGNoIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAvLyBIdHRwQ2xpZW50IGNvbiBzb3BvcnRlIGRlIGZldGNoOyBlbCBpbnRlcmNlcHRvciBzZSByZWdpc3RyYSBnbG9iYWxtZW50ZSBlbiBtYWluLnRzXHJcbiAgICBwcm92aWRlSHR0cENsaWVudCh3aXRoRmV0Y2goKSksXHJcbiAgICAgIGltcG9ydFByb3ZpZGVyc0Zyb20oSHR0cENsaWVudE1vZHVsZSksXHJcbiAgICAgIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMoKSxcclxuICAgIHByb3ZpZGVSb3V0ZXIoXHJcbiAgICAgIHJvdXRlcyxcclxuICAgICAgd2l0aFZpZXdUcmFuc2l0aW9ucygpXHJcbiAgICApLFxyXG4gICAgcHJvdmlkZUNsaWVudEh5ZHJhdGlvbih3aXRoRXZlbnRSZXBsYXkoKSksXHJcbiAgICBwcm92aWRlQW5pbWF0aW9ucygpXHJcbiAgXVxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgc2lnbmFsLCBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaW5pY2lvJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICAvL1JvdXRlckxpbmtXaXRoSHJlZiwgLy8gRGVzY29tZW50YXIgc2kgc2UgdXNhIGVuIGxhIHBsYW50aWxsYVxyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5pY2lvLmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9pbmljaW8uY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5pY2lvIHtcclxuICBpbWFnZW5lcyA9IFtcclxuICAgICdodHRwczovL2Jsb2dnZXIuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2ltZy9iL1IyOXZaMnhsL0FWdlhzRWhzTFloTnBHUHBldTVSVE9oOFZMOUVnZ0duZWU2ZmdXNVF2eEhOOUZWRlVuWXFZRi1JVTF3NFNISUhWX3lVdkxNb3BndWExWW9ZaXlpZFo5UzBsdkFCb0s4VkJNWVMzV3VxV1pvWlB0MFpKLTBtUXRuUVlCcUNvNF8wUXZWNnlFUTdPc0lka3BLcEVDX0svczE2MDAvREpJXzAwNDAuanBnJyxcclxuICAgICdodHRwczovL3VyZWdpb25hbC5vbmxpbmUvcGx1Z2luZmlsZS5waHAvMS90aGVtZV9hY2FkZW1pL21zcG90bWVkaWEvMTczOTQ3NDg0OC9Mb2dvJTIwMi5qcGcnLFxyXG4gIF07XHJcblxyXG4gIGltYWdlbkFjdHVhbCA9IHNpZ25hbCgwKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBlZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZW5BY3R1YWwudXBkYXRlKGkgPT4gKGkgKyAxKSAlIHRoaXMuaW1hZ2VuZXMubGVuZ3RoKTtcclxuICAgICAgfSwgNDAwMCk7IC8vIGNhbWJpYSBjYWRhIDQgc2VndW5kb3NcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIjwhLS0gQ2FycnVzZWwgLS0+XHJcbjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImNhcm91c2VsLXNsaWRlXCJcclxuICAgICpuZ0Zvcj1cImxldCBpbWFnZW4gb2YgaW1hZ2VuZXM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgW2NsYXNzLmFjdGl2ZV09XCJpID09PSBpbWFnZW5BY3R1YWwoKVwiXHJcbiAgPlxyXG4gICAgPGltZyBbc3JjXT1cImltYWdlblwiIGFsdD1cIkltYWdlbiBkZWwgY2FycnVzZWxcIiBjbGFzcz1cImNhcm91c2VsLWltYWdlXCIgLz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLTxkaXYgY2xhc3M9XCJidXR0b24tb3ZlcmxheVwiPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiXHJcbiAgICAgIHJvdXRlckxpbms9XCIvcmVnaXN0cm9cIlxyXG4gICAgPlxyXG4gICAgICBSZWfDrXN0cmF0ZVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+LS0+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBDYXJkIGRlIEFuZ3VsYXIgTWF0ZXJpYWwgLS0+XHJcbjxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5CaWVudmVuaWRvczwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5Db250cm9sIGRlIGluZ3Jlc29zIGNvbiBjw7NkaWdvIFFSPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEVzdGUgc2lzdGVtYSB0ZSBwZXJtaXRlIHJlZ2lzdHJhciBpbmdyZXNvcyB5IGVncmVzb3MgZGUgZm9ybWEgcsOhcGlkYSB5IHNlZ3VyYSB1c2FuZG8gY8OzZGlnb3MgUVIuIEV4cGxvcmEgbGFzIG9wY2lvbmVzIGRlbCBtZW7DuiBwYXJhIGNvbWVuemFyLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICA8IS0tPGJ1dHRvbiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCIvcmVnaXN0cm9cIj5JciBhIFJlZ2lzdHJvPC9idXR0b24+LS0+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+XHJcblxyXG48IS0tIEZBQiBXaGF0c0FwcCAoQm90b24gZmxvdGFudGUsIGZpam8gYWJham8gYSBsYSBkZXJlY2hhKSAtLT5cclxuPGEgY2xhc3M9XCJmYWItd2hhdHNhcHBcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS81MDIzNjA3NTY0Mz90ZXh0PUhvbGElMjBuZWNlc2l0byUyMGluZm9ybWFjaSVDMyVCM25cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gIHJlbD1cIm5vb3BlbmVyXCIgYXJpYS1sYWJlbD1cIkNvbnRhY3RhciBwb3IgV2hhdHNBcHBcIj5cclxuICA8IS0tIFNWRyBpbmxpbmUgV2hhdHNBcHAgKGJsYW5jbyBzb2JyZSB2ZXJkZSkgLS0+XHJcbiAgPHN2ZyBjbGFzcz1cIndhLWljb25cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTkuMTEgMTcuMmMtLjI3LS4xMy0xLjU3LS43Ny0xLjgxLS44Ni0uMjQtLjA5LS40MS0uMTMtLjU5LjEzLS4xOC4yNy0uNjguODYtLjgzIDEuMDQtLjE1LjE4LS4zMS4yLS41OC4wNy0uMjctLjEzLTEuMTUtLjQyLTIuMTktMS4zMy0uODEtLjcyLTEuMzYtMS42MS0xLjUyLTEuODgtLjE2LS4yNy0uMDItLjQxLjExLS41NC4xMS0uMTEuMjctLjI5LjQtLjQzLjEzLS4xNS4xOC0uMjUuMjctLjQzLjA5LS4xOC4wNC0uMzItLjAyLS40NS0uMDctLjEzLS41OS0xLjQyLS44MS0xLjk1LS4yMS0uNS0uNDMtLjQzLS41OS0uNDRsLS41LS4wMWMtLjE2IDAtLjQzLjA3LS42Ni4zMi0uMjIuMjUtLjg3Ljg1LS44NyAyLjA4IDAgMS4yMy45IDIuNDEgMS4wMyAyLjU4LjEzLjE4IDEuNzcgMi43IDQuMjkgMy43OC42LjI2IDEuMDcuNDEgMS40NC41Mi42LjE5IDEuMTUuMTYgMS41OC4xLjQ4LS4wNyAxLjU3LS42NCAxLjc5LTEuMjUuMjItLjYxLjIyLTEuMTMuMTUtMS4yNS0uMDctLjExLS4yNC0uMTgtLjUtLjMxek0xNi4wMyA0QzkuOTMgNCA1IDguOTMgNSAxNS4wM2MwIDEuOTQuNTEgMy43NiAxLjM5IDUuMzRMNSAyN2w2Ljc4LTEuNzhhMTEuMDIgMTEuMDIgMCAwIDAgNC4yNS44MWM2LjA5IDAgMTEuMDMtNC45MyAxMS4wMy0xMS4wM1MyMi4xMiA0IDE2LjAzIDR6bTAgMjAuMTdjLTEuNSAwLTIuOS0uNC00LjEyLTEuMTFsLS4yOS0uMTctNC4wMiAxLjA2IDEuMDgtMy45Mi0uMTktLjNhOC45OSA4Ljk5IDAgMSAxIDcuNTQgNC40NHpcIiAvPlxyXG4gIDwvc3ZnPlxyXG48L2E+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBzcmMvYXBwL1Zpc3RhL3JlZ2lzdHJvL3JlZ2lzdHJvLnRzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuXHJcbi8vIEFuZ3VsYXIgTWF0ZXJpYWxcclxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5cclxuLy8gU2UgaW1wb3J0YSBlbCBjb21wb25lbnRlIGRlbCBNb2RhbCBwYXJhIHBvZGVyIHVzYXJsb1xyXG5pbXBvcnQgeyBNb2RhbFFyIH0gZnJvbSAnLi4vbW9kYWwtcXIvbW9kYWwtcXInOyAvLyBSdXRhIGRlIGltcG9ydGFjacOzbiBjb3JyZWdpZGFcclxuXHJcbmltcG9ydCB7IFJlZ2lzdHJvRXN0dWRpYW50ZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZS9yZWdpc3Ryby1lc3R1ZGlhbnRlJztcclxuaW1wb3J0IHsgUmVnaXN0cm9Fc3R1ZGlhbnRlU2VydmljZSB9IGZyb20gJy4uLy4uL1NlcnZpY2UvcmVnaXN0cm8tZXN0dWRpYW50ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJlZ2lzdHJvJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsXHJcbiAgICAvLyBTZSBhw7FhZGUgZWwgY29tcG9uZW50ZSBkZWwgTW9kYWwgYSBsb3MgaW1wb3J0c1xyXG4gICAgTW9kYWxRclxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdHJvLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdHJvLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RybyB7XHJcbiAgaGlkZSA9IHRydWU7IC8vIG1vc3RyYXIvb2N1bHRhciBjb250cmFzZcOxYVxyXG5cclxuICBlc3R1ZGlhbnRlOiBSZWdpc3Ryb0VzdHVkaWFudGUgPSB7XHJcbiAgICBub21icmU6ICcnLFxyXG4gICAgYXBlbGxpZG86ICcnLFxyXG4gICAgbnVtZXJvQ2FybmV0OiAnJyxcclxuICAgIHRlbGVmb25vOiAnJyxcclxuICAgIGRpcmVjY2lvbjogJycsXHJcbiAgICBhbmlvOiAnJyxcclxuICAgIHNlZGU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgY29udHJhc2VuYTogJycsXHJcbiAgICByb2w6ICdFU1RVRElBTlRFJyxcclxuICAgIHVzdWFyaW86ICcnIC8vIG9wY2lvbmFsOyBwdWVkZXMgZGVqYXJsbyB2YWPDrW9cclxuICB9O1xyXG5cclxuICBxckdlbmVyYWRvOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBxclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgLy8gTGEgcHJvcGllZGFkIHJvbGVzIHNlIG1hbnRpZW5lIGludGFjdGFcclxuICByb2xlcyA9IFsnRVNUVURJQU5URScsICdET0NFTlRFJywgJ0FETUlOJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNpbzogUmVnaXN0cm9Fc3R1ZGlhbnRlU2VydmljZSxcclxuICAgIHByaXZhdGUgdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcclxuICApIHt9XHJcblxyXG4gIHJlZ2lzdHJhcihmb3JtOiBOZ0Zvcm0pIHtcclxuICAgIGlmIChmb3JtLmludmFsaWQpIHtcclxuICAgICAgZm9ybS5jb250cm9sLm1hcmtBbGxBc1RvdWNoZWQoKTtcclxuICAgICAgdGhpcy50b2FzdHIud2FybmluZygnUG9yIGZhdm9yIGNvbXBsZXRhIGxvcyBjYW1wb3MgcmVzYWx0YWRvcy4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGVsIHVzdWFyaW8gc2UgZGVqYSB2YWPDrW8sIGVsIGJhY2tlbmQgbG8gYXV0b2dlbmVyYVxyXG4gICAgaWYgKCF0aGlzLmVzdHVkaWFudGUudXN1YXJpbykgZGVsZXRlICh0aGlzLmVzdHVkaWFudGUgYXMgYW55KS51c3VhcmlvO1xyXG5cclxuICAgIHRoaXMuc2VydmljaW8ucmVnaXN0cmFyKHRoaXMuZXN0dWRpYW50ZSkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKHJlc3B1ZXN0YTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5xckdlbmVyYWRvID0gcmVzcHVlc3RhPy5pbWFnZW5RUiA/PyBudWxsO1xyXG4gICAgICAgIHRoaXMucXJWaXNpYmxlID0gISF0aGlzLnFyR2VuZXJhZG87XHJcblxyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnN1Y2Nlc3MoJ0VzdHVkaWFudGUgcmVnaXN0cmFkbyBjb3JyZWN0YW1lbnRlJywgJ8OJeGl0bycpO1xyXG4gICAgICAgICAgfSwgNjApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3JtLnJlc2V0Rm9ybSh7XHJcbiAgICAgICAgICByb2w6ICdFU1RVRElBTlRFJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCByZWdpc3RyYXI6JywgZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCAmJiBlcnJvci5lcnJvcikge1xyXG4gICAgICAgICAgdGhpcy50b2FzdHIuZXJyb3IoZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0ci5lcnJvcignRXJyb3IgaW5lc3BlcmFkbyBhbCByZWdpc3RyYXIgZXN0dWRpYW50ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTZSBsbGFtYSBjdWFuZG8gZWwgbW9kYWwgZW1pdGUgZWwgZXZlbnRvIChjZXJyYXIpXHJcbiAgY2VycmFyUVIoKSB7IFxyXG4gICAgdGhpcy5xclZpc2libGUgPSBmYWxzZTsgXHJcbiAgICB0aGlzLnFyR2VuZXJhZG8gPSBudWxsOyAvLyBTZSBsaW1waWEgbGEgaW1hZ2VuIHBhcmEgbGEgcHLDs3hpbWEgdmV6XHJcbiAgfVxyXG5cclxuICAvLyBMYSBmdW5jacOzbiBkZXNjYXJnYXJRUigpIHNlIGVsaW1pbmEgZGUgYXF1w60gcG9ycXVlIGFob3JhIGVzdMOhIGVuIGVsIGNvbXBvbmVudGUgbW9kYWwtcXIudHNcclxufVxyXG5cclxuXHJcbiIsIjxtYXQtY2FyZCBjbGFzcz1cIm5wLWNhcmRcIj5cclxuICA8ZGl2IGNsYXNzPVwibnAtdGl0bGVcIj5cclxuICAgIDxtYXQtaWNvbj5wZXJzb25fYWRkPC9tYXQtaWNvbj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzcz1cIm0tMFwiPlJlZ2lzdHJvIFVzdWFyaW9zPC9oMj5cclxuICAgICAgPHAgY2xhc3M9XCJucC1zdWJ0aXRsZVwiPkNvbXBsZXRhIGxvcyBkYXRvcyBwYXJhIGNyZWFyIGxhIGN1ZW50YSB5IGdlbmVyYXIgZWwgUVI8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGZvcm0gI2Zvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwicmVnaXN0cmFyKGZvcm0pXCIgY2xhc3M9XCJucC1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJucC1jb2xcIj5cclxuICAgICAgPCEtLSBOb21icmUgLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+Tm9tYnJlPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0XHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVzdHVkaWFudGUubm9tYnJlXCJcclxuICAgICAgICAgICAgICAgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICNub21icmU9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIm5vbWJyZS5pbnZhbGlkICYmIChub21icmUudG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibm9tYnJlLmVycm9ycz8uWydyZXF1aXJlZCddXCI+RWwgbm9tYnJlIGVzIG9ibGlnYXRvcmlvLjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibm9tYnJlLmVycm9ycz8uWydtaW5sZW5ndGgnXVwiPk3DrW5pbW8gMiBjYXJhY3RlcmVzLjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDwhLS0gQXBlbGxpZG8gLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+QXBlbGxpZG88L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgbmFtZT1cImFwZWxsaWRvXCJcclxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJlc3R1ZGlhbnRlLmFwZWxsaWRvXCJcclxuICAgICAgICAgICAgICAgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICNhcGVsbGlkbz1cIm5nTW9kZWxcIj5cclxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiYXBlbGxpZG8uaW52YWxpZCAmJiAoYXBlbGxpZG8udG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiYXBlbGxpZG8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5FbCBhcGVsbGlkbyBlcyBvYmxpZ2F0b3Jpby48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImFwZWxsaWRvLmVycm9ycz8uWydtaW5sZW5ndGgnXVwiPk3DrW5pbW8gMiBjYXJhY3RlcmVzLjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDwhLS0gRW1haWwgLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+Q29ycmVvIGVsZWN0csOzbmljbzwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVzdHVkaWFudGUuZW1haWxcIlxyXG4gICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAjZW1haWw9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsLmludmFsaWQgJiYgKGVtYWlsLnRvdWNoZWQgfHwgZm9ybS5zdWJtaXR0ZWQpXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImVtYWlsLmVycm9ycz8uWydyZXF1aXJlZCddXCI+RWwgY29ycmVvIGVzIG9ibGlnYXRvcmlvLjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZW1haWwuZXJyb3JzPy5bJ2VtYWlsJ11cIj5Gb3JtYXRvIGRlIGNvcnJlbyBpbnbDoWxpZG8uPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPCEtLSBDb250cmFzZcOxYSAtLT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5Db250cmFzZcOxYTwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJjb250cmFzZW5hXCJcclxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJlc3R1ZGlhbnRlLmNvbnRyYXNlbmFcIlxyXG4gICAgICAgICAgICAgICByZXF1aXJlZCBtaW5sZW5ndGg9XCI2XCJcclxuICAgICAgICAgICAgICAgI2NvbnRyYXNlbmE9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0U3VmZml4IHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgYXJpYS1sYWJlbD1cIk1vc3RyYXIvb2N1bHRhciBjb250cmFzZcOxYVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnt7IGhpZGUgPyAndmlzaWJpbGl0eScgOiAndmlzaWJpbGl0eV9vZmYnIH19PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiY29udHJhc2VuYS5pbnZhbGlkICYmIChjb250cmFzZW5hLnRvdWNoZWQgfHwgZm9ybS5zdWJtaXR0ZWQpXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbnRyYXNlbmEuZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5MYSBjb250cmFzZcOxYSBlcyBvYmxpZ2F0b3JpYS48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImNvbnRyYXNlbmEuZXJyb3JzPy5bJ21pbmxlbmd0aCddXCI+TcOtbmltbyA2IGNhcmFjdGVyZXMuPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPCEtLSBSb2wgLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+Um9sPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QgbmFtZT1cInJvbFwiIFsobmdNb2RlbCldPVwiZXN0dWRpYW50ZS5yb2xcIiByZXF1aXJlZCAjcm9sPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHIgb2Ygcm9sZXNcIiBbdmFsdWVdPVwiclwiPnt7IHIgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJyb2wuaW52YWxpZCAmJiAocm9sLnRvdWNoZWQgfHwgZm9ybS5zdWJtaXR0ZWQpXCI+XHJcbiAgICAgICAgICBFbCByb2wgZXMgb2JsaWdhdG9yaW8uXHJcbiAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICA8IS0tIFVzdWFyaW8gKG9wY2lvbmFsKSAtLT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5Vc3VhcmlvIChvcGNpb25hbCk8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgbmFtZT1cInVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVzdHVkaWFudGUudXN1YXJpb1wiXHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2kgbG8gZGVqYXMgdmFjw61vLCBzZSBhdXRvZ2VuZXJhXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibnAtY29sXCI+XHJcbiAgICAgIDwhLS0gTsO6bWVybyBkZSBDYXJuZXQ6IFNvbG8gZXMgb2JsaWdhdG9yaW8gc2kgZWwgcm9sIGVzIEVTVFVESUFOVEUgLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+TsO6bWVybyBkZSBDYXJuZXQ8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgbmFtZT1cIm51bWVyb0Nhcm5ldFwiXHJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZXN0dWRpYW50ZS5udW1lcm9DYXJuZXRcIlxyXG4gICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZXN0dWRpYW50ZS5yb2wgPT09ICdFU1RVRElBTlRFJ1wiXHJcbiAgICAgICAgICAgICAgIHBhdHRlcm49XCJeW0EtWmEtejAtOVxcLV17NCx9JFwiXHJcbiAgICAgICAgICAgICAgICNudW1lcm9DYXJuZXQ9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIm51bWVyb0Nhcm5ldC5pbnZhbGlkICYmIChudW1lcm9DYXJuZXQudG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibnVtZXJvQ2FybmV0LmVycm9ycz8uWydyZXF1aXJlZCddXCI+RWwgY2FybmV0IGVzIG9ibGlnYXRvcmlvIHBhcmEgZWwgcm9sIEVTVFVESUFOVEUuPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJudW1lcm9DYXJuZXQuZXJyb3JzPy5bJ3BhdHRlcm4nXVwiPlVzZSBsZXRyYXMvbsO6bWVyb3MgKG3DrW4uIDQpLiBQdWVkZSBpbmNsdWlyIGd1aW9uLjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDwhLS0gVGVsw6lmb25vIC0tPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICA8bWF0LWxhYmVsPlRlbMOpZm9ubzwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICBuYW1lPVwidGVsZWZvbm9cIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVzdHVkaWFudGUudGVsZWZvbm9cIlxyXG4gICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlswLTldezh9JFwiXHJcbiAgICAgICAgICAgICAgICN0ZWxlZm9ubz1cIm5nTW9kZWxcIj5cclxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwidGVsZWZvbm8uaW52YWxpZCAmJiAodGVsZWZvbm8udG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGVsZWZvbm8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5FbCB0ZWzDqWZvbm8gZXMgb2JsaWdhdG9yaW8uPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0ZWxlZm9uby5lcnJvcnM/LlsncGF0dGVybiddXCI+RGViZSB0ZW5lciA4IGTDrWdpdG9zLjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDwhLS0gRGlyZWNjacOzbiAtLT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5EaXJlY2Npw7NuPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0XHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJkaXJlY2Npb25cIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVzdHVkaWFudGUuZGlyZWNjaW9uXCJcclxuICAgICAgICAgICAgICAgcmVxdWlyZWQgbWlubGVuZ3RoPVwiNVwiXHJcbiAgICAgICAgICAgICAgICNkaXJlY2Npb249XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImRpcmVjY2lvbi5pbnZhbGlkICYmIChkaXJlY2Npb24udG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZGlyZWNjaW9uLmVycm9ycz8uWydyZXF1aXJlZCddXCI+TGEgZGlyZWNjacOzbiBlcyBvYmxpZ2F0b3JpYS48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImRpcmVjY2lvbi5lcnJvcnM/LlsnbWlubGVuZ3RoJ11cIj5Nw61uaW1vIDUgY2FyYWN0ZXJlcy48L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICA8IS0tIEHDsW8gLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+QcOxbzwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICBuYW1lPVwiYW5pb1wiXHJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZXN0dWRpYW50ZS5hbmlvXCJcclxuICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgcGF0dGVybj1cIl5bMC05XXsxLDR9JFwiXHJcbiAgICAgICAgICAgICAgICNhbmlvPVwibmdNb2RlbFwiPlxyXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJhbmlvLmludmFsaWQgJiYgKGFuaW8udG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiYW5pby5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPkVsIGHDsW8gZXMgb2JsaWdhdG9yaW8uPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJhbmlvLmVycm9ycz8uWydwYXR0ZXJuJ11cIj5JbmdyZXNlIHVuIG7Dum1lcm8gKDEgYSA0IGTDrWdpdG9zKS48L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICA8IS0tIFNlZGUgLS0+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+U2VkZTwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICBuYW1lPVwic2VkZVwiXHJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZXN0dWRpYW50ZS5zZWRlXCJcclxuICAgICAgICAgICAgICAgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICNzZWRlPVwibmdNb2RlbFwiPlxyXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWRlLmludmFsaWQgJiYgKHNlZGUudG91Y2hlZCB8fCBmb3JtLnN1Ym1pdHRlZClcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2VkZS5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPkxhIHNlZGUgZXMgb2JsaWdhdG9yaWEuPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJzZWRlLmVycm9ycz8uWydtaW5sZW5ndGgnXVwiPk3DrW5pbW8gMiBjYXJhY3RlcmVzLjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJucC1hY3Rpb25zXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1yLTFcIj5zYXZlPC9tYXQtaWNvbj5cclxuICAgICAgICBSZWdpc3RyYXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbjwvbWF0LWNhcmQ+XHJcblxyXG48IS0tIFxyXG4gIElOVEVHUkFDScOTTiBERUwgQ09NUE9ORU5URSBNT0RBTC1RUlxyXG4gIFNlIHJlZW1wbGF6YSBsYSBlc3RydWN0dXJhIGFudGVyaW9yIGRlbCBtb2RhbCBwb3IgZWwgY29tcG9uZW50ZSByZXV0aWxpemFibGUuXHJcbiAgLSBbdmlzaWJsZV06IENvbnRyb2xhIHNpIGVsIG1vZGFsIHNlIG11ZXN0cmEgbyBuby5cclxuICAtIFtxckltYWdlbl06IExlIHBhc2EgbGEgVVJMIGRlIGxhIGltYWdlbiBkZWwgUVIgZ2VuZXJhZGEuXHJcbiAgLSBbbm9tYnJlXSwgW2FwZWxsaWRvXSwgW2NvcnJlb106IFBhc2EgbG9zIGRhdG9zIGRlbCBlc3R1ZGlhbnRlIHBhcmEgZWwgZW52w61vIHBvciBjb3JyZW8uXHJcbiAgLSAoY2VycmFyKTogRXNjdWNoYSBlbCBldmVudG8gZGVsIG1vZGFsIHBhcmEgbGxhbWFyIGEgbGEgZnVuY2nDs24gY2VycmFyUVIoKS5cclxuLS0+XHJcbjxhcHAtbW9kYWwtcXIgXHJcbiAgW3Zpc2libGVdPVwicXJWaXNpYmxlXCIgXHJcbiAgW3FySW1hZ2VuXT1cInFyR2VuZXJhZG9cIlxyXG4gIFtub21icmVdPVwiZXN0dWRpYW50ZS5ub21icmVcIlxyXG4gIFthcGVsbGlkb109XCJlc3R1ZGlhbnRlLmFwZWxsaWRvXCJcclxuICBbY29ycmVvXT1cImVzdHVkaWFudGUuZW1haWxcIlxyXG4gIChjZXJyYXIpPVwiY2VycmFyUVIoKVwiPlxyXG48L2FwcC1tb2RhbC1xcj5cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsLXFyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1xci5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL21vZGFsLXFyLmNzcydcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxRciB7XG4gIEBJbnB1dCgpIHFySW1hZ2VuOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBub21icmU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBhcGVsbGlkbzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNvcnJlbzogc3RyaW5nID0gJyc7IC8vIOKchSBOdWV2byBpbnB1dFxuICBAT3V0cHV0KCkgY2VycmFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBkZXNjYXJnYXJRUigpIHtcbiAgICBpZiAoIXRoaXMucXJJbWFnZW4pIHJldHVybjtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IHRoaXMucXJJbWFnZW47XG4gICAgbGluay5kb3dubG9hZCA9ICdjb2RpZ29RUl9lc3R1ZGlhbnRlLnBuZyc7XG4gICAgbGluay5jbGljaygpO1xuICB9XG5cbiAgZW52aWFyUVIoKSB7XG4gICAgaWYgKCF0aGlzLnFySW1hZ2VuIHx8ICF0aGlzLmNvcnJlbykge1xuICAgICAgYWxlcnQoJ05vIHNlIHB1ZWRlIGVudmlhciBlbCBRUi4gVmVyaWZpY2EgcXVlIGVsIGNvcnJlbyBlc3TDqSBkaXNwb25pYmxlLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBjb3JyZW86IHRoaXMuY29ycmVvLFxuICAgICAgbm9tYnJlOiB0aGlzLm5vbWJyZSxcbiAgICAgIGFwZWxsaWRvOiB0aGlzLmFwZWxsaWRvLFxuICAgICAgaW1hZ2VuUVI6IHRoaXMucXJJbWFnZW5cbiAgICB9O1xuXG4gICAgdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly8xMDkuMTk5LjExOC4xMDQ6NTExMS9hcGkvRW1haWwvZW52aWFyLWNvcnJlbycsIHBheWxvYWQpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoKSA9PiBhbGVydCgnUVIgZW52aWFkbyBwb3IgY29ycmVvIGV4aXRvc2FtZW50ZS4nKSxcbiAgICAgIGVycm9yOiAoKSA9PiBhbGVydCgnRXJyb3IgYWwgZW52aWFyIGVsIFFSIHBvciBjb3JyZW8uJylcbiAgICB9KTtcbiAgfVxuXG4gIGNlcnJhck1vZGFsKCkge1xuICAgIHRoaXMuY2VycmFyLmVtaXQoKTtcbiAgfVxufSIsIlxuPGRpdiAqbmdJZj1cInZpc2libGVcIiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICA8aDM+wqFCaWVudmVuaWRvIHt7IG5vbWJyZSB9fSB7eyBhcGVsbGlkbyB9fSE8L2gzPlxuICAgIDxwPlR1IGPDs2RpZ28gUVIgZXM6PC9wPlxuICAgIDxpbWcgW3NyY109XCJxckltYWdlblwiIGFsdD1cIlFSIGRlbCBlc3R1ZGlhbnRlXCIgaWQ9XCJxckltYWdlXCIgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJib3RvbmVzXCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJkZXNjYXJnYXJRUigpXCI+RGVzY2FyZ2FyIFFSPC9idXR0b24+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJlbnZpYXJRUigpXCI+RW52aWFyIHBvciBjb3JyZW88L2J1dHRvbj4gPCEtLSDinIUgTnVldm8gYm90w7NuIC0tPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2VycmFyLmVtaXQoKVwiPkNlcnJhcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJlZ2lzdHJvRXN0dWRpYW50ZSB9IGZyb20gJy4uL0ludGVyZmFjZS9yZWdpc3Ryby1lc3R1ZGlhbnRlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cm9Fc3R1ZGlhbnRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnaHR0cDovLzEwOS4xOTkuMTE4LjEwNDo1MTExL2FwaS9Fc3R1ZGlhbnRlcyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgcmVnaXN0cmFyKGVzdHVkaWFudGU6IFJlZ2lzdHJvRXN0dWRpYW50ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwsIGVzdHVkaWFudGUpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWlhpbmdTY2FubmVyTW9kdWxlIH0gZnJvbSAnQHp4aW5nL25neC1zY2FubmVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxlY3Rvci1xcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbWlhpbmdTY2FubmVyTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGVjdG9yLXFyLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xlY3Rvci1xci5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExlY3RvclFSIHtcclxuICBwdWJsaWMgcXJSZXN1bHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHB1YmxpYyBhdmFpbGFibGVEZXZpY2VzOiBNZWRpYURldmljZUluZm9bXSA9IFtdO1xyXG4gIHB1YmxpYyBzZWxlY3RlZERldmljZTogTWVkaWFEZXZpY2VJbmZvIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIC8vIOKchSBFc3RhIGZ1bmNpw7NuIHNlIHB1ZWRlIHVzYXIgZGlyZWN0YW1lbnRlIGVuIGVsIEhUTUxcclxuICBwdWJsaWMgaXNSdW5uaW5nSW5Ccm93c2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XHJcbiAgfVxyXG5cclxuICBvbkNvZGVSZXN1bHQocmVzdWx0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucXJSZXN1bHQgPSByZXN1bHQ7XHJcblxyXG4gICAgdGhpcy5odHRwLnBvc3QoYCR7ZW52aXJvbm1lbnQuYXBpVXJsfS9tYXJjYWplYCwge1xyXG4gICAgICBjb2RpZ29RUjogcmVzdWx0LFxyXG4gICAgICB0aXBvOiAnSW5ncmVzbydcclxuICAgIH0pLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXNwdWVzdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMudG9hc3RyLnN1Y2Nlc3MocmVzcHVlc3RhLm1lbnNhamUgfHwgJ01hcmNhamUgcmVnaXN0cmFkbycpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCByZWdpc3RyYXIgbWFyY2FqZTonLCBlcnIpO1xyXG4gICAgICAgIHRoaXMudG9hc3RyLmVycm9yKCdFcnJvciBhbCByZWdpc3RyYXIgbWFyY2FqZTogJyArIChlcnI/Lm1lc3NhZ2UgPz8gJycpKTsgXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EZXZpY2VzRm91bmQoZGV2aWNlczogTWVkaWFEZXZpY2VJbmZvW10pOiB2b2lkIHtcclxuICAgIHRoaXMuYXZhaWxhYmxlRGV2aWNlcyA9IGRldmljZXM7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGV2aWNlID0gZGV2aWNlcy5maW5kKGQgPT4gZC5sYWJlbC5pbmNsdWRlcygnQzkyMCcpKSB8fCBkZXZpY2VzWzBdO1xyXG4gIH1cclxufSIsIjxoMj5Fc2NhbmVvIGRlIEPDs2RpZ28gUVI8L2gyPlxyXG5cclxuPCEtLSBTZWxlY3RvciBkZSBjw6FtYXJhIC0tPlxyXG48bGFiZWwgZm9yPVwiY2FtZXJhXCI+U2VsZWNjaW9uYSBjw6FtYXJhOjwvbGFiZWw+XHJcbjxzZWxlY3QgaWQ9XCJjYW1lcmFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRGV2aWNlXCI+XHJcbiAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZGV2aWNlIG9mIGF2YWlsYWJsZURldmljZXNcIiBbbmdWYWx1ZV09XCJkZXZpY2VcIj5cclxuICAgIHt7IGRldmljZS5sYWJlbCB9fVxyXG4gIDwvb3B0aW9uPlxyXG48L3NlbGVjdD5cclxuXHJcbjwhLS0gw4FyZWEgZGVsIGVzY8OhbmVyIFFSIC0tPlxyXG48ZGl2IGNsYXNzPVwicXItY29udGFpbmVyXCIgKm5nSWY9XCJpc1J1bm5pbmdJbkJyb3dzZXIoKVwiPlxyXG4gIDx6eGluZy1zY2FubmVyXHJcbiAgICBbZGV2aWNlXT1cInNlbGVjdGVkRGV2aWNlXCJcclxuICAgIChzY2FuU3VjY2Vzcyk9XCJvbkNvZGVSZXN1bHQoJGV2ZW50KVwiXHJcbiAgICAoY2FtZXJhc0ZvdW5kKT1cIm9uRGV2aWNlc0ZvdW5kKCRldmVudClcIj5cclxuICA8L3p4aW5nLXNjYW5uZXI+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBSZXN1bHRhZG8gZGVsIGVzY2FuZW8gLS0+XHJcbjxwICpuZ0lmPVwicXJSZXN1bHRcIj7inIUgQ8OzZGlnbyBlc2NhbmVhZG86IDxzdHJvbmc+e3sgcXJSZXN1bHQgfX08L3N0cm9uZz48L3A+XHJcbiIsImV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2UsXG4gIGFwaVVybDogJ2h0dHA6Ly8xMDkuMTk5LjExOC4xMDQ6NTExMS9hcGknXG59O1xuIiwiLy8gc3JjL2FwcC9mZWF0dXJlcy1hdXRoLWxvZ2luL2xvZ2luLnRzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgc2lnbmFsLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5cclxuLy8gQW5ndWxhciBNYXRlcmlhbCAoYWp1c3RhIHNlZ8O6biBsbyBxdWUgdXNlcylcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9ICAgICBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTGluayxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGVcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIHByaXZhdGUgZmIgPSBpbmplY3QoRm9ybUJ1aWxkZXIpO1xyXG4gIHByaXZhdGUgYXV0aCA9IGluamVjdChBdXRoU2VydmljZSk7XHJcbiAgcHJpdmF0ZSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcclxuXHJcbiAgbG9hZGluZyA9IHNpZ25hbChmYWxzZSk7XHJcbiAgaGlkZSA9IHNpZ25hbCh0cnVlKTtcclxuICBlcnJvck1zZyA9IHNpZ25hbDxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgZm9ybSA9IHRoaXMuZmIubm9uTnVsbGFibGUuZ3JvdXAoe1xyXG4gICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXV0sXHJcbiAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldXSxcclxuICB9KTtcclxuXHJcbiAgc3VibWl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lcnJvck1zZy5zZXQobnVsbCk7XHJcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQgfHwgdGhpcy5sb2FkaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmxvYWRpbmcuc2V0KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLmZvcm0uZ2V0UmF3VmFsdWUoKTsgLy8geyB1c2VybmFtZSwgcGFzc3dvcmQgfVxyXG4gICAgdGhpcy5hdXRoLmxvZ2luKHBheWxvYWQpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXNwKSA9PiB7XHJcbiAgICAgICAgLy8gZ3VhcmRhIHRva2VuL2VzdGFkbyB5IHJlZGlyaWdlIHBvciByb2xcclxuICAgICAgICB0aGlzLmF1dGguaGFuZGxlTG9naW5TdWNjZXNzKHJlc3ApO1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5zZXQoZmFsc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5zZXQoZmFsc2UpO1xyXG4gICAgICAgIC8vIG1lbnNhamVzIGNvbXVuZXNcclxuICAgICAgICBpZiAoZXJyPy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1zZy5zZXQoJ1VzdWFyaW8gbyBjb250cmFzZcOxYSBpbmNvcnJlY3Rvcy4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVycj8uc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTXNnLnNldCgnTm8gaGF5IGNvbmV4acOzbiBjb24gZWwgc2Vydmlkb3IuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNc2cuc2V0KCdPY3VycmnDsyB1biBlcnJvci4gSW50ZW50YSBudWV2YW1lbnRlLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBoZWxwZXJzIGRlIHRlbXBsYXRlXHJcbiAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHM7IH1cclxufVxyXG4iLCI8IS0tIHNyYy9hcHAvZmVhdHVyZXMtYXV0aC1sb2dpbi9sb2dpbi5odG1sIC0tPlxyXG48ZGl2IGNsYXNzPVwibG9naW4td3JhcHBlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1jYXJkXCI+XHJcbiAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPkluaWNpYXIgc2VzacOzbjwvaDI+XHJcbiAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+QWNjZWRlIGNvbiB0dSB1c3VhcmlvIHkgY29udHJhc2XDsWE8L3A+XHJcblxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+VXN1YXJpbzwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ1c2VybmFtZVwiIGF1dG9jb21wbGV0ZT1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiZi51c2VybmFtZS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPkVsIHVzdWFyaW8gZXMgcmVxdWVyaWRvPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImYudXNlcm5hbWUuaGFzRXJyb3IoJ21pbmxlbmd0aCcpXCI+TcOtbmltbyAzIGNhcmFjdGVyZXM8L21hdC1lcnJvcj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+Q29udHJhc2XDsWE8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgICBbdHlwZV09XCJoaWRlKCkgPyAncGFzc3dvcmQnIDogJ3RleHQnXCJcclxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0U3VmZml4IHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiaGlkZS5zZXQoIWhpZGUoKSlcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidtb3N0cmFyL29jdWx0YXIgY29udHJhc2XDsWEnXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+e3sgaGlkZSgpID8gJ3Zpc2liaWxpdHknIDogJ3Zpc2liaWxpdHlfb2ZmJyB9fTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImYucGFzc3dvcmQuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5MYSBjb250cmFzZcOxYSBlcyByZXF1ZXJpZGE8L21hdC1lcnJvcj5cclxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiZi5wYXNzd29yZC5oYXNFcnJvcignbWlubGVuZ3RoJylcIj5Nw61uaW1vIDQgY2FyYWN0ZXJlczwvbWF0LWVycm9yPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiZm9ybS5pbnZhbGlkIHx8IGxvYWRpbmcoKVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nKCk7IGVsc2UgbG9hZGluZ1RwbFwiPkluZ3Jlc2FyPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNsb2FkaW5nVHBsPlxyXG4gICAgICAgICAgPG1hdC1zcGlubmVyIGRpYW1ldGVyPVwiMjBcIj48L21hdC1zcGlubmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1zZygpXCI+e3sgZXJyb3JNc2coKSB9fTwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxhIHJvdXRlckxpbms9XCIvXCIgY2xhc3M9XCJiYWNrLWxpbmtcIj7ihpAgVm9sdmVyIGFsIGluaWNpbzwvYT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiIsIi8vIHNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTG9naW5SZXF1ZXN0LFxuICBMb2dpblJlc3BvbnNlLFxuICBBdXRoU3RhdGUsXG4gIEF1dGhVc2VyLFxuICBBVVRIX1RPS0VOX0tFWSxcbiAgQVVUSF9VU0VSX0tFWSxcbiAgQVVUSF9FWFBfS0VZLFxuICBST0xFX1JPVVRFXG59IGZyb20gJy4uL21vZGVscy9hdXRoJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgaHR0cCA9IGluamVjdChIdHRwQ2xpZW50KTtcbiAgcHJpdmF0ZSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgLy8gUExBVEZPUk0gLyBCcm93c2VyIGNoZWNrIHRvIGF2b2lkIGFjY2Vzc2luZyBsb2NhbFN0b3JhZ2UgZHVyaW5nIFNTUlxuICBwcml2YXRlIHBsYXRmb3JtSWQgPSBpbmplY3QoUExBVEZPUk1fSUQpO1xuICBwcml2YXRlIGlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG5cbiAgLyoqIEVuZHBvaW50IGRlbCBsb2dpbiAodXRpbGl6YSBlbnZpcm9ubWVudC5hcGlVcmwpICovXG4gIHByaXZhdGUgYmFzZVVybCA9IGAke2Vudmlyb25tZW50LmFwaVVybH0vQXV0aC9sb2dpbmA7XG5cbiAgLyoqIEVzdGFkbyByZWFjdGl2byBkZSBhdXRlbnRpY2FjacOzbiAobm8gbGVlciBsb2NhbFN0b3JhZ2UgZW4gc2Vydmlkb3IpICovXG4gIHJlYWRvbmx5IGF1dGhTdGF0ZSA9IHNpZ25hbDxBdXRoU3RhdGU+KHtcbiAgICB0b2tlbjogdGhpcy5pc0Jyb3dzZXIgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRIX1RPS0VOX0tFWSkgOiBudWxsLFxuICAgIHVzZXI6IHRoaXMuaXNCcm93c2VyID8gdGhpcy5sb2FkVXNlcigpIDogbnVsbCxcbiAgICBleHBpcmVzQXQ6IHRoaXMuaXNCcm93c2VyID8gKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRIX0VYUF9LRVkpKSB8fCBudWxsKSA6IG51bGwsXG4gICAgaXNBdXRoZW50aWNhdGVkOiB0aGlzLmlzQnJvd3NlciA/ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oQVVUSF9UT0tFTl9LRVkpIDogZmFsc2UsXG4gIH0pO1xuXG4gIC8qKiA9PT0gTE9HSU4gPT09ICovXG4gIGxvZ2luKHBheWxvYWQ6IExvZ2luUmVxdWVzdCkge1xuICAgIC8vIEVsIGJhY2tlbmQgZXNwZXJhIHsgdXN1YXJpbywgY29udHJhc2VuYSB9XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIHVzdWFyaW86IHBheWxvYWQudXNlcm5hbWUsXG4gICAgICBjb250cmFzZW5hOiBwYXlsb2FkLnBhc3N3b3JkLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8TG9naW5SZXNwb25zZT4odGhpcy5iYXNlVXJsLCBib2R5LCB7XG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiA9PT0gR1VBUkRBUiBEQVRPUyBUUkFTIExPR0lOIEVYSVRPU08gPT09ICovXG4gIGhhbmRsZUxvZ2luU3VjY2VzcyhyZXNwOiBMb2dpblJlc3BvbnNlKSB7XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gRGF0ZS5ub3coKSArIHJlc3AuZXhwaXJlc0luICogMTAwMDtcblxuICAgIGNvbnN0IHVzZXI6IEF1dGhVc2VyID0ge1xuICAgICAgaWQ6IHRoaXMuZGVjb2RlVG9rZW5TdWIocmVzcC5hY2Nlc3NUb2tlbiksXG4gICAgICB1c2VybmFtZTogcmVzcC51c3VhcmlvLFxuICAgICAgcm9sZTogcmVzcC5yb2wsXG4gICAgfTtcblxuICAgIC8vIEd1YXJkYXIgZW4gc3RvcmFnZSAoc29sbyBlbiBicm93c2VyKVxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9UT0tFTl9LRVksIHJlc3AuYWNjZXNzVG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9VU0VSX0tFWSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9FWFBfS0VZLCBTdHJpbmcoZXhwaXJlc0F0KSk7XG4gICAgfVxuXG4gICAgLy8gQWN0dWFsaXphciBzaWduYWxcbiAgICB0aGlzLmF1dGhTdGF0ZS5zZXQoe1xuICAgICAgdG9rZW46IHJlc3AuYWNjZXNzVG9rZW4sXG4gICAgICB1c2VyLFxuICAgICAgZXhwaXJlc0F0LFxuICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gUmVkaXJpZ2lyIHNlZ8O6biByb2xcbiAgICBjb25zdCByZWRpcmVjdCA9IFJPTEVfUk9VVEVbcmVzcC5yb2xdIHx8ICcvJztcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgfVxuXG4gIC8qKiA9PT0gQ0FSR0FSIFVTVUFSSU8gREVTREUgU1RPUkFHRSA9PT0gKi9cbiAgcHJpdmF0ZSBsb2FkVXNlcigpOiBBdXRoVXNlciB8IG51bGwge1xuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRIX1VTRVJfS0VZKTtcbiAgICByZXR1cm4gZGF0YSA/IChKU09OLnBhcnNlKGRhdGEpIGFzIEF1dGhVc2VyKSA6IG51bGw7XG4gIH1cblxuICAvKiogPT09IERFQ09ESUZJQ0FSIFNVQiBERUwgVE9LRU4gPT09ICovXG4gIHByaXZhdGUgZGVjb2RlVG9rZW5TdWIodG9rZW46IHN0cmluZyk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xuICAgICAgcmV0dXJuIHBheWxvYWQuc3ViID8/ICcnO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKiA9PT0gREVDT0RJRklDQVIgRVhQIChzZWd1bmRvcyBVTklYKSBERUwgVE9LRU4gPT09ICovXG4gIHByaXZhdGUgZGVjb2RlVG9rZW5FeHAodG9rZW46IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKTtcbiAgICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZC5leHAgPT09ICdudW1iZXInID8gcGF5bG9hZC5leHAgOiBudWxsOyAvLyBleHAgZW4gc2VndW5kb3NcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiA9PT0gVkFMSURBUiAvIFNJTkNST05JWkFSIFNFU0nDk04gQUwgQVJSQU5DQVIgTEEgQVBQID09PSAqL1xuICBlbnN1cmVTZXNzaW9uT25Cb290KCk6IHZvaWQge1xuICAgIC8vIE5vIGVqZWN1dGFyIGR1cmFudGUgcHJlcmVuZGVyL1NTUlxuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHJldHVybjtcblxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQVVUSF9UT0tFTl9LRVkpO1xuICAgIGxldCBleHBpcmVzQXQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oQVVUSF9FWFBfS0VZKSkgfHwgbnVsbDtcblxuICAgIC8vIFNpIGhheSB0b2tlbiBwZXJvIG5vIGhheSBleHBpcmVzQXQgKG8gZnVlIGJvcnJhZG8pLCBsbyBjYWxjdWxhbW9zIGRlc2RlIGVsIEpXVC5cbiAgICBpZiAodG9rZW4gJiYgIWV4cGlyZXNBdCkge1xuICAgICAgY29uc3QgZXhwU2VjID0gdGhpcy5kZWNvZGVUb2tlbkV4cCh0b2tlbik7XG4gICAgICBpZiAoZXhwU2VjKSB7XG4gICAgICAgIGV4cGlyZXNBdCA9IGV4cFNlYyAqIDEwMDA7IC8vIGEgbXNcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUSF9FWFBfS0VZLCBTdHJpbmcoZXhwaXJlc0F0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2kgbm8gaGF5IHRva2VuIG8geWEgZXhwaXLDsywgcHVyZ2FyIHNlc2nDs25cbiAgICBpZiAoIXRva2VuIHx8IChleHBpcmVzQXQgIT09IG51bGwgJiYgRGF0ZS5ub3coKSA+PSBleHBpcmVzQXQpKSB7XG4gICAgICB0aGlzLmxvZ291dChmYWxzZSk7IC8vIG5vIG5hdmVnYXIgc2kgeWEgZXN0w6FzIGVuIC9sb2dpblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2NhciBzaWduYWwgc2kgdmVuaW1vcyBkZSB1biByZWZyZXNoXG4gICAgaWYgKHRva2VuICYmIGV4cGlyZXNBdCAmJiAhdGhpcy5hdXRoU3RhdGUoKS50b2tlbikge1xuICAgICAgdGhpcy5hdXRoU3RhdGUuc2V0KHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHVzZXI6IHRoaXMubG9hZFVzZXIoKSxcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogPT09IE9CVEVORVIgVE9LRU4gQUNUVUFMID09PSAqL1xuICBnZXQgdG9rZW4oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFN0YXRlKCkudG9rZW47XG4gIH1cblxuICAvKiogPT09IFNBQkVSIFNJIEVMIFVTVUFSSU8gRVNUw4EgTE9HVUVBRE8gKHZlcmlmaWNhIGV4cGlyYWNpw7NuKSA9PT0gKi9cbiAgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuYXV0aFN0YXRlKCk7XG4gICAgaWYgKCFzdGF0ZS50b2tlbiB8fCAhc3RhdGUuZXhwaXJlc0F0KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIERhdGUubm93KCkgPCBzdGF0ZS5leHBpcmVzQXQ7XG4gIH1cblxuICAvKiogPT09IE9CVEVORVIgUk9MIERFTCBVU1VBUklPID09PSAqL1xuICBnZXRSb2xlKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmF1dGhTdGF0ZSgpLnVzZXI/LnJvbGUgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKiA9PT0gQ0VSUkFSIFNFU0nDk04gPT09ICovXG4gIGxvZ291dChuYXZpZ2F0ZVRvTG9naW46IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBVVRIX1RPS0VOX0tFWSk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBVVRIX1VTRVJfS0VZKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFVVEhfRVhQX0tFWSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdXRoU3RhdGUuc2V0KHtcbiAgICAgIHRva2VuOiBudWxsLFxuICAgICAgdXNlcjogbnVsbCxcbiAgICAgIGV4cGlyZXNBdDogbnVsbCxcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAobmF2aWdhdGVUb0xvZ2luKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIHNyYy9hcHAvbW9kZWxzL2F1dGgudHNcblxuLyoqIFJvbGVzIHbDoWxpZG9zIHRhbCBjb21vIGxvcyBkZXZ1ZWx2ZSB0dSBBUEkgKi9cbmV4cG9ydCB0eXBlIFJvbGUgPSAnRVNUVURJQU5URScgfCAnRE9DRU5URScgfCAnQURNSU4nO1xuXG4vKiogUmVxdWVzdCBkZSBsb2dpbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3Qge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG4vKiogUmVzcG9uc2UgZGUgbG9naW4gKHRhbCBjdWFsIHR1IEFQSSkgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXNwb25zZSB7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7ICAgLy8gSldUXG4gIGV4cGlyZXNJbjogbnVtYmVyOyAgICAgLy8gc2VndW5kb3MgKHAuZWouIDM2MDApXG4gIHVzdWFyaW86IHN0cmluZzsgICAgICAgLy8gdXNlcm5hbWUsIGVqOiBcInBhdWwub3JvemNvXCJcbiAgcm9sOiBSb2xlOyAgICAgICAgICAgICAvLyByb2wgZW4gTUFZw5pTQ1VMQVNcbn1cblxuLyoqIFVzdWFyaW8gYXV0ZW50aWNhZG8gcXVlIHVzYXLDoSBlbCBmcm9udCAqL1xuZXhwb3J0IGludGVyZmFjZSBBdXRoVXNlciB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXI7ICAgLy8gZGVzZGUgZWwgY2xhaW0gXCJzdWJcIiBkZWwgSldUXG4gIHVzZXJuYW1lOiBzdHJpbmc7ICAgICAgLy8gPSB1c3VhcmlvXG4gIHJvbGU6IFJvbGU7ICAgICAgICAgICAgLy8gPSByb2xcbn1cblxuLyoqIEVzdGFkbyBkZSBhdXRlbnRpY2FjacOzbiBxdWUgZ3VhcmRhcmVtb3MgZW4gZWwgY2xpZW50ZSAqL1xuZXhwb3J0IGludGVyZmFjZSBBdXRoU3RhdGUge1xuICB0b2tlbjogc3RyaW5nIHwgbnVsbDsgICAgICAgICAgLy8gPSBhY2Nlc3NUb2tlblxuICB1c2VyOiBBdXRoVXNlciB8IG51bGw7XG4gIGV4cGlyZXNBdDogbnVtYmVyIHwgbnVsbDsgICAgICAvLyB0aW1lc3RhbXAgZW4gbXMgPT4gRGF0ZS5ub3coKSArIGV4cGlyZXNJbioxMDAwXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjsgICAgICAvLyBkZXJpdmFkbyBkZSB0b2tlbiAmJiAhZXhwaXJhZG9cbn1cblxuLyoqIENsYXZlcyBwYXJhIHN0b3JhZ2UgKi9cbmV4cG9ydCBjb25zdCBBVVRIX1RPS0VOX0tFWSAgPSAnYXV0aC50b2tlbic7XG5leHBvcnQgY29uc3QgQVVUSF9VU0VSX0tFWSAgID0gJ2F1dGgudXNlcic7XG5leHBvcnQgY29uc3QgQVVUSF9FWFBfS0VZICAgID0gJ2F1dGguZXhwaXJlc0F0JztcblxuLyoqIFJ1dGFzIGRlc3Rpbm8gc2Vnw7puIHJvbCAoYWrDunN0YWxhcyBhIHR1IGFwcCByZWFsKSAqL1xuZXhwb3J0IGNvbnN0IFJPTEVfUk9VVEU6IFJlY29yZDxSb2xlLCBzdHJpbmc+ID0ge1xuICBFU1RVRElBTlRFOiAnLi4vLi4vVmlzdGEvaGlzdG9yaWFsJyxcbiAgRE9DRU5URTogJy4uLy4uL1Zpc3RhL2hpc3RvcmlhbCcsXG4gIEFETUlOOiAnLi4vLi4vVmlzdGEvcmVnaXN0cm8nLFxufTtcbiIsIi8vIHNyYy9hcHAvYXV0aC9hdXRoLmd1YXJkLnRzXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZUZuLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJPTEVfUk9VVEUgfSBmcm9tICcuLi9jb3JlL21vZGVscy9hdXRoJztcblxuLyoqXG4gKiBVc2EgZW4gcnV0YXMgY29uOiBjYW5BY3RpdmF0ZTogW2F1dGhHdWFyZF0sIGRhdGE6IHsgcm9sZXM6IFsnQURNSU4nLCAnRE9DRU5URScsICdFU1RVRElBTlRFJ10gfVxuICovXG5leHBvcnQgY29uc3QgYXV0aEd1YXJkOiBDYW5BY3RpdmF0ZUZuID0gKHJvdXRlLCBzdGF0ZSkgPT4ge1xuICBjb25zdCBhdXRoID0gaW5qZWN0KEF1dGhTZXJ2aWNlKTtcbiAgY29uc3Qgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG5cbiAgLy8gMSkgwr9IYXkgc2VzacOzbiB2w6FsaWRhP1xuICBpZiAoIWF1dGguaXNMb2dnZWRJbigpKSB7XG4gICAgcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHsgcXVlcnlQYXJhbXM6IHsgcmV0dXJuVXJsOiBzdGF0ZS51cmwgfSB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyAyKSDCv0xhIHJ1dGEgZXhpZ2Ugcm9sZXM/XG4gIGNvbnN0IHJvbGVzID0gcm91dGUuZGF0YT8uWydyb2xlcyddIGFzIHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICBpZiAocm9sZXMgJiYgcm9sZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHVzZXJSb2xlID0gYXV0aC5nZXRSb2xlKCk7XG4gICAgaWYgKCF1c2VyUm9sZSB8fCAhcm9sZXMuaW5jbHVkZXModXNlclJvbGUpKSB7XG4gICAgICAvLyBTaW4gcGVybWlzbyDihpIgcmVkaXJpZ2lyIGEgbGEgaG9tZSBkZWwgcm9sIGFjdHVhbFxuICAgICAgY29uc3QgZmFsbGJhY2sgPSB1c2VyUm9sZSA/IFJPTEVfUk9VVEVbdXNlclJvbGUgYXMga2V5b2YgdHlwZW9mIFJPTEVfUk9VVEVdIDogJy8nO1xuICAgICAgcm91dGVyLm5hdmlnYXRlKFtmYWxsYmFja10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIHNyYy9hcHAvYXBwLnJvdXRlcy50c1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gUMOhZ2luYXMgZXhpc3RlbnRlcyAoc3RhbmRhbG9uZSlcclxuaW1wb3J0IHsgSW5pY2lvIH0gZnJvbSAnLi9WaXN0YS9pbmljaW8vaW5pY2lvJztcclxuaW1wb3J0IHsgUmVnaXN0cm8gfSBmcm9tICcuL1Zpc3RhL3JlZ2lzdHJvL3JlZ2lzdHJvJztcclxuaW1wb3J0IHsgSGlzdG9yaWFsIH0gZnJvbSAnLi9WaXN0YS9oaXN0b3JpYWwvaGlzdG9yaWFsJztcclxuaW1wb3J0IHsgTGVjdG9yUVIgfSBmcm9tICcuL1Zpc3RhL2xlY3Rvci1xci9sZWN0b3ItcXInO1xyXG5cclxuLy8gTG9naW4gKHN0YW5kYWxvbmUpXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi4vYXBwL2ZlYXR1cmVzL2F1dGgvbG9naW4vbG9naW4nO1xyXG5cclxuLy8gR3VhcmQgZGUgYXV0ZW50aWNhY2nDs24vcm9sXHJcbmltcG9ydCB7IGF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC9hdXRoLmd1YXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAvLyBBcnJhbnF1ZSBlbiBJbmljaW8gKHDDumJsaWNvKVxyXG4gIHsgcGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCByZWRpcmVjdFRvOiAnaW5pY2lvJyB9LFxyXG5cclxuICAvLyBQw7pibGljb1xyXG4gIHsgcGF0aDogJ2luaWNpbycsIGNvbXBvbmVudDogSW5pY2lvIH0sXHJcbiAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAge3BhdGg6ICdyZWdpc3RybycsIGNvbXBvbmVudDogUmVnaXN0cm99LC8vcnV0YSBwYXJhIHJlZ2lzdHJvIGRlIHVzdWFyaW9zIHDDumJsaWNhIHBhcmEgcHJ1ZWJhc1xyXG5cclxuXHJcbiAgLy8gUHJvdGVnaWRhcyBwb3Igcm9sIChhanVzdGEgc2kgbG8gZGVzZWFzKVxyXG4gIHtcclxuICAgIHBhdGg6ICdsZWN0b3InLFxyXG4gICAgY29tcG9uZW50OiBMZWN0b3JRUixcclxuICAgIGNhbkFjdGl2YXRlOiBbYXV0aEd1YXJkXSxcclxuICAgIGRhdGE6IHsgcm9sZXM6IFsnQURNSU4nLCAnRE9DRU5URSddIH1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdyZWdpc3RybycsXHJcbiAgICBjb21wb25lbnQ6IFJlZ2lzdHJvLFxyXG4gICAgY2FuQWN0aXZhdGU6IFthdXRoR3VhcmRdLFxyXG4gICAgZGF0YTogeyByb2xlczogWydBRE1JTicsICdET0NFTlRFJywnRVNUVURJQU5URSddIH1cclxuICB9LFxyXG5cclxuICAvLyA0MDQg4oaSIGluaWNpb1xyXG4gIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2luaWNpbycgfVxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vLyBDb21wb25lbnRlcyB1c2Fkb3MgZW4gZWwgdGVtcGxhdGUgKEFqdXN0YSBsYXMgcnV0YXMgc2kgZXMgbmVjZXNhcmlvKVxyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vYXBwL1Zpc3RhL21lbnUvbWVudSc7IFxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9hcHAvVmlzdGEvZm9vdGVyL2Zvb3Rlcic7IFxyXG5cclxuLy8gTcOzZHVsb3MgZGUgTWF0ZXJpYWxcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAvLyBJTVBPUlRBTlRFOiBBc2Vnw7pyYXRlIGRlIHF1ZSB0b2RvcyBsb3MgY29tcG9uZW50ZXMgdXNhZG9zIGVuIGFwcC5odG1sIGVzdMOpbiBhcXXDrS5cclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNZW51LCBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsIFJvdXRlck91dGxldCwgRm9vdGVyXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jc3MnXSxcclxuICAvLyBVc2Ftb3MgT25QdXNoIHBhcmEgbWVqb3IgcmVuZGltaWVudG8sIHBlcm8gcmVxdWllcmUgQ2hhbmdlRGV0ZWN0b3JSZWYgcGFyYSBlbCBzcGxhc2guXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2ggXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIEVzdGFkbyBwYXJhIGNvbnRyb2xhciBsYSB2aXNpYmlsaWRhZCBkZWwgc3BsYXNoIHNjcmVlblxyXG4gIHNob3dTcGxhc2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIC8vIFVSTCBkZWwgbG9nbyBkZSBsYSB1bml2ZXJzaWRhZFxyXG4gIGxvZ29Vcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS84YTJjZGNfZmIwODhmZjRhZGQ5NDcxMTg1NGI1Njk1NTM4ODk2ODl+bXYyLnBuZy92MS9maWxsL3dfMTY0LGhfNTgsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXZpZixxdWFsaXR5X2F1dG8vbG9nbyUyMGJsYW5jbyUyMGNvbiUyMGwlQzMlQURuZWElMjBuYXJhbmphLnBuZ1wiO1xyXG5cclxuICAvLyBJbnllY3RhbW9zIENoYW5nZURldGVjdG9yUmVmIHBhcmEgZm9yemFyIGxhIGFjdHVhbGl6YWNpw7NuIGRlbCBET01cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9IFxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFNpbXVsYSB1bmEgY2FyZ2EgZGUgMyBzZWd1bmRvc1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd1NwbGFzaCA9IGZhbHNlO1xyXG4gICAgICAvLyBGb3J6YW1vcyBsYSBkZXRlY2Npw7NuIGRlIGNhbWJpb3MgcGFyYSBhc2VndXJhciBxdWUgZWwgRE9NIHNlIGFjdHVhbGljZVxyXG4gICAgICAvLyB5IHNlIG11ZXN0cmUgZWwgY29udGVuaWRvIGRlbCBibG9xdWUgQGVsc2UuXHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTsgXHJcbiAgICB9LCAzMDAwKTsgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHBhcmEgbW9zdHJhciBlbCBzcGxhc2ggdGVtcG9yYWxtZW50ZSwgw7p0aWwgcGFyYSB0cmFuc2ljaW9uZXNcclxuICAgKiBjb21vIGRlc3B1w6lzIGRlIHVuIGxvZ2luIG8gYWwgY2FyZ2FyIHVuYSBydXRhIHBlc2FkYS5cclxuICAgKiBAcGFyYW0gZHVyYXRpb24gRHVyYWNpw7NuIGVuIG1pbGlzZWd1bmRvcyBkZWwgc3BsYXNoLlxyXG4gICAqL1xyXG4gIHRyaWdnZXJTcGxhc2goZHVyYXRpb246IG51bWJlciA9IDE1MDApOiB2b2lkIHtcclxuICAgIC8vIDEuIE1vc3RyYXIgZWwgc3BsYXNoXHJcbiAgICB0aGlzLnNob3dTcGxhc2ggPSB0cnVlOyBcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTsgXHJcbiAgICBcclxuICAgIC8vIDIuIE9jdWx0YXIgZWwgc3BsYXNoIGRlc3B1w6lzIGRlIGxhIGR1cmFjacOzblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd1NwbGFzaCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7IFxyXG4gICAgfSwgZHVyYXRpb24pO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIE11ZXN0cmEgZWwgU3BsYXNoIFNjcmVlbiBtaWVudHJhcyBzaG93U3BsYXNoIGVzIHRydWUgLS0+XHJcbjxkaXYgKm5nSWY9XCJzaG93U3BsYXNoOyBlbHNlIG1haW5Db250ZW50XCI+XHJcbiAgPCEtLSBTUExBU0ggU0NSRUVOIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJzcGxhc2gtc2NyZWVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3BsYXNoLWNvbnRlbnRcIj5cclxuICAgICAgPCEtLSBFbCBbc3JjXSB1c2EgbGEgdmFyaWFibGUgbG9nb1VybCBkZWZpbmlkYSBlbiBhcHAudHMgLS0+XHJcbiAgICAgIDxpbWcgW3NyY109XCJsb2dvVXJsXCIgYWx0PVwiTG9nbyBkZSBsYSBVbml2ZXJzaWRhZFwiIGNsYXNzPVwic3BsYXNoLWxvZ29cIj5cclxuICAgICAgPGgxPlVuaXZlcnNpZGFkIFJlZ2lvbmFsIGRlIEd1YXRlbWFsYTwvaDE+XHJcbiAgICAgIDxoMT5TZWRlIFNhbiBSYXltdW5kbzwvaDE+XHJcbiAgICAgIDwhLS0gVXRpbGl6YW1vcyBlbCBzcGlubmVyIGRlIE1hdGVyaWFsIHBhcmEgaW5kaWNhciBjYXJnYSAtLT5cclxuICAgICAgPG1hdC1zcGlubmVyIGNvbG9yPVwid2FyblwiIGRpYW1ldGVyPVwiNTBcIj48L21hdC1zcGlubmVyPlxyXG4gICAgICA8cD5DYXJnYW5kbyBhcGxpY2FjacOzbi4uLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gTWFpbiBjb250ZW50IHF1ZSBzZSBtdWVzdHJhIGN1YW5kbyBzaG93U3BsYXNoIGVzIGZhbHNlIC0tPlxyXG48bmctdGVtcGxhdGUgI21haW5Db250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgIDwhLS0gMS4gTWVudSAtLT5cclxuICAgIDxhcHAtbWVudT48L2FwcC1tZW51PlxyXG4gICAgPCEtLSAyLiBDb250ZW5lZG9yIHByaW5jaXBhbCBkZSBsYXMgcnV0YXMgLS0+XHJcbiAgICA8bWFpbiBjbGFzcz1cInJvdXRlci12aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L21haW4+XHJcbiAgICA8IS0tIDMuIEZvb3RlciAtLT5cclxuICAgIDxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlckxpbmtBY3RpdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbi8vIEVsaW1pbmFtb3MgaW1wb3J0YWNpb25lcyBkZSBGb250QXdlc29tZU1vZHVsZSwgRmFJY29uTGlicmFyeSB5IGxvcyBpY29ub3NcclxuLy8geWEgcXVlIGVsIGPDs2RpZ28gSFRNTCB5YSBubyBsb3MgdXNhLlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbWVudScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAvLyByb3V0ZXJMaW5rQWN0aXZlIHNlIGHDsWFkZSBwYXJhIHByZXZlbmlyIHBvc2libGVzIGFkdmVydGVuY2lhc1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rQWN0aXZlLCBNYXRJY29uTW9kdWxlXSwgXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudSB7XHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gRWxpbWluYW1vcyBsYSBpbnllY2Npw7NuIHkgZWwgY8OzZGlnbyBkZSBGb250QXdlc29tZVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCk6IHZvaWQgeyB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjsgfVxyXG4gIGNsb3NlKCk6IHZvaWQgeyB0aGlzLmlzT3BlbiA9IGZhbHNlOyB9XHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgbWFuZWphciBlbCBjbGljIGVuIGVsIGJvdMOzbiBkZSBMb2dpblxyXG4gIGhhbmRsZUxvZ2luKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0JvdMOzbiBkZSBMb2dpbiBwcmVzaW9uYWRvLiBOYXZlZ2FuZG8gYSAvbG9naW4uLi4nKTtcclxuICAgIC8vIEFxdcOtIGlyw61hIGxhIGzDs2dpY2EgcGFyYSBuYXZlZ2FyIGEgbGEgcMOhZ2luYSBkZSBsb2dpbiAodXNhbmRvIFJvdXRlcilcclxuICB9XHJcbn1cclxuIiwiPGhlYWRlciBjbGFzcz1cIm1lbnUtd3JhcFwiIHJvbGU9XCJiYW5uZXJcIj5cclxuICA8bmF2IGNsYXNzPVwibWVudS1ncmlkXCIgYXJpYS1sYWJlbD1cIk5hdmVnYWNpb24gcHJpbmNpcGFsXCI+XHJcblxyXG4gICAgPCEtLSBJWlFVSUVSREE6IGxpbmtzIChkZXNrdG9wKSAtLT5cclxuICAgIDx1bCBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvaW5pY2lvXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCI+PG1hdC1pY29uPmhvbWU8L21hdC1pY29uPiBJbmljaW88L2E+PC9saT5cclxuICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvcmVnaXN0cm9cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlLWxpbmtcIj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+IFJlZ2lzdHJvPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2hpc3RvcmlhbFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiPjxtYXQtaWNvbj5oaXN0b3J5PC9tYXQtaWNvbj4gSGlzdG9yaWFsPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2xlY3RvclwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiPjxtYXQtaWNvbj5xcl9jb2RlX3NjYW5uZXI8L21hdC1pY29uPkVzY2FuZWFyIFFSPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG5cclxuICAgIDwhLS0gSEFNQlVSR1VFU0EgKHNvbG8gbW92aWwpIC0tPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzcz1cImhhbWJ1cmdlclwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiQWJyaXIgbWVudVwiXHJcbiAgICAgIGFyaWEtY29udHJvbHM9XCJtb2JpbGUtbWVudVwiXHJcbiAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiaXNPcGVuXCJcclxuICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDwhLS0gQ0VOVFJPOiBsb2dvIC0tPlxyXG4gICAgPGEgY2xhc3M9XCJsb2dvXCIgcm91dGVyTGluaz1cIi9cIiBhcmlhLWxhYmVsPVwiSXIgYWwgaW5pY2lvXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS84YTJjZGNfZmIwODhmZjRhZGQ5NDcxMTg1NGI1Njk1NTM4ODk2ODl+bXYyLnBuZy92MS9maWxsL3dfMTY0LGhfNTgsYWxfYyxxXzg1LHVzbV8wLjY2XzEuMDBfMC4wMSxlbmNfYXZpZixxdWFsaXR5X2F1dG8vbG9nbyUyMGJsYW5jbyUyMGNvbiUyMGwlQzMlQURuZWElMjBuYXJhbmphLnBuZ1wiIGFsdD1cIlVuaXZlcnNpZGFkIFJlZ2lvbmFsIGRlIEd1YXRlbWFsYVwiLz5cclxuICAgIDwvYT5cclxuXHJcbiAgICA8IS0tIERFUkVDSEE6IEJvdMOzbiBkZSBMb2dpbiAoUmVlbXBsYXphIFJlZGVzIFNvY2lhbGVzKSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWFjdGlvbnNcIj5cclxuICAgICAgPCEtLSBFbCBib3TDs24gbGxhbWEgYSBsYSBmdW5jacOzbiBoYW5kbGVMb2dpbigpIGRlZmluaWRhIGVuIG1lbnUudHMgLS0+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJsb2dpbi1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImhhbmRsZUxvZ2luKClcIj5cclxuICAgICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgICAgIEJpZW52ZW5pZG9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9uYXY+XHJcblxyXG4gIDwhLS0gRFJBV0VSIE1PVklMIC0tPlxyXG4gIDxkaXZcclxuICAgIGlkPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgY2xhc3M9XCJkcmF3ZXJcIlxyXG4gICAgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCJcclxuICAgIChjbGljayk9XCJjbG9zZSgpXCJcclxuICAgIGFyaWEtaGlkZGVuPVwie3shaXNPcGVufVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNlcnJhciBtZW51XCIgKGNsaWNrKT1cImNsb3NlKClcIj5cclxuICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHVsIGNsYXNzPVwiZHJhd2VyLWl0ZW1zXCI+XHJcbiAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvaW5pY2lvXCIgKGNsaWNrKT1cImNsb3NlKClcIj48bWF0LWljb24+aG9tZTwvbWF0LWljb24+IEluaWNpbzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL3JlZ2lzdHJvXCIgKGNsaWNrKT1cImNsb3NlKClcIj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+IFJlZ2lzdHJvPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCIvaGlzdG9yaWFsXCIgKGNsaWNrKT1cImNsb3NlKClcIj48bWF0LWljb24+aGlzdG9yeTwvbWF0LWljb24+IEhpc3RvcmlhbDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwiL2xlY3RvclwiIChjbGljayk9XCJjbG9zZSgpXCI+PG1hdC1pY29uPnFyX2NvZGVfc2Nhbm5lcjwvbWF0LWljb24+IEVzY2FuZWFyIFFSPC9hPjwvbGk+XHJcbiAgICAgICAgPCEtLSBCb3TDs24gZGUgTG9naW4gZW4gZWwgbWVuw7ogbcOzdmlsIHRhbWJpw6luIC0tPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDwhLS0gVXNhIGxhIG1pc21hIGZ1bmNpw7NuLCBjZXJyYW5kbyBlbCBtZW7DuiBkZXNwdcOpcyBkZSBoYWNlciBjbGljIC0tPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWJ1dHRvbi1tb2JpbGVcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImhhbmRsZUxvZ2luKCk7IGNsb3NlKClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9oZWFkZXI+XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Zvb3Rlci5jc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXIge31cclxuXHJcbiIsIjxmb290ZXIgY2xhc3M9XCJmb290ZXItY29udGFpbmVyXCI+XHJcbiAgICA8IS0tIENvbnRlbmVkb3IgZmxleGlibGUgcXVlIGFsaW5lYSBlbCBjb3B5cmlnaHQgYSBsYSBpenF1aWVyZGEgeSBsbyBzb2NpYWwgYSBsYSBkZXJlY2hhLiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY29udGVudFwiPlxyXG4gICAgICAgIDwhLS0gQ29weXJpZ2h0IC0tPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWNvcHlyaWdodFwiPiZjb3B5OyAyMDI1IFByb3llY3RvUVJ2MSAtIFRvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zPC9wPlxyXG5cclxuICAgICAgICA8IS0tIEJsb3F1ZSBzb2NpYWwgKEFsaW5lYWRvIGEgbGEgaXpxdWllcmRhIGRlbnRybyBkZSBlc3RlIGRpdikgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1zb2NpYWxcIiBhcmlhLWxhYmVsPVwiU8OtZ3Vlbm9zIGVuIHJlZGVzXCI+XHJcbiAgICAgICAgICAgIDwhLS0gVGV4dG8gc2luIG5lZ3JpdGEsIGNvcnJlZ2lkbyBcIm51ZXN0cmFzXCIgLS0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic29jaWFsLXRleHRcIj5Tw61ndWVub3MgZW4gbnVlc3RyYXMgcmVkZXMgc29jaWFsZXM6PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBGYWNlYm9vayAtLT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJzb2NpYWwtbGluayBmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGVvcGxlL1VuaXZlcnNpZGFkLVJlZ2lvbmFsLVNhbi1SYXltdW5kby82MTU3Njk1NDMzNTA3Ni8/bWliZXh0aWQ9WmJXS3dMXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBhcmlhLWxhYmVsPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMiAxMmExMCAxMCAwIDEgMC0xMS42IDkuOXYtN2gtMi40VjEyaDIuNFY5LjhjMC0yLjQgMS40LTMuOCAzLjYtMy44IDEgMCAyIC4xOCAyIC4xOHYyLjJoLTEuMWMtMS4xIDAtMS41LjY4LTEuNSAxLjRWMTJoMi42bC0uNCAyLjloLTIuMnY3QTEwIDEwIDAgMCAwIDIyIDEyelwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBJbnN0YWdyYW0gLS0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwic29jaWFsLWxpbmsgaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdXJlZ2lvbmFscjIvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBhcmlhLWxhYmVsPVwiSW5zdGFncmFtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNyAyQzQuMjQgMiAyIDQuMjQgMiA3djEwYzAgMi43NiAyLjI0IDUgNSA1aDEwYzIuNzYgMCA1LTIuMjQgNS01VjdjMC0yLjc2LTIuMjQtNS01LTVIN3ptMTAgMmEzIDMgMCAwIDEgMyAzdjEwYTMgMyAwIDAgMS0zIDNIN2EzIDMgMCAwIDEtMy0zVjdhMyAzIDAgMCAxIDMtM2gxMHptLTUgMy41YTUuNSA1LjUgMCAxIDAgMCAxMSA1LjUgNS41IDAgMCAwIDAtMTF6bTAgMmEzLjUgMy41IDAgMSAxIDAgNyAzLjUgMy41IDAgMCAxIDAtN3ptNS43NS0uNzVhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBMaW5rZWRJbiAtLT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJzb2NpYWwtbGluayBsaW5rZWRpblwiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdW5pdmVyc2lkYWQtcmVnaW9uYWwtZGUtZ3VhdGVtYWxhLXJlZ2klQzMlQjNuLTItYWE2YjA1MmEwL1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGFyaWEtbGFiZWw9XCJMaW5rZWRJblwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQuOTggMy41QTIuNSAyLjUgMCAxIDEgNSA4LjVhMi41IDIuNSAwIDAgMS0uMDItNXpNMyA5aDR2MTJIM3ptNyAwaDMuOHYxLjdoLjA1Yy41My0uOTUgMS44Mi0xLjk1IDMuNzUtMS45NSA0LjAxIDAgNC43NSAyLjY0IDQuNzUgNi4wOFYyMUgxOHYtNS4yYzAtMS4yNC0uMDItMi44NC0xLjczLTIuODQtMS43MyAwLTIgMS4zNS0yIDIuNzVWMjFoLTR6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgICAgICAgPCEtLSBZb3VUdWJlIC0tPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInNvY2lhbC1saW5rIHlvdXR1YmVcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ19UMXpqd1hmYmdERjF5LWR3bUlYM3dcIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIiBhcmlhLWxhYmVsPVwiWW91VHViZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIzLjUgNi4yYTMgMyAwIDAgMC0yLjEtMi4xQzE5LjUgMy41IDEyIDMuNSAxMiAzLjVzLTcuNSAwLTkuNC42QTMgMyAwIDAgMCAuNSA2LjIgMzEuNCAzMS40IDAgMCAwIDAgMTJhMzEuNCAzMS40IDAgMCAwIC41IDUuOCAzIDMgMCAwIDAgMi4xIDIuMWMxLjkuNiA5LjQuNiA5LjQuNnM3LjUgMCA5LjQtLjZhMyAzIDAgMCAwIDIuMS0yLjFBMzEuNCAzMS40IDAgMCAwIDI0IDEyYTMxLjQgMzEuNCAwIDAgMC0uNS01Ljh6TTkuNzUgMTUuMDJWOC45OEwxNS41IDEybC01Ljc1IDMuMDJ6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9mb290ZXI+XHJcblxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdG9hc3RyOiBUb2FzdHJTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoLnRva2VuO1xuXG4gICAgbGV0IGF1dGhSZXEgPSByZXE7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBhdXRoUmVxID0gcmVxLmNsb25lKHsgc2V0SGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShhdXRoUmVxKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgLy8gdG9rZW4gaW52w6FsaWRvL2V4cGlyYWRvIOKGkiBsaW1waWFyIHNlc2nDs24geSByZWRpcmlnaXJcbiAgICAgICAgICB0aGlzLmF1dGgubG9nb3V0KGZhbHNlKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIud2FybmluZygnVHUgc2VzacOzbiBleHBpcsOzLiBQb3IgZmF2b3IgaW5pY2lhIHNlc2nDs24gbnVldmFtZW50ZS4nKTtcbiAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aEludGVyY2VwdG9yUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsNEJBQTRCOzs7QUNBckMsU0FFRSwwQ0FFSztBQUNQLFNBQVMsZUFBZSwyQkFBMkI7OztBQ05uRCxTQUFTLFdBQVcsUUFBUSxjQUFjO0FBQzFDLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMscUJBQXFCO0FBRTlCLFNBQVMsb0JBQW9COzs7Ozs7OztBQ0YzQixJQUFBLDRCQUFBLEdBQUEsT0FBQSxDQUFB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LEdBQUEsQ0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLGFBQUEsU0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLEtBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsY0FBQSxJQUFBLEdBQUEsV0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxHQUFBLENBQUEsY0FBQSxTQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsUUFBQSxVQUFBLFlBQUEsSUFBQSxhQUFBLEtBQUEsR0FBQSxpQkFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxRQUFBLFlBQUEsWUFBQSxJQUFBLGFBQUEsS0FBQSxHQUFBLGlCQUFBLFNBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLFlBQUEsSUFBQSxTQUFBLElBQUEsR0FBQSxpQkFBQSxTQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsUUFBQSxjQUFBLFlBQUEsSUFBQSxhQUFBLEtBQUEsR0FBQSxpQkFBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLG1CQUFBLElBQUEsYUFBQSxJQUFBLFFBQUEsVUFBQSxjQUFBLGlDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLGlCQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLFFBQUEsV0FBQSxlQUFBLHVDQUFBLEdBQUEsaUJBQUEsU0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLFFBQUEsZ0JBQUEsV0FBQSx3QkFBQSxHQUFBLGlCQUFBLFdBQUEsVUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLFFBQUEsWUFBQSxZQUFBLElBQUEsV0FBQSxjQUFBLEdBQUEsaUJBQUEsU0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLFFBQUEsYUFBQSxZ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QSxVQUFBO0FBV0wsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSwrQkFBQSxXQUFBLElBQUEsV0FBQSxRQUFBO0FBSUssTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxRQUFBLFlBQUEsWUFBQSxZQUFBLFdBQUEsUUFBQSxVQUFBO0FBV0wsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSwrQkFBQSxXQUFBLElBQUEsV0FBQSxTQUFBO0FBR0ssTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxRQUFBLGNBQUEsWUFBQSxjQUFBLFdBQUEsUUFBQSxVQUFBO0FBV0wsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSwrQkFBQSxXQUFBLElBQUEsV0FBQSxJQUFBO0FBSUssTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxRQUFBLFNBQUEsWUFBQSxTQUFBLFdBQUEsUUFBQSxVQUFBO0FBV0wsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSwrQkFBQSxXQUFBLElBQUEsV0FBQSxJQUFBO0FBR0ssTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSx5QkFBQSxRQUFBLFNBQUEsWUFBQSxTQUFBLFdBQUEsUUFBQSxVQUFBO0FBeUJsQixNQUFBLHdCQUFBLENBQUE7QUFBQSxNQUFBLHlCQUFBLFdBQUEsSUFBQSxTQUFBLEVBQXFCLFlBQUEsSUFBQSxVQUFBLEVBQ0UsVUFBQSxJQUFBLFdBQUEsTUFBQSxFQUNLLFlBQUEsSUFBQSxXQUFBLFFBQUEsRUFDSSxVQUFBLElBQUEsV0FBQSxLQUFBOzs7SURySzlCSztJQUFZO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBRTtJQUFXO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFDekJDO0lBQWE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7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QUFFLGVBQWUsVUFBVSxLQUFLLEdBQUUsRUFBRSxDQUFFO0lBQzFFO0FBRUEsV0FBTyxLQUFLLE9BQU8sT0FBTyxFQUFFLEtBQzFCLFdBQVcsQ0FBQyxRQUEwQjtBQUNwQyxVQUFJLElBQUksV0FBVyxLQUFLO0FBRXRCLGFBQUssS0FBSyxPQUFPLEtBQUs7QUFDdEIsWUFBSTtBQUNGLGVBQUssT0FBTyxRQUFRLGdFQUF1RDtRQUM3RSxRQUFRO1FBQUM7QUFDVCxhQUFLLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQztNQUNqQztBQUNBLGFBQU8sV0FBVyxNQUFNLEdBQUc7SUFDN0IsQ0FBQyxDQUFDO0VBRU47O3FDQXhCVyxrQkFBZSx3QkFBQSxXQUFBLEdBQUEsd0JBQUEsVUFBQSxHQUFBLHdCQUFBLGlCQUFBLENBQUE7RUFBQTtpRkFBZixrQkFBZSxTQUFmLGlCQUFlLFVBQUEsQ0FBQTs7O2lGQUFmLGlCQUFlLENBQUE7VUFEM0JDOzs7QUE0Qk0sSUFBTSwwQkFBMEI7RUFDckMsU0FBUztFQUNULFVBQVU7RUFDVixPQUFPOzs7O0F4QjdCVCxxQkFBcUIsS0FBSyxpQ0FDckIsWUFEcUI7RUFFeEIsV0FBVztJQUNULEdBQUksVUFBVSxhQUFhLENBQUE7SUFDM0JDLG1CQUFpQjs7SUFDakIsY0FBYztNQUNaLFNBQVM7TUFDVCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixhQUFhO01BQ2IsYUFBYTtLQUVkO0lBQ0M7O0VBRUwsRUFBRSxNQUFNLFNBQU8sUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiQ29tcG9uZW50IiwiQ29tbW9uTW9kdWxlIiwiaTAiLCJpMiIsImkxIiwiQ29tbW9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJpNCIsImkxMiIsImkxMyIsImkyIiwiQ29tcG9uZW50IiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJpNCIsImk1IiwiaTEiLCJpMiIsIkNvbXBvbmVudCIsInNpZ25hbCIsImluamVjdCIsIlJvdXRlciIsIkluamVjdGFibGUiLCJzaWduYWwiLCJIdHRwQ2xpZW50IiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJQTEFURk9STV9JRCIsIkh0dHBDbGllbnQiLCJQTEFURk9STV9JRCIsImlzUGxhdGZvcm1Ccm93c2VyIiwic2lnbmFsIiwiSW5qZWN0YWJsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsImluamVjdCIsIlJvdXRlciIsInNpZ25hbCIsIkNvbXBvbmVudCIsImkwIiwiaTEiLCJpMiIsImkzIiwiaTQiLCJpNSIsImk2IiwiaTciLCJpOCIsImk5IiwiUm91dGVyIiwiaW5qZWN0IiwiaW5qZWN0IiwiUm91dGVyIiwiQ29tcG9uZW50IiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiUm91dGVyTGluayIsIk1hdEljb25Nb2R1bGUiLCJpMCIsImkxIiwiaTIiLCJDb21wb25lbnQiLCJpMCIsIk1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTEiLCJpMiIsImkzIiwicHJvdmlkZUFuaW1hdGlvbnMiLCJJbmplY3RhYmxlIiwiSW5qZWN0YWJsZSIsInByb3ZpZGVBbmltYXRpb25zIl19