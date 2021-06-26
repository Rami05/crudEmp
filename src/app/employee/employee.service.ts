import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Employee } from './employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private readonly http: HttpClient) { }
  url = AppComponent.URl
  
  
  getAll(): Observable <Employee[]> {
    return this.http.get<Employee[]>(this.url + '/employee')
  }
  add(emp: Employee) {
    return this.http.post(this.url + '/employee', emp)
  }
  getOne(id : number): Observable <Employee> {
    return this.http.get<Employee>(this.url + '/employee/'+ id)
  }
  delete(id : number){
    return this.http.delete(this.url + '/employee/'+ id)
  }
}
