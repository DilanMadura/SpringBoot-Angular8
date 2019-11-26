import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersListComponent } from "./component/customers-list/customers-list.component";
import { CustomerAddComponent } from "./component/customer-add/customer-add.component";
import { CustomerDetailsComponent } from "./component/customer-details/customer-details.component";
import { CustomerEditComponent } from "./component/customer-edit/customer-edit.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: CustomersListComponent },
  { path: "add", component: CustomerAddComponent },
  { path: "edit/:id", component: CustomerEditComponent },
  { path: "list/:id", component: CustomerDetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
