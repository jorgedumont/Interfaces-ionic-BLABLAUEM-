import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista-conductores',
    loadChildren: () => import('./lista-conductores/lista-conductores.module').then( m => m.ListaConductoresPageModule)
  },
  {
    path: 'opcion-conductor',
    loadChildren: () => import('./opcion-conductor/opcion-conductor.module').then( m => m.OpcionConductorPageModule)
  },
  {
    path: 'lista-pasajeros',
    loadChildren: () => import('./lista-pasajeros/lista-pasajeros.module').then( m => m.ListaPasajerosPageModule)
  },
  {
    path: 'chat-pasajero',
    loadChildren: () => import('./chat-pasajero/chat-pasajero.module').then( m => m.ChatPasajeroPageModule)
  },
  {
    path: 'chat-pasajero1',
    loadChildren: () => import('./chat-pasajero1/chat-pasajero1.module').then( m => m.ChatPasajero1PageModule)
  },
  {
    path: 'perfil-pasajero',
    loadChildren: () => import('./perfil-pasajero/perfil-pasajero.module').then( m => m.PerfilPasajeroPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  },
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
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'usuario-conductor',
    loadChildren: () => import('./usuario-conductor/usuario-conductor.module').then( m => m.UsuarioConductorPageModule)
  },
  {
    path: 'cartera',
    loadChildren: () => import('./cartera/cartera.module').then( m => m.CarteraPageModule)
  },
  {
    path: 'lista-movimientos',
    loadChildren: () => import('./lista-movimientos/lista-movimientos.module').then( m => m.ListaMovimientosPageModule)
  },
  {
    path: 'metodopago',
    loadChildren: () => import('./metodopago/metodopago.module').then( m => m.MetodopagoPageModule)
  },
  {
    path: 'recargarautomatico',
    loadChildren: () => import('./recargarautomatico/recargarautomatico.module').then( m => m.RecargarautomaticoPageModule)
  },
  {
    path: 'nuevatarjeta',
    loadChildren: () => import('./nuevatarjeta/nuevatarjeta.module').then( m => m.NuevatarjetaPageModule)
  },
  {
    path: 'ingresardinero',
    loadChildren: () => import('./ingresardinero/ingresardinero.module').then( m => m.IngresardineroPageModule)
  },
  {
    path: 'listacoches',
    loadChildren: () => import('./listacoches/listacoches.module').then( m => m.ListacochesPageModule)
  },
  {
    path: 'nuevocoche',
    loadChildren: () => import('./nuevocoche/nuevocoche.module').then( m => m.NuevocochePageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'viajes-conductor',
    loadChildren: () => import('./viajes-conductor/viajes-conductor.module').then( m => m.ViajesConductorPageModule)
  },
  {
    path: 'tabs1',
    loadChildren: () => import('./tabsPasajero/tabsPasajero.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./tabsConductor/tabsConductor.module').then(m => m.TabsPageModule)
  },
  {
    path: 'configuracionconductor',
    loadChildren: () => import('./configuracionconductor/configuracionconductor.module').then( m => m.ConfiguracionconductorPageModule)
  },
  {
    path: 'cambiar-password-conductor',
    loadChildren: () => import('./cambiar-password-conductor/cambiar-password-conductor.module').then( m => m.CambiarPasswordConductorPageModule)
  },
  {
    path: 'homeconductor',
    loadChildren: () => import('./homeconductor/homeconductor.module').then( m => m.HomeconductorPageModule)
  },
  {
    path: 'homepasajero',
    loadChildren: () => import('./homepasajero/homepasajero.module').then( m => m.HomepasajeroPageModule)
  },
  {
    path: 'reservapasajero',
    loadChildren: () => import('./reservapasajero/reservapasajero.module').then( m => m.ReservapasajeroPageModule)
  },
  {
    path: 'listareservas',
    loadChildren: () => import('./listareservas/listareservas.module').then( m => m.ListareservasPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'editarperfilconductor',
    loadChildren: () => import('./editarperfilconductor/editarperfilconductor.module').then( m => m.EditarperfilconductorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
