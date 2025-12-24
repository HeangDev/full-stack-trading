import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeader } from "../app-header/app-header";
import { AppSidebar } from "../app-sidebar/app-sidebar";

@Component({
    selector: 'app-layout',
    imports: [
        CommonModule,
        RouterModule,
        AppHeader,
        AppSidebar
    ],
    templateUrl: './app-layout.html',
    styleUrl: './app-layout.css',
})
export class AppLayout {
    
}
