// angular
import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

// libraries
import { AngularFireAuth }                  from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// app
//import { moveIn, fallIn }               from '../../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    //animations: [moveIn(), fallIn()],
    //host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

    state: string = '';
    error: any;

    email: string;
    password: string;

    /**
     *
     */
    constructor(public afAuth: AngularFireAuth, private router: Router) {  }

    /**
     *
     */
    ngOnInit() {
    }

    /**
     * Submit the signup form
     * @PARAM formData
     * [@SET this.error] 
     */
    onSubmit(formData) {
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword(
                formData.value.email,
                formData.value.password
            ).then((success) => {
                this.router.navigate(['/login']);
            }).catch((err) => {
                this.error = err;
            });
        }
    }

    /**
     * Clear errors
     * @UNSET this.error
     */
    clearErrors() {
        this.error = "";
    }

}
