import { Routes } from '@angular/router';
import { AppLayout } from './shared/layout/app-layout/app-layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: "",
        component: AppLayout,
        children: [
            {
                path: "dashboard",
                component: Dashboard
            },
            {
                path: "users",
                loadChildren: () => 
                    import("./features/users/users.module")
                        .then(m => m.UsersModule)
            }
        ]
    }
];
