// angular
import { Component, OnInit, Input } from '@angular/core';

// models
import { Income }                   from "../../models/income";

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

    @Input()
    item: Income;
    
    constructor() { }

    ngOnInit() {
    }

}
