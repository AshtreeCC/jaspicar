// angular
import { Component, OnInit }                     from '@angular/core';
import { MatInputModule, MatDatepickerModule }   from '@angular/material';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';

// libraries
import { AngularFireDatabase }                   from 'angularfire2/database';
import { AngularFireOfflineDatabase }            from 'angularfire2-offline';
//import { FirebaseObjectObservable }              from 'angularfire2/database';
import { Observable }                            from 'rxjs/Observable';
import { DataSource }                            from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

// models
import { Income }                                from '../../models/income';

// pipes
import { ReversePipe }                           from '../../pipes/reverse/reverse.pipe';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

    //allIncome$: Income[];
    incomeForm: FormGroup;

    //busySorting: boolean = false;
    categories = ["Rent", "Cell Towers", "Sales"];

    displayedColumns = ["invoice", "date", "category", "description", "vat", "amount"];
    dataSource: IncomeDataSource;

    constructor(private fb: FormBuilder, private afo: AngularFireOfflineDatabase) {
        //this.income = this.createIncome();
        this.incomeForm = this.createForm();
    }

    ngOnInit() {
        // Find all the income figures
        // @TODO Filter these on active year
        this.findAllIncome()
            .subscribe(income => {
                //this.allIncome$ = income;
                this.dataSource = new IncomeDataSource(income.reverse());
                //console.log(income);
            });
    }

    findAllIncome(): Observable<Income[]> {
        return this.afo.list('/income');
    }

    createForm(){
        return this.fb.group({
            invoice     : ['', Validators.required],
            date        : ['', Validators.required],
            category    : ['', Validators.required],
            description : [''],
            vat         : ['', Validators.required],
            amount      : ['', [Validators.required, Validators.pattern(/^\d+(\.\d)?\d?$/)]]
        });

    }

    /// Creates an Ad, then returns as an object
    createIncome() {
        // This sets the list back to its original order
        //this.busySorting = true;
        //this.allIncome$.reverse();
        //console.log(this.dataSource);
        //this.dataSource = new IncomeDataSource(this.dataSource.map(income => <Income[]>income), true);
        this.dataSource = new IncomeDataSource(this.dataSource.data.reverse());
        //this.dataSource = this.dataSource.map(array => array.reverse());

        // Convert date object to string for Firebase
        //this.incomeForm.patchValue({'date': new Date(this.incomeForm.get('date')).getTime()});
        let formData = this.incomeForm.value;
        formData.date = formData.date.getTime();

        // Add decimals to the amount
        formData.amount = Number(formData.amount).toFixed(2);
        console.log(formData);

        // Then we add an item to the list, before it gets reversed again in the html
        let key = this.afo.list('/income').push(formData).key;

        //console.log(key);
        //console.log(this.db.object('/income/' + key));
        //return this.db.object('/income/' + key);
        //this.busySorting = false;
    }

}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class IncomeDataSource extends DataSource<any> {
    
    constructor(public data: Income[]) {
        super();
    }
    
    /** 
     * Connect function called by the table 
     * to retrieve one stream containing the data to render. 
     */
    connect(): Observable<Income[]> {
        return Observable.of(this.data);
    }

    disconnect() {}

    // @TODO Add table sorting
    getSortedData(): Income[] {
        return this.data;
    }
}
