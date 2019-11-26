import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersListComponent } from "./component/customers-list/customers-list.component";
import { CustomerAddComponent } from "./component/customer-add/customer-add.component";
import { CustomerService } from "./shared/customer.service";
import { CustomerDetailsComponent } from "./component/customer-details/customer-details.component";
import { CustomerEditComponent } from "./component/customer-edit/customer-edit.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { ToastrModule } from "ngx-toastr";
import { CustomerFilterPipe } from './customer-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerAddComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    PageNotFoundComponent,
    CustomerFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
