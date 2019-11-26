import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/shared/customer.service";
import { Customer } from "src/app/customer";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.css"]
})
export class CustomerAddComponent implements OnInit {
  customer: Customer;
  //form: NgForm;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.customer = new Customer();
  }

  ngOnInit() {}

  onSubmit() {
    this.customerService.postEmployee(this.customer).subscribe(res => {
      this.toastrService.success("Customer Created SuccessFully !");
      this.goToList();
    });
  }

  reset(form: NgForm) {
    form.resetForm();
  }

  goToList() {
    this.router.navigate(["/list"]);
  }
}
