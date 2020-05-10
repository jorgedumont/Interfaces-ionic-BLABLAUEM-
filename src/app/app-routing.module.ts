import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./pages/login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./pages/registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'usuario-conductor',
    loadChildren: () => import('./pages/usuario-conductor/usuario-conductor.module').then( m => m.UsuarioConductorPageModule)
  },
  {
    path: 'cartera',
    loadChildren: () => import('./pages/cartera/cartera.module').then( m => m.CarteraPageModule)
  },
  {
    path: 'lista-movimientos',
    loadChildren: () => import('./pages/lista-movimientos/lista-movimientos.module').then( m => m.ListaMovimientosPageModule)
  },
  {
    path: 'metodopago',
    loadChildren: () => import('./pages/metodopago/metodopago.module').then( m => m.MetodopagoPageModule)
  },
  {
    path: 'recargarautomatico',
    loadChildren: () => import('./pages/recargarautomatico/recargarautomatico.module').then( m => m.RecargarautomaticoPageModule)
  },
  {
    path: 'nuevatarjeta',
    loadChildren: () => import('./pages/nuevatarjeta/nuevatarjeta.module').then( m => m.NuevatarjetaPageModule)
  },
  {
    path: 'ingresardinero',
    loadChildren: () => import('./pages/ingresardinero/ingresardinero.module').then( m => m.IngresardineroPageModule)
  },
  {
    path: 'listacoches',
    loadChildren: () => import('./pages/listacoches/listacoches.module').then( m => m.ListacochesPageModule)
  },
  {
    path: 'nuevocoche',
    loadChildren: () => import('./pages/nuevocoche/nuevocoche.module').then( m => m.NuevocochePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
