// angular
import { Component, OnInit }            from '@angular/core';
import { ViewChild }                    from '@angular/core';
import { MdSidenav }                    from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    //@Input() sidenav;
    @ViewChild('sidebar') sidenav: MdSidenav
    
    constructor() { 
    }

    ngOnInit() {
    }

    toggle() {
        this.sidenav.toggle();
    }

}
