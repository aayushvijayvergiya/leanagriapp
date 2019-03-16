import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { AddPostComponent } from './component/add-post/add-post.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'postDetail/:id', component: PostDetailComponent },
    { path: 'addPost', component: AddPostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }