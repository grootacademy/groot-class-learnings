package com.laventa.ecommerce.service;

import com.laventa.ecommerce.domain.Company;
import com.laventa.ecommerce.repository.CompanyRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Company}.
 */
@Service
@Transactional
public class CompanyService {

    private final Logger log = LoggerFactory.getLogger(CompanyService.class);

    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    /**
     * Save a company.
     *
     * @param company the entity to save.
     * @return the persisted entity.
     */
    public Company save(Company company) {
        log.debug("Request to save Company : {}", company);
        return companyRepository.save(company);
    }

    /**
     * Update a company.
     *
     * @param company the entity to save.
     * @return the persisted entity.
     */
    public Company update(Company company) {
        log.debug("Request to update Company : {}", company);
        return companyRepository.save(company);
    }

    /**
     * Partially update a company.
     *
     * @param company the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Company> partialUpdate(Company company) {
        log.debug("Request to partially update Company : {}", company);

        return companyRepository
            .findById(company.getId())
            .map(existingCompany -> {
                if (company.getName() != null) {
                    existingCompany.setName(company.getName());
                }
                if (company.getEmail() != null) {
                    existingCompany.setEmail(company.getEmail());
                }
                if (company.getAddress() != null) {
                    existingCompany.setAddress(company.getAddress());
                }
                if (company.getLogo() != null) {
                    existingCompany.setLogo(company.getLogo());
                }
                if (company.getLogoContentType() != null) {
                    existingCompany.setLogoContentType(company.getLogoContentType());
                }
                if (company.getStatus() != null) {
                    existingCompany.setStatus(company.getStatus());
                }
                if (company.getCreatedOn() != null) {
                    existingCompany.setCreatedOn(company.getCreatedOn());
                }
                if (company.getUpdatedOn() != null) {
                    existingCompany.setUpdatedOn(company.getUpdatedOn());
                }

                return existingCompany;
            })
            .map(companyRepository::save);
    }

    /**
     * Get all the companies.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Company> findAll() {
        log.debug("Request to get all Companies");
        return companyRepository.findAll();
    }

    /**
     *  Get all the companies where Customer is {@code null}.
     *  @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Company> findAllWhereCustomerIsNull() {
        log.debug("Request to get all companies where Customer is null");
        return StreamSupport
            .stream(companyRepository.findAll().spliterator(), false)
            .filter(company -> company.getCustomer() == null)
            .collect(Collectors.toList());
    }

    /**
     * Get one company by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Company> findOne(Long id) {
        log.debug("Request to get Company : {}", id);
        return companyRepository.findById(id);
    }

    /**
     * Delete the company by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Company : {}", id);
        companyRepository.deleteById(id);
    }
}
