// angular
import { Component, OnInit }            from '@angular/core';
import { Observable }                   from 'rxjs/Observable';

// services
import { AuthService }                  from '../auth.service';

// app
//import { moveIn, fallIn, moveInLeft }   from '../../router.animations';
import { FirstnamePipe }                from "../../pipes/firstname/firstname.pipe";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  //animations: [moveIn(), fallIn(), moveInLeft()],
  //host: {'[@moveIn]': ''}
})
export class ProfileComponent implements OnInit {

    name$: Observable<string>;
    
    /**
     * Profile
     */
    constructor(public authService: AuthService) {
        this.name$ = this.authService.name;
    }

    /**
     *
     */
    ngOnInit() {
    }

}
