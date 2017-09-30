// angular
import { Component, OnInit }                  from '@angular/core';
import { MdInputModule }                      from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// libraries
import { AngularFireDatabase }                from "angularfire2/database";
import { FirebaseObjectObservable }           from "angularfire2/database";

// models
import { Income }                             from '../../models/income';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

    incomeForm: FormGroup;

    constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
        //this.income = this.createIncome();
        this.incomeForm = this.createForm();
    }

    ngOnInit() {
    }

    createForm(){
        return this.fb.group({
            invoice: ['', Validators.required],
        });

    }

    /// Creates an Ad, then returns as an object
    createIncome() {
        let key = this.db.list('/income').push(this.incomeForm.value).key;
        console.log(key);
        //console.log(this.db.object('/income/' + key));
        //return this.db.object('/income/' + key);
    }

}
