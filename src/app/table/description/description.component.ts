import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit,OnChanges {
@Input() item:any=[];
  constructor() {
  
   }

  ngOnInit(): void {

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent data",changes)
    console.log(changes["item"].currentValue)
  }

}
