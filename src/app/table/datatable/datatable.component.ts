import { Component, OnInit } from '@angular/core';
import {data}  from "../../../assets/data"
// import { Pipe, PipeTransform } from '@angular/core';





@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {


  searchText:any=""

  allList:any
  list:any
   Detail:any
   icon:any
  
  constructor( ) {
    //  console.log(data[0].name);
    // data.forEach((x)=>{})
    // this.http.get('assets/json/data.json').subscribe((res:any) => {
    //   this.jsonDataResult = res;
    //   console.log('--- result :: ',  this.jsonDataResult);
    // });

   }

  ngOnInit(): void {
    this.allList = data
    
  }

  ondeatil(value:any){
    const newData=data[value];
    this.Detail=newData.detail
    console.log(this.Detail)
  }

}
