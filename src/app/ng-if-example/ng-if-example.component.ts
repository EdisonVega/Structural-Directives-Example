import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent {


  @Input() name:string;

  public namesList:Array<string> = [];
  public inputName:string = '';

  constructor() { }

  addName(){
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);
  }
  resetList(){
    this.namesList = [];
  }


}
