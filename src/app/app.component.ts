import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-app';

  childData:string = ''

  parentData:string = ''

  onChange(event:any){
    this.parentData = event
  }
}
