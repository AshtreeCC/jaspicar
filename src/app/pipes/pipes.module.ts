// angular
import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

// app
import { APP_PIPES }                    from './index';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        APP_PIPES
    ],
    declarations: [
        APP_PIPES,
    ]
})
export class PipesModule { }
