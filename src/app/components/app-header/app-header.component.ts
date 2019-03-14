import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls:['./app-header.component.css']
})

export class AppHeaderComponent {

    @Output() public sidenavToggle = new EventEmitter();
 
    constructor( private router: Router ) { }
   
    ngOnInit() {
    }
   
    public onToggleSidenav = () => {
      this.sidenavToggle.emit();
    }  
    
    
    login(){
      this.router.navigate(["/login"]);
  }

}