import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employe.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private readonly service : EmployeeService,
    private readonly router: Router) { }
 liste  
  ngOnInit() {
    this.service.getAll().subscribe(
      data => {console.log(data)
                this.liste = data},
      err => {console.log(err)}
    )
  }
openAdd(){
  this.router.navigateByUrl("employee/add")
  localStorage.setItem("ACTION","A")
}

openUpdate(e){

  this.router.navigateByUrl("employee/add")
  localStorage.setItem("ACTION","U")
  localStorage.setItem("ID",e.id)

}

delete(x){
  this.service.delete(x.id).subscribe(
    data => {
        this.ngOnInit()
    }
  )
}

}
