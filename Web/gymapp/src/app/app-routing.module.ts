import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymMembersListComponent } from './gym-members-list/gym-members-list.component';

const routes: Routes = [
  {
    path: '',
    component: GymMembersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
