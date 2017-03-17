// angular
import { Component, OnInit }            from '@angular/core';
import { HostBinding }                  from '@angular/core';
import { Router }                       from '@angular/router';

// libraries
import { AngularFire }                  from 'angularfire2';
import { AuthProviders, AuthMethods }   from 'angularfire2';

// app
import { moveIn }                       from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

    error: any;

    constructor(public af: AngularFire, private router: Router) {
        this.af.auth.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/members');
            } 
        });
    }

    loginFacebook() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then((success) => {
            this.router.navigate(['/members']);
        }).catch((err) => {
            this.error = err;
        });
    }
    
    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }).then((success) => {
            this.router.navigate(['/members']);
        }).catch((err) => {
            this.error = err;
        });
    }

    ngOnInit() {
    }

}
