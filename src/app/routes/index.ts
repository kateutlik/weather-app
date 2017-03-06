import { Routes } from '@angular/router';

import { Cities } from '../pages/cities';
import { MapPage } from '../pages/map-page';
import { UserWeatherPage } from '../pages/user-weather-page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/cities',
        pathMatch: 'full',
    },
    {
        path: 'cities',
        component: Cities
    },
    {
        path: 'map',
        component: MapPage
    },
    {
        path: 'user-weather',
        component: UserWeatherPage
    }
];

export default routes;
