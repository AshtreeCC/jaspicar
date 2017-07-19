// angular
import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

// libraries
import { AngularFireAuth }              from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// app
//import { moveIn, fallIn }               from '../../router.animations';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
    //animations: [moveIn(), fallIn()],
    //host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

    state: string = '';
    error: any;

    constructor(public afAuth: AngularFireAuth, private router: Router) {
        //this.afAuth.auth.subscribe((auth) => {
            if (this.afAuth.authState) {
                this.router.navigate(['/user/profile']);
            }
        //});
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        if (formData.valid) {
            this.afAuth.auth.signInWithEmailAndPassword(
                formData.value.email, 
                formData.value.password
            ).then((success) => {
                this.router.navigate(['/user/profile']);
            }).catch((err) => {
                this.error = err;
            });
        }
    }

}
