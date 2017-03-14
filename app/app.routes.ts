import { Routes, RouterModule, CanActivate, Router } from '@angular/router';

import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
// import { CanDeactivateGuard } from './can-deactivate-guard.service';

//页面
import { IndexAppComponent } from './page/index/index.component';

import { DrgusComponentApp } from './page/Drugs/Drugs.component';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     // constructor() { }

//     canActivate() {

        
//         return false;
//     }
// }

// //引入页面Component
import { HomeComponent } from './home.component';


const routes: Routes = [{
    path: '',
    // redirectTo: '/home',
    component: HomeComponent,
    pathMatch: 'full'
}, {
    path: 'home',
    component:IndexAppComponent

},{
    path :'drugs',
    component: DrgusComponentApp,
}

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }