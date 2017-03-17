// angular
import { Component }                    from '@angular/core';
import { ViewChild }                    from '@angular/core';

// libraries
import { StaticLog as LOG }             from 'system/static-log';

// app
import { SidenavComponent }             from './layouts/sidenav/sidenav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild(SidenavComponent) sidenav: SidenavComponent;

    constructor() {
        LOG.INFO("LOG enabled.");
    }

    sidenavToggle(event) {
        this.sidenav.toggle();
    }
}
