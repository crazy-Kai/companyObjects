import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { provideInterceptorService } from 'ng2-interceptors';
import { ServerInterceptor } from './server.interceptor';
// import { TreeModule } from 'angular2-tree-component';

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

@NgModule({
  //模版
  imports: [
    BrowserModule,
    FormsModule,
    DialogModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()

  ],
  //组建
  declarations: [
    AppComponent,
    HomeComponent,
    IndexAppComponent,
    DrgusComponentApp ,// 药品目录
    SelectComponent,//下拉框组件
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