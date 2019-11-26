import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/shared/customer.service";
import { Customer } from "src/app/customer";
import { Router } from "@angular/router";
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  searchText: string;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService.getEmployees().subscribe(data => {
      this.customers = data;
    });
  }

  goToDetails(id: number) {
    this.router.navigate(["/list", id]);
  }
}
