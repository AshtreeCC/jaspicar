// angular
import { Component, OnInit }               from '@angular/core';
import { Output, EventEmitter }            from '@angular/core';
import { Observable }                      from "rxjs/Observable";

// app
import { AuthService }                     from "../../auth/auth.service";
import { FirstnamePipe }                   from "../../pipes/firstname/firstname.pipe";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @Output() sidenav = new EventEmitter();

    auth$: Observable<boolean>;
    name$: Observable<string>;

    /**
     * Sidenav
     */
    constructor(private authService: AuthService) {
        this.auth$ = this.authService.auth;
        this.name$ = this.authService.name;
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
     * Close the side navigation
     * @EMIT this.sidenav
     */
    sidenavClose(event: any) {
        this.sidenav.emit();
    }

}
