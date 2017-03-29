import { Component, OnInit, HostListener } from '@angular/core';

import { StaticLog as LOG } from 'system/static-log';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        LOG.DEBUG("Scroll3", event);
    }
    
}
