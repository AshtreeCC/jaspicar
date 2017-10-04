// angular
import { Injectable, OnDestroy }                from '@angular/core';
import { Router, CanActivate }                  from '@angular/router';
import { ActivatedRouteSnapshot }               from '@angular/router';
import { RouterStateSnapshot }                  from '@angular/router';
import { MdSnackBar }                           from '@angular/material';

// libraries
import { AngularFireAuth }                      from 'angularfire2/auth';
//import { FirebaseAuthState }                    from 'angularfire2';
import { Observable }                           from 'rxjs/Observable';
import { Subscription }                         from 'rxjs/Subscription';
import { Subject, BehaviorSubject }             from 'rxjs/Rx';

// app
import { OfflineComponent }                     from './offline/offline.component';

// services
import { StaticLog as LOG }                     from "system/static-log";

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService implements OnDestroy {

    private _user: any;
    private _nameS: Subscription;
    private _onlineS: Subscription;

    private _name: Subject<string> = new BehaviorSubject<string>("Anonymous");

    constructor(private snackBar: MdSnackBar, private afAuth: AngularFireAuth, private router: Router) {

        this.initDisplayNameObservable();
        this.initOfflineSnackBarMessage();

        this.afAuth.authState.subscribe(user => {
            if (user) {
                this._user = user;
            }
        });

    }

    set user(user: any) {
        this._user = user;
    }

    get name(): Observable<string> {
        return this._name.asObservable();
    }

    get id(): string {
        return this._user.uid;
    }

    get token(): string {
        return this._user.auth.getToken();
    }

    get auth(): Observable<any> {
        return this.afAuth.authState;
    }

    initDisplayNameObservable() {
        this._nameS = this.afAuth.authState.subscribe((user) => {
            if (user && user.displayName) {
                this._name.next(user.displayName);
            }
        });
    }

    initOfflineSnackBarMessage() {

        let online$: Observable<boolean>;
        let snackBarRef: any;
        
        // Monitor when online
        online$ = Observable.merge(
            Observable.of(navigator.onLine),
            Observable.fromEvent(window, 'online').map(() => true),
            Observable.fromEvent(window, 'offline').map(() => false)
        );
       
        // Display message when offline
        this._onlineS = online$.subscribe((online) => {
            if (snackBarRef && online) { 
                snackBarRef.dismiss();
            } else if (!online) {
                snackBarRef = this.snackBar.openFromComponent(OfflineComponent);
            }
        });
    }

    logout(): firebase.Promise<any> {
        this._name.next("Anonymous");
        this.router.navigate(['/login']);

        return this.afAuth.auth.signOut();
    }

    // Unsubscribe from Observables
    // May not be necessary for global
    ngOnDestroy() {
        this._onlineS.unsubscribe();
        this._nameS.unsubscribe();
    }

}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.map((user) => {
            if (user) {
                this.authService.user = user;
                return true;
            } else {
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false; 
            }
        }).first();
    } 
}
