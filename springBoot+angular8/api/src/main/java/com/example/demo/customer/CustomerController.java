package com.example.demo.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("test3/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/customers")
    public List<Customer> findAllCustomers(){
        return customerService. findAllCustomers();
    }

    @GetMapping("/customers/{id}")
    public Customer findCustomer(@PathVariable Integer id){
        return customerService.findCustomer(id);
    }

    @PostMapping("/customers")
    public void addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
    }

    @PutMapping("/customers/{id}")
    public void editCustomer(@PathVariable Integer id,@RequestBody Customer customer){
        customerService.editCustomer(id,customer);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable Integer id){
        customerService.deleteCustomer(id);
    }
}
