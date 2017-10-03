// angular
import { Component, Inject }     from '@angular/core';
import { MD_DIALOG_DATA }        from '@angular/material';

/**
 * Injecting data when opening a dialog
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
    constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}
