import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AppStoreService } from 'app-store-bej';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-app';

  childData:string = ''

  parentData:string = ''

  constructor(private apiService:ApiService, private appStore:AppStoreService){

    this.appStore.envSubject.next(environment.val)

    this.apiService.getData().subscribe((res)=>{
      console.log(res, 'from mail');
      
    })
  }

  onChange(event:any){
    this.parentData = event
  }
}
