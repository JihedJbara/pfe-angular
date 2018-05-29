import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RhComponent} from './rh.component';
import {ExpenseComponent} from './expense/expense.component';

const routes: Routes = [
  {
    path: '',
    component: RhComponent,
    children: [
      {
        path: 'expense',
        component: ExpenseComponent,
      },
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class RhRoutingModule {
}
