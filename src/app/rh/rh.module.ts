import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RhRoutingModule} from './rh-routing.module';
import {FormsModule} from "@angular/forms";
import {ExpenseComponent} from './expense/expense.component';
import {RhComponent} from './rh.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        RhRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        ExpenseComponent,
        RhComponent
    ]
})
export class RhModule {
}