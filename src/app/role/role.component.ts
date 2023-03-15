import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

roles:any;
deps:any;
jobs:any;
works:any;
constructor(private http: HttpClient)
{

}

SelectonClick()
{
  let response= this.http.get("http://localhost:8080/api/v1/findAllRole");
    response.subscribe((data)=>this.roles=data);

}


ngOnInit()
{
    // let response= this.http.get("http://localhost:8080/api/v1/findAllRole");
    // response.subscribe((data)=>this.roles=data);

    let dep=this.http.get("http://localhost:8080/api/v1/findAllDepartment");
    dep.subscribe((data)=>this.deps=data);

    let job=this.http.get("http://localhost:8080/api/v1/jobType");
    job.subscribe((data)=>this.jobs=data);


    let work=this.http.get("http://localhost:8080/api/v1/findAllWorkingMode");
    work.subscribe((data)=>this.works=data);




}


 
}
