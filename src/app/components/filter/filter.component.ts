import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
  <div class="filter-container">
      <form action="">
          <label for=""> Filter : </label>
     
          <input type="radio" value="All" name="filter" 
          [(ngModel)]=" selectRadioButtonValue"
          (change)="onRadioButtonSelectionChanges()"  
          >
          <span>All Course ({{all}})</span>

          <input type="radio" value="Free" name="filter" 
          [(ngModel)]=" selectRadioButtonValue"
          (change)="onRadioButtonSelectionChanges()"  
          >
          <span>Free ({{free}})</span>
     
          <input type="radio" value="Premuim" name="filter" 
          [(ngModel)]=" selectRadioButtonValue"
          (change)="onRadioButtonSelectionChanges()"            
          >
          <span>Premuim ({{primuim}})</span>
     
        </form>
  </div>
`,
styles: [`
.filter-container{
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0 1rem 2rem;
}
label{
  font-size:16px;
  color: #575c5c;
}
input[type="radio"]{
  margin:10px;
  padding:10px 15px;
  font-size:16px;
  outline:none;
  color: #575c5c;
  transition:all 0.4s ease;
}
input[type="radio"]:hover{
  border:2px solid #5dd55d;
}`]
})
export class FilterComponent {
  @Input() all : number = 10;
  @Input() free : number = 2;
  @Input() primuim :number = 3;

  selectRadioButtonValue : string = 'All';
@Output()
 filterRadioButtonSelectionChanges: EventEmitter<string> = new EventEmitter<string>();
 onRadioButtonSelectionChanges (){
   this.filterRadioButtonSelectionChanges.emit(this.selectRadioButtonValue);
   // console.log(this.selectRadioButtonValue);
 }
}
