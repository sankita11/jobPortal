import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostFormComponent } from './post-form/post-form.component';
import { PostListsComponent } from './post-lists/post-lists.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', component: PostListsComponent},
  { path: 'list/:role', component: PostListsComponent},
  { path: 'createPost', component: PostFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
