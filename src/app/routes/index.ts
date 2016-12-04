import { Routes } from '@angular/router';

import { Cities } from '../pages/cities';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/cities',
        pathMatch: 'full',
    },
    {
        path: 'cities',
        component: Cities
    }
];

export default routes;
