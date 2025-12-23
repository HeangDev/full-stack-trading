import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms"

import { UsersRoutingModule } from "./users-routing-module";

import { UserListPage } from "./pages/user-list-page/user-list-page";
import { UserCreatePage } from './pages/user-create-page/user-create-page';
import { UserDetailPage } from './pages/user-detail-page/user-detail-page';
import { UserEditPage } from './pages/user-edit-page/user-edit-page';

@NgModule({
    declarations: [],
    imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule]
})
export class UsersModule {}