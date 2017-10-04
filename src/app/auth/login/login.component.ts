// angular
import { Component, OnInit }      from '@angular/core';
//import { HostBinding }            from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// libraries
import { AngularFireAuth }        from 'angularfire2/auth';
import * as firebase              from 'firebase/app';

// app
//import { moveIn }                 from '../../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    //animations: [moveIn()],
    //host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

    error: any;
    loading = false;
    returnUrl: string;

    /**
     *
     */
    constructor(
        public afAuth: AngularFireAuth, 
        private router: Router, 
        private route: ActivatedRoute
    ) {  }
    
    /**
     *
     */
    ngOnInit() {
        //if (this.afAuth.authState) {
        //    this.router.navigateByUrl('/user');
        //}
        
        // Reset the login status
        this.afAuth.auth.signOut();

        // Get return url from route parameters or default to the user profile
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';
    }

    /**
     * Login via Facebook
     * @SET this.error
     */
    loginFacebook() {
        this.loading = true;
        this.afAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        ).then((success) => {
            this.router.navigate([this.returnUrl]);
        }).catch((err) => {
            this.error = err;
            this.loading = false;
        });
    }
    
    /**
     *  Login via Google
     *  @SET this.error
     */
    loginGoogle() {
        this.loading = true;
        this.afAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        ).then((success) => {
            this.router.navigate([this.returnUrl]);
        }).catch((err) => {
            this.error = err;
            this.loading = false;
        });
    }

}
