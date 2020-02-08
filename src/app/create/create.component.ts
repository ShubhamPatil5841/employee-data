import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  users =[];
  

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addEmp(data: { value: any; }){  
    this.users.push({
      name:data.value
       
    });
    if(this.users.length){
       
      this.router.navigate(['gallery']);
       
    }
      }
      removeEmp(uname: any){
        
        this.users.splice( this.users.length -1)
         
      }
      removeitem(item: number){
    this.users.splice(item,1)
     
      }
     
    }
    


