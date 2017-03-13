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

//dialog 
import { DialogModule } from './page/common/ug-dialog/dialog';
//yinru yemian 
import { HomeComponent } from './home.component';

//页面
import { IndexAppComponent } from './page/index/index.component';

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
    IndexAppComponent
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