// angular
import { Component, OnInit }            from '@angular/core';
import { HostBinding }                  from '@angular/core';
import { Router }                       from '@angular/router';

// libraries
import { AngularFireAuth }              from 'angularfire2/auth';
import * as firebase                    from 'firebase/app';

// app
//import { moveIn }                       from '../../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    //animations: [moveIn()],
    //host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

    error: any;

    /**
     *
     */
    constructor(public afAuth: AngularFireAuth, private router: Router) {
        //this.afAuth.auth.subscribe(auth => {
        //    if (auth) {
        //        this.router.navigateByUrl('/user');
        //    } 
        //});
        if (this.afAuth.authState) {
            this.router.navigateByUrl('/user');
        }
    }

    /**
     * Login via Facebook
     * @SET this.error
     */
    loginFacebook() {
        this.afAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        ).then((success) => {
            this.router.navigate(['/user']);
        }).catch((err) => {
            this.error = err;
        });
    }
    
    /**
     *  Login via Google
     *  @SET this.error
     */
    loginGoogle() {
        this.afAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        ).then((success) => {
            this.router.navigate(['/user']);
        }).catch((err) => {
            this.error = err;
        });
    }

    /**
     *
     */
    ngOnInit() {
    }

}
