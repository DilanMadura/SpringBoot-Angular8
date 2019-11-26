import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/customer";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "src/app/shared/customer.service";
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-customer-edit",
  templateUrl: "./customer-edit.component.html",
  styleUrls: ["./customer-edit.component.css"]
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  id: number;
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.customerService.getEmployee(this.id).subscribe(data => {
      this.customer = data;
      console.log(this.id);
    });
  }

  goToList() {
    this.router.navigate(["/list"]);
  }

  cancel() {
    this.goToList();
  }

  onSubmit() {
    this.customerService.putEmployee(this.id, this.customer).subscribe(res => {
      this.toastrService.warning("Customer Update SuccessFully !");
      this.goToList();
    });
  }
}
