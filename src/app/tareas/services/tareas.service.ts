import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tarea } from '../interfaces/tareas/tarea.interface';
import { UserResumen } from '../interfaces/users/user-resumen.interface';
import { User } from '../interfaces/users/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private URL_API:string= 'https://jsonplaceholder.typicode.com/'
  constructor(private http:HttpClient) { }

  public obtenerTareas():Observable<Tarea[]>{
    const URL:string= `${this.URL_API}/todos`;
    return this.http.get<Tarea[]>(URL)
  }

  public obtenerTareaPorId(id: number): Observable<Tarea> {
    const URL: string = `${this.URL_API}/todos/${id}`;
    return this.http.get<Tarea>(URL);
  }

  public obtenerUsers(idUsuario: number = 0): Observable<UserResumen> {
    const URL: string = `${this.URL_API}/users/${idUsuario}`;
    return this.http.get<User>(URL).pipe(
      map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        company: user.company.name,
      }))
    );
  }
  
}
