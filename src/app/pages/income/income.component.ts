// angular
import { Component, OnInit }                  from '@angular/core';
import { MatInputModule, MatDatepickerModule }  from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// libraries
import { AngularFireDatabase }                from "angularfire2/database";
//import { FirebaseObjectObservable }           from "angularfire2/database";
import { Observable }                         from "rxjs/Observable";


// models
import { Income }                             from '../../models/income';

// pipes
import { ReversePipe }                        from "../../pipes/reverse/reverse.pipe";

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

    incomeForm: FormGroup;
    allIncome$: Income[];

    constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
        //this.income = this.createIncome();
        this.incomeForm = this.createForm();
    }

    ngOnInit() {
        // Find all the income figures
        // @TODO Filter these on active year
        this.findAllIncome()
            .subscribe(income => {
                this.allIncome$ = income;
                //console.log(income);
            });
    }

    findAllIncome(): Observable<Income[]> {
        return this.db.list('/income');
    }

    createForm(){
        return this.fb.group({
            invoice: ['', Validators.required],
            date: ['', Validators.required],
        });

    }

    /// Creates an Ad, then returns as an object
    createIncome() {
        // This sets the list back to its original order
        this.allIncome$.reverse();

        // Then we add an item to the list, before it gets reversed again in the html
        let key = this.db.list('/income').push(this.incomeForm.value).key;
        
        //console.log(key);
        //console.log(this.db.object('/income/' + key));
        //return this.db.object('/income/' + key);
    }

}
