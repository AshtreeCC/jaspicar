// angular
import { Component, OnInit }            from '@angular/core';
import { ViewChild, NgZone }            from '@angular/core';
import { MdSidenav }                    from '@angular/material';

// libraries
import { StaticLog as LOG }             from 'system/static-log';

// app
import { SidenavComponent }             from './layouts/sidenav/sidenav.component';

const maxContentWidth: number = 900;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @ViewChild('sidebar') sidenav: MdSidenav

    ngZone: NgZone;

    sidenavMode: string = "over";
    disableClose: boolean = false;
    manualClose: boolean = false;

    constructor(ngZone: NgZone) {
        LOG.INFO("LOG enabled.");

        // Not being automatically assigned
        this.ngZone = ngZone;
    }
    
    ngOnInit() {
        this.initialiseSidenavState();
    }

    updateSidenavState() {
        //LOG.ASSERT(this.sidenav);
        if (this.sidenav != null) {
            if ((window.innerWidth > maxContentWidth) && (!this.manualClose)) {
                this.sidenav.open();
                this.sidenavMode = "side";
                this.disableClose = true;
            } else {
                this.sidenav.close();
                this.sidenavMode = "over";
                this.disableClose = false;
            }
        }
    }

    initialiseSidenavState() {

        let ngZone = this.ngZone;
        
        // Set initial position
        this.updateSidenavState();

        // Watch for window resizes
        window.onresize = (event) => {
            ngZone.run(() => {
                this.updateSidenavState();
            });
        }

    }

    sidenavToggle(event) {

        // Check if the user manually closed
        if (window.innerWidth > maxContentWidth) {
            this.manualClose = this.sidenav.opened;
            this.sidenavMode = "side";
            this.disableClose = true;
        }

        this.sidenav.toggle();
        //LOG.ASSERT(this.manualClose, "manualClose");
    }
    
}
