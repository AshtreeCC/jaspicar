// angular
import { Component, OnInit, HostListener }                    from '@angular/core';
import { Input, Output, EventEmitter }          from '@angular/core';
import { ChangeDetectionStrategy }              from '@angular/core';
import { Router }                               from '@angular/router';

// libraries
import { StaticLog as LOG }                     from 'system/static-log';
import { Observable }                           from 'rxjs/Observable';
//import { Subscription }                         from 'rxjs/Subscription';

// app
import { FirstnamePipe }                        from '../../pipes/firstname.pipe';

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
    name$: Observable<string>;

    constructor(private authService: AuthService, private router: Router) {
        this.auth$ = this.authService.auth;
        this.name$ = this.authService.name;
    }
        
    ngOnInit() {
    }
    
    logout() {
        this.authService.logout();
    }
    
    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        LOG.DEBUG("Scroll2", event);
    }
    
}
