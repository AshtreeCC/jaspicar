// angular
import { Component, OnInit }            from '@angular/core';
import { Pipe, PipeTransform }          from '@angular/core';
import { Router }                       from '@angular/router';
import { Observable }                   from 'rxjs/Observable';

// services
import { AuthService }                  from '../auth.service';

// app
//import { moveIn, fallIn, moveInLeft }   from '../../router.animations';
import { FirstnamePipe }                from '../../pipes/firstname.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  //animations: [moveIn(), fallIn(), moveInLeft()],
  //host: {'[@moveIn]': ''}
})
export class ProfileComponent implements OnInit {

    name$: Observable<string>;
    error: any;
    state: string = '';
    
    constructor(public authService: AuthService, private router: Router) {
        this.name$ = authService.name;
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout().then((success) => {
            this.router.navigateByUrl('/login');
        }).catch((err) => {
            this.error = err;
        });
    }

}
