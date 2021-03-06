import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/newaccount/newaccount.component';
import { ChangePasswordComponent } from './components/changepassword/changepassword.component';
import { EqualValidator } from './components/changepassword/changepassword.equal-validator.directive'; 

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        LoginComponent,
        NewAccountComponent,
        ChangePasswordComponent,
        HomeComponent,
        EqualValidator
    ],
    imports: [
        UniversalModule,
        FormsModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'login', component: LoginComponent },
            { path: 'newaccount', component: NewAccountComponent },
            { path: 'changepassword', component: ChangePasswordComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
