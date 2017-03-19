import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { provideInterceptorService } from 'ng2-interceptors';
import { ServerInterceptor } from './server.interceptor';
//angular2 module
import { TreeModule } from 'angular2-tree-component';

import { AppRoutingModule } from '../app/app.routes';




import { AppComponent }  from './app.component';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

//自定义组件
import { DialogModule } from './page/common/ug-dialog/dialog';
import { SelectComponent } from './page/common/select-comp/select.component';
//yinru yemian 
import { HomeComponent } from './home.component';

//页面
import { IndexAppComponent } from './page/index/index.component';
import { DrgusComponentApp } from './page/Drugs/Drugs.component';
//警示信息设置
import { WarningInformationComponent } from './page/warning-information/warning-information.component';
//计算公式设置
import { FormulaPreserveComponent } from './page/formula/formula-preserve.component';
//版本生效设置
import {VersionEffectComponent} from './page/Version-effect/Version-effect.component';
//医保规则管理
import {HealthManagementRules} from './page/Health-management-rules/Health-management-rules.component';
//规则校验
import {RulesCheckoutComponent} from './page/Health-management-rules/Rules-checkout.component';
//版本管理
import {VersionManagementComponent} from './page/Health-management-rules/version-management.component';

@NgModule({
  //模版
  imports: [
    BrowserModule,
    FormsModule,
    DialogModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    //tree
    TreeModule 

  ],
  //组建
  declarations: [
    AppComponent,
    HomeComponent,
    IndexAppComponent,
    DrgusComponentApp ,// 药品目录
    SelectComponent,//下拉框组件
    WarningInformationComponent, //警示信息设置
    FormulaPreserveComponent,   //计算公式设置
    VersionEffectComponent,  //版本生效设置
    HealthManagementRules,   //医保规则管理
    RulesCheckoutComponent,   //规则校验
    VersionManagementComponent   //版本管理
],
//依赖注入
 providers: [
    ServerInterceptor,
    provideInterceptorService([
      ServerInterceptor
    ])
  ],
  // entryComponents:[AutocompleteWindowComponent,ConfirmComponent],
  bootstrap: [ AppComponent  ]
})
export class AppModule { }