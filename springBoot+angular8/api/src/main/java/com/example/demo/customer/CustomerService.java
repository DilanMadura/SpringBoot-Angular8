package com.example.demo.customer;

import java.util.List;

public interface CustomerService {
    List<Customer> findAllCustomers();

    Customer findCustomer(Integer id);

    void addCustomer(Customer customer);

    void editCustomer(Integer id, Customer customer);

    void deleteCustomer(Integer id);
}
