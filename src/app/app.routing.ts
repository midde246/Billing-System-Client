import { RouterModule, Routes } from '@angular/router'
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PbComponent } from './PB/pb.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AuthGaurd } from './auth.guard';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
     { path: 'signup', component: SignupComponent},
     { path: 'signin', component: SigninComponent},
     { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGaurd]},
     { path: 'pb', component: PbComponent },
     { path: 'invoice', component: InvoiceComponent },
     { path: 'admin', component: AdminComponent }
]

export const routing  =RouterModule.forRoot(routes)