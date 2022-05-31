import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingComponent } from './editing/editing.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: InfoComponent},
  { path: 'editing', component: EditingComponent},
  { path: 'auth', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
