# Preguntas

1. ¿Qué es y cómo funciona el elemento <RouterLink> en Angular?
   El elemento `<RouterLink>` en Angular es una directiva que se utiliza para navegar entre diferentes componentes en una aplicación Angular.

   Funciona de la siguiente manera:

   - Se coloca la directiva `routerLink` en el elemento HTML que se desea utilizar para la navegación. Por ejemplo, podría ser un elemento `<a>` o `<button>`.
   - El valor de `routerLink` es la ruta a la que se desea navegar. Esta ruta debe estar definida en el módulo de enrutamiento de la aplicación.

   Aquí hay un ejemplo de cómo se puede usar:

   ```html
   <a routerLink="/ruta-deseada">Navegar a la ruta deseada</a>
   ```

   Cuando se hace clic en el enlace, Angular navega a la ruta especificada sin necesidad de recargar toda la página, lo que proporciona una experiencia de usuario más fluida y rápida.

2. Explica la diferencia entre routerLink y routerLinkActive. ¿Qué
   otras directivas se pueden utilizar con el router en Angular?
   `routerLink` y `routerLinkActive` son dos directivas proporcionadas por el módulo de enrutamiento de Angular.

   - `routerLink`: Esta directiva se utiliza para vincular una ruta específica a un elemento HTML. Cuando se hace clic en este elemento, la aplicación navega a la ruta especificada.

   ```html
   <a routerLink="/ruta-deseada">Navegar a la ruta deseada</a>
   ```

   - `routerLinkActive`: Esta directiva se utiliza para aplicar estilos a un elemento HTML cuando su ruta asociada es la ruta activa. Es decir, si la ruta actual de la aplicación coincide con la ruta vinculada al elemento, se aplicarán los estilos especificados.

   ```html
   <a routerLink="/ruta-deseada" routerLinkActive="active"
     >Navegar a la ruta deseada</a
   >
   ```

   En este caso, si la ruta actual de la aplicación es "/ruta-deseada", se aplicará la clase CSS "active" al elemento `<a>`.

   Otras directivas que se pueden utilizar con el router en Angular incluyen:

   - `routerOutlet`: Es un marcador de posición que Angular rellena dinámicamente según la ruta que se está navegando.

   ```html
   <router-outlet></router-outlet>
   ```

   - `routerLinkActiveOptions`: Se utiliza junto con `routerLinkActive` para determinar cómo se deben comparar las rutas para determinar si están activas.

   ```html
   <a
     routerLink="/ruta-deseada"
     routerLinkActive="active"
     [routerLinkActiveOptions]="{exact: true}"
     >Navegar a la ruta deseada</a
   >
   ```

   En este caso, la clase "active" solo se aplicará si la ruta es exactamente "/ruta-deseada".

3. Describe el servicio ActivatedRouteSnapshot. ¿Cómo se utiliza y en qué
   casos es útil?
   `ActivatedRouteSnapshot` es una interfaz de Angular que contiene la información sobre una ruta asociada con un componente cargado en un outlet en un instante particular. Esta interfaz puede ser utilizada para obtener información sobre los parámetros de ruta, los parámetros de consulta y los segmentos de la ruta.

   Se utiliza principalmente en los guardias de ruta y los resolutores para hacer cosas como verificar permisos de usuario o cargar datos antes de que la ruta se active.

   Aquí hay un ejemplo de cómo se puede utilizar:

   ```typescript
   import { ActivatedRouteSnapshot } from '@angular/router';

   // en un guardia de ruta
   canActivate(route: ActivatedRouteSnapshot): boolean {
   // obtener un parámetro de ruta
   let id = route.params['id'];

   // hacer algo con el id, como verificar un permiso de usuario
   // ...

   return true; // o false si el usuario no tiene permiso
   }
   ```

   `ActivatedRouteSnapshot` es útil en casos donde necesitas acceder a la información de la ruta antes de que la ruta se active, como en los guardias de ruta y los resolutores. También es útil cuando necesitas acceder a la información de la ruta fuera del ciclo de vida normal del componente, como en un servicio.

4. ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe
   todas las guardas que existen en Angular (consulta para ello la documentación
   oficial de Angular)

   Las Route Guards, o guardas de ruta, son interfaces que pueden decirle a Angular si debe o no permitir la navegación a una ruta solicitada. Se utilizan para controlar el acceso a las rutas, por ejemplo, para verificar si un usuario está autenticado o si tiene los permisos necesarios para acceder a una ruta.

   Para usar una guarda en Angular, primero debes crear un servicio que implemente la interfaz de la guarda que deseas usar. Luego, puedes agregar la guarda a la configuración de tu ruta.

   Aquí están las guardas que existen en Angular:

   1. `CanActivate`: Decide si una ruta puede ser activada o no. Se puede usar para verificar si un usuario está autenticado antes de permitirle acceder a una ruta.

   2. `CanActivateChild`: Decide si las rutas hijas de una ruta pueden ser activadas o no.

   3. `CanDeactivate`: Decide si una ruta puede ser desactivada o no. Se puede usar para evitar que los usuarios abandonen una ruta si tienen cambios no guardados.

   4. `Resolve`: Realiza la recuperación de datos antes de que la ruta sea activada. Se puede usar para cargar los datos necesarios para una ruta antes de que se active.

   5. `CanLoad`: Decide si un módulo puede ser cargado de manera diferida o no. Se puede usar para evitar la carga de módulos si un usuario no está autenticado o no tiene los permisos necesarios.

   Cada una de estas guardas se implementa como un servicio que implementa la interfaz correspondiente. Por ejemplo, para implementar `CanActivate`, crearías un servicio que implementa la interfaz `CanActivate`:

   ```typescript
   import { Injectable } from "@angular/core";
   import {
     CanActivate,
     ActivatedRouteSnapshot,
     RouterStateSnapshot,
   } from "@angular/router";

   @Injectable({
     providedIn: "root",
   })
   export class AuthGuard implements CanActivate {
     canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
     ): boolean {
       // Tu lógica de autenticación va aquí
       // Por ejemplo, verifica si el usuario está autenticado y devuelve true si lo está
       // De lo contrario, devuelve false
     }
   }
   ```

   Luego, puedes agregar la guarda a tu configuración de ruta:

   ```typescript
   { path: 'ruta-protegida', component: ComponenteProtegido, canActivate: [AuthGuard] }
   ```

   En este caso, Angular llamará al método `canActivate` de `AuthGuard` antes de activar la ruta 'ruta-protegida'. Si `canActivate` devuelve `true`, la ruta se activará. Si devuelve `false`, la ruta no se activará.

5. ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en
   Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )

   La carga Lazy, o carga diferida, es un patrón de diseño que se utiliza en Angular para cargar los módulos solo cuando son necesarios, es decir, cuando se accede a la ruta que los utiliza. Esto puede mejorar el rendimiento de la aplicación al reducir el tamaño del código que se debe cargar cuando la aplicación se inicia por primera vez.

   Para configurar la carga Lazy en Angular, debes hacer lo siguiente:

   1. Crear un módulo con su propio espacio de enrutamiento. Este módulo será el que se cargará de manera diferida.

   ```typescript
   // archivo: feature.module.ts
   import { NgModule } from "@angular/core";
   import { CommonModule } from "@angular/common";
   import { RouterModule, Routes } from "@angular/router";
   import { FeatureComponent } from "./feature.component";

   const routes: Routes = [{ path: "", component: FeatureComponent }];

   @NgModule({
     declarations: [FeatureComponent],
     imports: [CommonModule, RouterModule.forChild(routes)],
   })
   export class FeatureModule {}
   ```

   2. En tu módulo de enrutamiento principal (o cualquier módulo de enrutamiento donde quieras definir la carga diferida), debes definir la ruta que utilizará la carga diferida. Para hacer esto, usas la propiedad `loadChildren` y proporcionas la ruta al módulo y el nombre del módulo.

   ```typescript
   // archivo: app-routing.module.ts
   import { NgModule } from "@angular/core";
   import { Routes, RouterModule } from "@angular/router";

   const routes: Routes = [
     {
       path: "feature",
       loadChildren: () =>
         import("./feature/feature.module").then((m) => m.FeatureModule),
     },
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
   })
   export class AppRoutingModule {}
   ```

   En este caso, cuando se navega a la ruta 'feature', Angular cargará el módulo `FeatureModule` de manera diferida.

6. Compara las diferencias entre CanDeactivate y CanActivate guards en
   Angular. Proporciona ejemplos de cuándo se utilizaría cada uno.

   `CanActivate` y `CanDeactivate` son dos tipos de guardas de ruta en Angular que se utilizan para controlar el acceso a las rutas.

   - `CanActivate`: Esta guarda se utiliza para decidir si una ruta puede ser activada o no. Se utiliza comúnmente para verificar si un usuario está autenticado antes de permitirle acceder a una ruta. Por ejemplo, si tienes una página de perfil de usuario que solo debe ser accesible para usuarios autenticados, puedes usar una guarda `CanActivate` para verificar si el usuario está autenticado antes de activar la ruta.

   ```typescript
   // Ejemplo de CanActivate guard
   import { CanActivate } from "@angular/router";

   export class AuthGuard implements CanActivate {
     constructor(private authService: AuthService) {}

     canActivate() {
       return this.authService.isAuthenticated();
     }
   }
   ```

   - `CanDeactivate`: Esta guarda se utiliza para decidir si una ruta puede ser desactivada o no. Se utiliza comúnmente para evitar que los usuarios abandonen una ruta si tienen cambios no guardados. Por ejemplo, si tienes un formulario y quieres evitar que los usuarios abandonen la página antes de guardar sus cambios, puedes usar una guarda `CanDeactivate` para verificar si hay cambios no guardados antes de desactivar la ruta.

   ```typescript
   // Ejemplo de CanDeactivate guard
   import { CanDeactivate } from "@angular/router";
   import { FormComponent } from "./form.component";

   export class UnsavedChangesGuard implements CanDeactivate<FormComponent> {
     canDeactivate(component: FormComponent) {
       if (component.hasUnsavedChanges()) {
         return window.confirm(
           "Tienes cambios no guardados. ¿Estás seguro de que quieres abandonar la página?"
         );
       } else {
         return true;
       }
     }
   }
   ```

   En resumen, `CanActivate` se utiliza para controlar si una ruta puede ser activada, mientras que `CanDeactivate` se utiliza para controlar si una ruta puede ser desactivada.

7. ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde
   estás usando middlewares en nuestra aplicación?

   En el contexto de Angular, el término "middleware" no se utiliza de la misma manera que en otros marcos de trabajo como Express.js. Sin embargo, el concepto de middleware como una capa de software que se encuentra entre el sistema operativo y las aplicaciones que se ejecutan en él, puede ser similar a ciertos aspectos de Angular.

   En Angular, los aspectos que podrían considerarse "middleware" podrían ser los interceptores HTTP y los guardias de ruta.

   1. **Interceptores HTTP**: Los interceptores son una forma de middleware que se utilizan para interceptar solicitudes o respuestas HTTP y transformarlas antes de que se envíen o cuando se reciben. Por ejemplo, podrías tener un interceptor que añade un token de autenticación a todas las solicitudes HTTP salientes.

   ```typescript
   import { Injectable } from "@angular/core";
   import {
     HttpInterceptor,
     HttpRequest,
     HttpHandler,
   } from "@angular/common/http";

   @Injectable()
   export class AuthInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler) {
       const authToken = this.authService.getAuthToken();
       const authReq = req.clone({ setHeaders: { Authorization: authToken } });
       return next.handle(authReq);
     }
   }
   ```

   2. **Guardias de ruta**: Los guardias de ruta son una forma de middleware que se utilizan para controlar el acceso a las rutas. Por ejemplo, podrías tener un guardia de ruta que verifica si un usuario está autenticado antes de permitirle acceder a una ruta.

   ```typescript
   import { Injectable } from '@angular/core';
   import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router

   ';



   @Injectable({
   providedIn 'root'
   })
   export class AuthGuard implements CanActivate {
   canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): boolean {
       return this.authService.isAuthenticated();
   }
   }
   ```

   En cuanto a dónde estás usando middlewares en tu aplicación, necesitaría más detalles sobre tu aplicación para poder responder. Sin embargo, los lugares comunes para usar middleware en una aplicación Angular incluyen la autenticación, el manejo de errores, la transformación de solicitudes/respuestas HTTP, y el control de acceso a las rutas.
