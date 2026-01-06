import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    private isExpandedSubject = new BehaviorSubject<boolean>(true);
    private isMobileOpenSubject = new BehaviorSubject<boolean>(false);

    isExpanded$ = this.isExpandedSubject.asObservable();
    isMobileOpen$ = this.isMobileOpenSubject.asObservable();

    setExpanded(val: boolean) {
        this.isExpandedSubject.next(val);
    } 

    
}
