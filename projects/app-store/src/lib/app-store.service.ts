import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  constructor() { }

  dataSubject = new BehaviorSubject<any>(null)
}