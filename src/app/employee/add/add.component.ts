import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employe.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  emp : Employee 
  constructor(private readonly service: EmployeeService,
    private readonly router: Router) { }

  ngOnInit() {
let a =localStorage.getItem("ACTION")
if (a === "U") {
  let id =  +localStorage.getItem("ID")
  this.service.getOne(id).subscribe(
    data => {this.emp = data}
  )
}else if( a === "A")
this.emp = new Employee()   
}
add(){


  
  console.log(this.emp)
  this.service.add(this.emp).subscribe(
  data =>{  console.log("success add")
  this.router.navigateByUrl('/employee')
},
  err => {console.log(err)}
  )

}
}
