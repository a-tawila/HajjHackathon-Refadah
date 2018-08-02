import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
  path: '',
  redirectTo: 'add-meals',
  pathMatch: 'full'
},
{
  path: 'add-meals',
  loadChildren: './meals-form/meals-form.module#MealsFormModule'
},
{
  path: 'AllMeals',
  loadChildren: './all-meals/all-meals.module#AllMealsModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
