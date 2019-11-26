import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../customer";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  RootUrl: string = "http://localhost:8080/test3/api/customers";

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.RootUrl);
  }

  public getEmployee(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.RootUrl + "/" + id);
  }

  public postEmployee(customer: Customer) {
    return this.http.post(this.RootUrl, customer);
  }

  public deleteEmployee(id: number) {
    return this.http.delete(this.RootUrl + "/" + id);
  }

  public putEmployee(id: number, customer: Customer) {
    return this.http.put(this.RootUrl + "/" + id, customer);
  }
}
