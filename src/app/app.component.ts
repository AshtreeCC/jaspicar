// angular
import { Component, OnInit }            from '@angular/core';
import { ViewChild }                    from '@angular/core';
import { HostListener }                 from '@angular/core';
import { Router, NavigationEnd }        from '@angular/router';
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

    /**
     * App
     * @LOG Is logging enabled?
     */
    constructor(private router: Router) {
        LOG.INFO("LOG enabled.");

    }
    
    /**
     * Initialise
     */
    ngOnInit() {
        this.updateSidenavState();
        this.observeHeaderState();
    }

    /**
     * Determine if the user has scrolled to the bottom
     * @PARAM position
     * @PARAM limit
     * @RETURN boolean
     */
    scrolledToBottom(position, limit): boolean {
        return (position === limit);
    }

    /**
     * Determine if the user is currently scrolling upward
     * @PARAM position
     * @RETURN boolean
     */
    scrollingUpward(position): boolean {

        let scrollingUp = false;

        if (position < this.scrollOffset) {
            scrollingUp = true;
            if (this.scrollHeaderOffset > 0) {
                this.scrollHeaderOffset = this.scrollHeaderOffset - (this.scrollOffset - position);
            } else {
                this.scrollHeaderOffset = 0;
            }
            this.scrollHeader = position - this.scrollHeaderOffset;
        } else {
            this.scrollHeaderOffset = (this.scrollOffset < 64) ? this.scrollOffset : 64;
        }
        this.scrollOffset = position;
        return scrollingUp;
    }

    /**
     * Observe the header for any scroll events
     * @SET this.scrollingUp
     */
    observeHeaderState() {
        // @TODO Get this working with HostListener
        let tracker = document.querySelector('.mat-sidenav-content');
        let theEnd = tracker.scrollHeight - tracker.clientHeight;


        let scroll$ = Observable.fromEvent(tracker, 'scroll').map(() => {
            return tracker.scrollTop;
        });

        let scroll = scroll$.subscribe((scrollTop) => {
            //LOG.DEBUG("scrollTop: "+scrollTop+" theEnd: "+theEnd);
            this.scrollingUp = this.scrollingUpward(scrollTop);
        });

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event) => {
                if (event !== null) {
                    this.scrollOffset = 0;
                    this.scrollHeader = 0;
                    this.scrollHeaderOffset = 64;

                }
            });

    }

    /**
     * Check media width and set sidenav to show/hide
     * @SET this.sidenavMode
     * @SET this.disableClose
     */
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

    /**
     * Determine what the initial show/hide state
     * of the sidenav should be
     * @SET this.innerWidth
     */
    @HostListener('window:resize', ['$event'])
    initialiseSidenavState(event: any) {

        // Set initial position
        this.innerWidth = event.target.innerWidth;
        this.updateSidenavState();

    }

    /**
     * Manually close the sidenav
     */
    sidenavClose(event: Event) {
        if (!this.disableClose) this.sidenav.close();
    }

    /**
     * Toggle the sidenav
     * @SET this.manualClose
     * @SET this.sidenavMode
     * @SET this.disableClose
     */
    sidenavToggle(event: Event) {

        // Check if the user manually closed
        if (this.innerWidth > maxContentWidth) {
            this.manualClose = this.sidenav.opened;
            this.sidenavMode = "side";
            this.disableClose = true;
        }

        this.sidenav.toggle();
    }

}
