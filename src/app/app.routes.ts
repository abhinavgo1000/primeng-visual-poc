import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home', 
        loadComponent: () =>
            import('./components/pages/home-page/home-page.component')
                .then(m => m.HomePageComponent),
        providers: []
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'data-entry', 
        loadComponent: () =>
            import('./components/pages/data-entry-page/data-entry-page.component')
                .then(m => m.DataEntryPageComponent),
        providers: []
    }
];
