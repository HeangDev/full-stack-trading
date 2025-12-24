import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service.js';

@Component({
    selector: 'app-sidebar',
    imports: [],
    templateUrl: './app-sidebar.html',
    styleUrl: './app-sidebar.css',
})
export class AppSidebar {



    openSubMenu: string | null | number = null;
    subMenuHeight: { [key: string]: number } = {};

    readonly isExpanded$;
    readonly isMobileOpen$;

    constructor(
        public sidebarService: SidebarService,
        private router: Router
    ) {
        this.isExpanded$ = this.sidebarService.isExpanded$;
        this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    }

}

