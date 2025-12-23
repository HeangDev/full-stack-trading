import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPage } from './pages/user-list-page/user-list-page';
import { UserCreatePage } from './pages/user-create-page/user-create-page';
import { UserDetailPage } from './pages/user-detail-page/user-detail-page';
import { UserEditPage } from './pages/user-edit-page/user-edit-page';

const routes: Routes = [
    { path: 'list', component: UserListPage },
    { path: 'create', component: UserCreatePage },
    { path: ':id', component: UserDetailPage },
    { path: ':id/edit', component: UserEditPage },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
