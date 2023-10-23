import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
   template: `
      <div class="search-container">
          <form action="">
            <label for=""> Search : </label>
            <input type="text" placeholder="Search" 
            [(ngModel)]="enterSearch" 
            [ngModelOptions]="{standalone: true}"
            (input)="onEnterChangesText ()"
            >
          </form>
      </div>
  `,
  styles: [`
    .search-container{
      display:flex;
      justify-content:center;
      align-items:center;
      padding:0 1rem 0 2rem;
    }
    label{
      font-size:16px;
      color: #575c5c;
    }
    input{
      margin:10px;
      padding:5px 10px;
      font-size:16px;
      border:2px solid blue;
      outline:none;
      border-radius:10px;
      color: #575c5c;
      transition:all 0.4s ease;
    }
    input:hover{
      border:2px solid #5dd55d;
    }
  `]
})
export class SearchComponent {
  enterSearch: string = '';

  @Output()
   searchChangesText : EventEmitter<string> = new EventEmitter<string>();

   onEnterChangesText ()
   {
    this.searchChangesText.emit(this.enterSearch);
    
   }
}
