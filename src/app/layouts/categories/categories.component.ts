// angular
import { Component, Inject }          from '@angular/core';
import { MdInput }                    from '@angular/material';
import { MD_DIALOG_DATA }             from '@angular/material';

// libraries
import { AngularFireOfflineDatabase } from 'angularfire2-offline';

/**
 * Injecting data when opening a dialog
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

    category: string;

    constructor(@Inject(MD_DIALOG_DATA) public data: any, private afo:AngularFireOfflineDatabase) {}

    createCategory() { 
        this.afo.list(this.data.location).push({"title": this.category});
        this.category = "";
    }

    updateCategory(index) {
        let key = this.data.categories[index].$key;
        let val = this.data.categories[index].title;
        this.afo.list(this.data.location).update(key, {"title": val});
    }
}
