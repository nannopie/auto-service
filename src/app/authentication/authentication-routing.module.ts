import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { Page404Component } from "./page404/page404.component";
import { Page500Component } from "./page500/page500.component";
import { MobileComponent } from "./mobile/mobile.component";
import { OtpComponent } from "./otp/otp.component";
import { BankComponent } from "./bank/bank.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "mobile",
    component: MobileComponent,
  },
  {
    path: "otp",
    component: OtpComponent,
  },
  {
    path: "bank",
    component: BankComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "page404",
    component: Page404Component,
  },
  {
    path: "page500",
    component: Page500Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
