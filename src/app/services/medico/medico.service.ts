import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Medico } from '../../models/medico.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers: {
      'x-token': this.token
    }
  };
}

  cargarMedicos(/* desde: number= 0 */){
    // localhost:3000/api/hospitales
   const url = `${ base_url }/medicos`;
   return this.http.get(url, this.headers)
     .pipe(
       map( (resp: {ok: boolean, medicos: Medico[]}) => resp.medicos)
     );
 }

 crearHospital(medico: Medico){
  // localhost:3000/api/hospitales
 const url = `${ base_url }/medicos`;
 return this.http.post(url, medico, this.headers);

}

actualizarHospital(medico: Medico){
  // localhost:3000/api/hospitales
 const url = `${ base_url }/medicos/${medico._id}`;
 return this.http.put(url, medico, this.headers);

}

borrarHospital(_id: string){
  // localhost:3000/api/hospitales
 const url = `${ base_url }/medicos/${_id}`;
 return this.http.delete(url, this.headers);

}

}
