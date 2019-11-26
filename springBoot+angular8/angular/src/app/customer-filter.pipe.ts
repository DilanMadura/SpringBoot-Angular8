import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "./customer";

@Pipe({
  name: "customerFilter"
})
export class CustomerFilterPipe implements PipeTransform {
  transform(customers: Customer[], searchText: string): any {
    if (!customers || !searchText) {
      return customers;
    }
    return customers.filter(
      customers =>
        customers.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }
}
