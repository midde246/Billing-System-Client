//Modules Dependencies...
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Routing Dependency.....
import { routing } from './app.routing';

//components Dependencies.......
import { AppComponent }  from './app.component';
import { SignupComponent } from './signup/signup.component'
import { SigninComponent } from './signin/signin.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PbComponent } from './PB/pb.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminComponent } from './admin/admin.component';

//Services Dependency....
import { ApiService } from './services/api.service'

//Guard Dependencies......
import { AuthGaurd } from './auth.guard';

//Pipe Depedencies....
import { AddPipe } from './pipes/add.piping'
import { SubPipe } from './pipes/sub.piping';
import { MultPipe } from './pipes/mult.piping';
import { DivPipe } from './pipes/div.piping';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  routing,
                ],
  declarations: [ AppComponent,
                  SignupComponent,
                  SigninComponent,
                  DashboardComponent,
                  PbComponent,
                  InvoiceComponent,
                  AdminComponent,
                  AddPipe,
                  SubPipe,
                  MultPipe,
                  DivPipe
                 ],                 
  providers:   [ ApiService,
                 AuthGaurd
                ],               
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
