// angular
import { Component, OnInit }    from '@angular/core';
import { Observable }           from "rxjs/Observable";

// services
import { AuthService }          from "../auth.service";

// app
import { FirstnamePipe }        from "../../pipes/firstname/firstname.pipe";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    name$: Observable<string>;

    /**
     * User
     */
    constructor(private authService: AuthService) {
        this.name$ = this.authService.name;
    }

  ngOnInit() {
  }

}
