import { Routes, RouterModule, CanActivate, Router } from '@angular/router';

import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
// import { CanDeactivateGuard } from './can-deactivate-guard.service';

//页面
import { IndexAppComponent } from './page/index/index.component';

import { DrgusComponentApp } from './page/Drugs/Drugs.component';
//警示信息设置
import { WarningInformationComponent } from './page/ warning-information/ warning-information.component';
//引入计算公式设置Component
import { FormulaPreserveComponent } from './page/formula/formula-preserve.component';
//版本生效设置
import {VersionEffectComponent} from './page/Version-effect/Version-effect.component';
//医保规则管理
import {HealthManagementRules} from './page/Health-management-rules/Health-management-rules.component';
//规则校验
import {RulesCheckoutComponent} from './page/Health-management-rules/Rules-checkout.component';
//版本管理
import {VersionManagementComponent} from './page/Health-management-rules/version-management.component';
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
},{
	path: 'warning-information',
    component:WarningInformationComponent
},{
	path: 'formula-preserve',
    component:FormulaPreserveComponent
},{
	path: 'Version-effect',
    component:VersionEffectComponent
},{
	path:'Health-management-rules',
	component:HealthManagementRules
},{
	path:'page/Health-management-rules/Health-management-rules/version-management',
	component:VersionManagementComponent
},{
	path:'page/Health-management-rules/Health-management-rules/Rules-checkout',
    component:RulesCheckoutComponent
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