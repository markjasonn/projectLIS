import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls:['./app-header.component.css']
})

export class AppHeaderComponent {

    @Output() public sidenavToggle = new EventEmitter();
 
    constructor() { }
   
    ngOnInit() {
    }
   
    public onToggleSidenav = () => {
      this.sidenavToggle.emit();
    }    

}