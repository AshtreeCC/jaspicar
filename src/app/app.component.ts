// angular
import { Component, OnInit }            from '@angular/core';
import { ViewChild }                    from '@angular/core';
import { HostListener }                 from '@angular/core';
import { MdSidenav }                    from '@angular/material';
import { Observable }                   from 'rxjs/Observable';

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
    
    //ngZone: NgZone;
    //document: Document;

    sidenavMode: string = "over";
    disableClose: boolean = false;
    manualClose: boolean = false;

    innerWidth: number = window.innerWidth;

    scrollOffset: number = 0;
    scrollHeader: number = 0;
    scrollHeaderOffset: number = 64;
    scrollingUp: boolean = false;

    constructor() {
        LOG.INFO("LOG enabled.");

    }
    
    ngOnInit() {
        this.updateSidenavState();
        this.observeHeaderState();
    }

    scrolledToBottom(position, limit) {
        return (position === limit);
    }

    scrollingUpward(position) {

        if (position < this.scrollOffset) {
            this.scrollingUp = true;
            if (this.scrollHeaderOffset > 0) {
                this.scrollHeaderOffset = this.scrollHeaderOffset - (this.scrollOffset - position);
            } else {
                this.scrollHeaderOffset = 0;
            }
            this.scrollHeader = position - this.scrollHeaderOffset;
        } else {
            this.scrollingUp = false;
            this.scrollHeaderOffset = (this.scrollOffset < 64) ? this.scrollOffset : 64;
        }
        this.scrollOffset = position;
        return this.scrollingUp;
    }

    observeHeaderState() {
        // @TODO Get this working with HostListener
        let tracker = document.querySelector('.mat-sidenav-content');
        let theEnd = tracker.scrollHeight - tracker.clientHeight;


        let scroll$ = Observable.fromEvent(tracker, 'scroll').map(() => {
            //LOG.DEBUG("tracker.scrollTop", tracker.scrollTop); 
            return tracker.scrollTop;
        });

        let scroll = scroll$.subscribe((scrollTop) => {
            //LOG.DEBUG("scrollTop: "+scrollTop+" theEnd: "+theEnd);
            
            //LOG.ASSERT(this.scrollingUpward(scrollTop), "Scrolling up: ");
            
            if (this.scrollingUpward(scrollTop)) {
                
            }
        });

    }
    
    updateSidenavState() {
        //LOG.ASSERT(this.sidenav);
        if (this.sidenav != null) {
            if ((this.innerWidth > maxContentWidth) && (!this.manualClose)) {
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

    @HostListener('window:resize', ['$event'])
    initialiseSidenavState(event: any) {

        //LOG.DEBUG(event.target.innerWidth);
        //let ngZone = this.ngZone;
        
        // Set initial position
        this.innerWidth = event.target.innerWidth;
        this.updateSidenavState();

        // Watch for window resizes
        //window.onresize = (event) => {
        //ngZone.run(() => {
        //        this.updateSidenavState();
        //    });
        //}

    }

    sidenavClose(event: Event) {
        if (!this.disableClose) this.sidenav.close();
    }

    sidenavToggle(event: Event) {

        // Check if the user manually closed
        if (this.innerWidth > maxContentWidth) {
            this.manualClose = this.sidenav.opened;
            this.sidenavMode = "side";
            this.disableClose = true;
        }

        this.sidenav.toggle();
        //LOG.ASSERT(this.manualClose, "manualClose");
    }

    //@HostListener("window:scroll", ['$event'])
    //onWindowScroll(event: any) {
    //    LOG.DEBUG("event.target.pageYOffset", event.target.pageYOffset);
    //    LOG.DEBUG("event.target.scrollTop", event.target.scrollTop);
    //    LOG.DEBUG("document.body.ScrollTop", this.document.body.scrollTop);
    //}

}
