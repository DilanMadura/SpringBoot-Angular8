import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/customer";
import { CustomerService } from "src/app/shared/customer.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    let cusId = this.route.snapshot.params["id"];

    this.customerService
      .getEmployee(cusId)
      .subscribe(data => (this.customer = data));
  }

  goToList() {
    this.router.navigate(["/list"]);
  }

  onDelete(id: number) {
    this.customerService.deleteEmployee(id).subscribe(res => {
      this.toastrService.error("Customer Deleted SuccessFully !");
      this.goToList();
    });
  }

  employeeById(cid: number) {
    this.router.navigate(["/edit", cid]);
  }
}
