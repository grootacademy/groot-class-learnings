package com.laventa.ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 * A Cart.
 */
@Entity
@Table(name = "cart")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Cart implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @OneToMany(mappedBy = "cart")
    @JsonIgnoreProperties(value = { "offer", "reviews", "order", "company", "subcategory", "cart" }, allowSetters = true)
    private Set<Product> products = new HashSet<>();

    @JsonIgnoreProperties(value = { "company", "cart", "orders" }, allowSetters = true)
    @OneToOne(mappedBy = "cart")
    private Customer customer;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Cart id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Product> getProducts() {
        return this.products;
    }

    public void setProducts(Set<Product> products) {
        if (this.products != null) {
            this.products.forEach(i -> i.setCart(null));
        }
        if (products != null) {
            products.forEach(i -> i.setCart(this));
        }
        this.products = products;
    }

    public Cart products(Set<Product> products) {
        this.setProducts(products);
        return this;
    }

    public Cart addProduct(Product product) {
        this.products.add(product);
        product.setCart(this);
        return this;
    }

    public Cart removeProduct(Product product) {
        this.products.remove(product);
        product.setCart(null);
        return this;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    public void setCustomer(Customer customer) {
        if (this.customer != null) {
            this.customer.setCart(null);
        }
        if (customer != null) {
            customer.setCart(this);
        }
        this.customer = customer;
    }

    public Cart customer(Customer customer) {
        this.setCustomer(customer);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cart)) {
            return false;
        }
        return id != null && id.equals(((Cart) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Cart{" +
            "id=" + getId() +
            "}";
    }
}
