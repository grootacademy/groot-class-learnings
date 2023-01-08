package com.laventa.ecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Offer.
 */
@Entity
@Table(name = "offer")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Offer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "created_on", nullable = false)
    private LocalDate createdOn;

    @NotNull
    @Column(name = "updated_on", nullable = false)
    private LocalDate updatedOn;

    @NotNull
    @Column(name = "starting_date", nullable = false)
    private LocalDate startingDate;

    @NotNull
    @Column(name = "closing_date", nullable = false)
    private LocalDate closingDate;

    @NotNull
    @Column(name = "percentage", nullable = false)
    private String percentage;

    @NotNull
    @Column(name = "status", nullable = false)
    private String status;

    @JsonIgnoreProperties(value = { "offer", "reviews", "order", "company", "subcategory", "cart" }, allowSetters = true)
    @OneToOne(mappedBy = "offer")
    private Product product;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Offer id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getCreatedOn() {
        return this.createdOn;
    }

    public Offer createdOn(LocalDate createdOn) {
        this.setCreatedOn(createdOn);
        return this;
    }

    public void setCreatedOn(LocalDate createdOn) {
        this.createdOn = createdOn;
    }

    public LocalDate getUpdatedOn() {
        return this.updatedOn;
    }

    public Offer updatedOn(LocalDate updatedOn) {
        this.setUpdatedOn(updatedOn);
        return this;
    }

    public void setUpdatedOn(LocalDate updatedOn) {
        this.updatedOn = updatedOn;
    }

    public LocalDate getStartingDate() {
        return this.startingDate;
    }

    public Offer startingDate(LocalDate startingDate) {
        this.setStartingDate(startingDate);
        return this;
    }

    public void setStartingDate(LocalDate startingDate) {
        this.startingDate = startingDate;
    }

    public LocalDate getClosingDate() {
        return this.closingDate;
    }

    public Offer closingDate(LocalDate closingDate) {
        this.setClosingDate(closingDate);
        return this;
    }

    public void setClosingDate(LocalDate closingDate) {
        this.closingDate = closingDate;
    }

    public String getPercentage() {
        return this.percentage;
    }

    public Offer percentage(String percentage) {
        this.setPercentage(percentage);
        return this;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }

    public String getStatus() {
        return this.status;
    }

    public Offer status(String status) {
        this.setStatus(status);
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Product getProduct() {
        return this.product;
    }

    public void setProduct(Product product) {
        if (this.product != null) {
            this.product.setOffer(null);
        }
        if (product != null) {
            product.setOffer(this);
        }
        this.product = product;
    }

    public Offer product(Product product) {
        this.setProduct(product);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Offer)) {
            return false;
        }
        return id != null && id.equals(((Offer) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Offer{" +
            "id=" + getId() +
            ", createdOn='" + getCreatedOn() + "'" +
            ", updatedOn='" + getUpdatedOn() + "'" +
            ", startingDate='" + getStartingDate() + "'" +
            ", closingDate='" + getClosingDate() + "'" +
            ", percentage='" + getPercentage() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
