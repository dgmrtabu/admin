import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

constructor(private usuarioService: UsuarioService,
            private router: Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
/*     if (this.usuarioService.role === 'ADMIN_ROLE'){
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }  */
    console.log('Admin Guard');
     return (this.usuarioService.role === 'ADMIN_ROLE') ? true : false;
  }
}
