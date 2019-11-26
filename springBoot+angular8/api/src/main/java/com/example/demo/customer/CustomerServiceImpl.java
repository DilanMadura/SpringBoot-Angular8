package com.example.demo.customer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findCustomer(Integer id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public void addCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void editCustomer(Integer id, Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
    }

}
