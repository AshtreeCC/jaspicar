// angular
import { Component, OnInit }                    from '@angular/core';
import { Output, EventEmitter }                 from '@angular/core';
import { ChangeDetectionStrategy }              from '@angular/core';
import { Router, NavigationEnd }                from '@angular/router';

// libraries
import { StaticLog as LOG }                     from 'system/static-log';
import { Observable }                           from 'rxjs/Observable';

// services
import { AuthService }                          from '../..//auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class HeaderComponent implements OnInit {

    @Output() sidenav = new EventEmitter();

    auth$: Observable<boolean>;

    isRoot: boolean;
    urlBack: string;

    /**
     * Header
     * @SET this.auth$
     * @SET this.name$
     */
    constructor(private authService: AuthService, private router: Router) {
        this.auth$ = this.authService.auth;

        this.checkRouterHistory();

    }
    
    /**
     *
     */
    ngOnInit() {
    }
    
    /**
     * Quick logout
     */
    logout() {
        this.authService.logout();
    }
    
    /**
     * Monitor route and change between menu and back icons
     * @SET this.urlBack
     * @SET this.isRoot
     */
    checkRouterHistory() {

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                if (event.url !== null) {
                    let urlSegment = event.url.split("/");
                    urlSegment.pop();
                    this.urlBack = urlSegment.join("/");
                    this.isRoot = (urlSegment.length < 2);
                }
        });

    }
    
}
