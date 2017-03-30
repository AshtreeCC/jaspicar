// angular
import { Component, OnInit }               from '@angular/core';
import { Output, EventEmitter }            from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @Output() sidenav = new EventEmitter();

    /**
     *
     */
    constructor() { 
    }

    /**
     *
     */
    ngOnInit() {
    }

    /**
     * Close the side navigation
     * @EMIT this.sidenav
     */
    sidenavClose(event: any) {
        this.sidenav.emit();
    }

}
