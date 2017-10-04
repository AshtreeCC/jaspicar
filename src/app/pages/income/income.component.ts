// angular
import { Component, OnInit }                     from '@angular/core';
//import { MdInput, MdDatepicker }     from '@angular/material';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { DataSource }                            from '@angular/cdk/collections';
import { MdDialog }                              from '@angular/material';

// libraries
import { AngularFireDatabase }                   from 'angularfire2/database';
import { AngularFireOfflineDatabase }            from 'angularfire2-offline';
//import { FirebaseObjectObservable }              from 'angularfire2/database';
import { Observable }                            from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

// app
import { AuthService }                           from '../../auth/auth.service';
import { Income }                                from '../../models/income';
import { ReversePipe }                           from '../../pipes/reverse/reverse.pipe';
import { CategoriesComponent as IncomeDialog }   from '../../layouts/categories/categories.component';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

    //allIncome$: Income[];
    incomeForm: FormGroup;
    incomeData: string;
    incomeCategories: string;

    //busySorting: boolean = false;
    //IncomeDialog: CategoriesComponent;
    categories = [];
    simpleCats = [];

    displayedColumns = [
        "invoice", 
        "date", 
        "category", 
        "description", 
        "vattable", 
        "amount", 
        "vat", 
        "net"
    ];
    dataSource: IncomeDataSource;

    constructor(
        private fb: FormBuilder, 
        private afo: AngularFireOfflineDatabase, 
        private authService: AuthService,
        public dialog: MdDialog 
    ) {
        //this.income = this.createIncome();
        this.incomeForm = this.createForm();
        this.incomeData = "/"+this.authService.id+"/income/data";
        this.incomeCategories = "/"+this.authService.id+"/income/categories";
    }

    ngOnInit() {
        // Find all the income figures
        // @TODO Filter these on active year
        this.findAllIncome().subscribe(income => {
            //this.allIncome$ = income;
            for(let i = 0; i < income.length; i++) {
                let item = income[i];
                //let amount = Number(income[i].amount);
                income[i].auto_net = (item.vat == "Incl.") ? (item.amount/114*100).toFixed(2) : item.amount;
                income[i].auto_vat = (item.amount - item.auto_net).toFixed(2);
            }
            this.dataSource = new IncomeDataSource(income.reverse());
            //console.log(income);
        });

        this.findAllCategories().subscribe(cat => {
            this.categories = cat;
            cat.map(val => {
                this.simpleCats[val.$key] = val.title;
            });
            //console.log(this.simpleCats);
        })

    }

    findAllCategories(): Observable<any[]> {
        return this.afo.list(this.incomeCategories, {
            query: {
                orderByChild: 'title'
            }
        });
    }

    findAllIncome(): Observable<Income[]> {
        return this.afo.list(this.incomeData);
    }

    createForm(){
        return this.fb.group({
            invoice     : ['', Validators.required],
            date        : ['', Validators.required],
            category_id : ['', Validators.required],
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
        let key = this.afo.list(this.incomeData).push(formData).key;

        //console.log(key);
        //console.log(this.db.object('/income/' + key));
        //return this.db.object('/income/' + key);
        //this.busySorting = false;
    }

    openDialog() {
    this.dialog.open(IncomeDialog, {
        "data": { 
            "location" : this.incomeCategories, 
            "categories" : this.categories
        }
    });
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
