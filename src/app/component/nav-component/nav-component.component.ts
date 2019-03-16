import { Component, OnInit } from '@angular/core';
import * as Service from '../../services/service.pathconfig';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponent implements OnInit {

  username = 'Test User';

  ngOnInit() {
    
  }

}
