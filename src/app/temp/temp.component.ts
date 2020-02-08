import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
title='emp_detail';

userData:any=[
  {name:"sandeep",salary:"22k",age:"20",id:"512"},
  {name:"sham",salary:"25k",age:"21",id:"513"},
  {name:"umesh",salary:"28k",age:"22",id:"514"},
  {name:"anuj",salary:"23k",age:"23",id:"515"},
  {name:"vidya",salary:"2lk",age:"24",id:"516"},
  {name:"sager",salary:"24k",age:"25",id:"517"},
];

getCurrentUser(user):void{
  console.log(user)
}
  constructor() { 
    console.log(this.userData)
  }

  ngOnInit() {
  }

}
