package com.laventa.ecommerce.service;

import com.laventa.ecommerce.domain.Subcategory;
import com.laventa.ecommerce.repository.SubcategoryRepository;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Subcategory}.
 */
@Service
@Transactional
public class SubcategoryService {

    private final Logger log = LoggerFactory.getLogger(SubcategoryService.class);

    private final SubcategoryRepository subcategoryRepository;

    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    /**
     * Save a subcategory.
     *
     * @param subcategory the entity to save.
     * @return the persisted entity.
     */
    public Subcategory save(Subcategory subcategory) {
        log.debug("Request to save Subcategory : {}", subcategory);
        return subcategoryRepository.save(subcategory);
    }

    /**
     * Update a subcategory.
     *
     * @param subcategory the entity to save.
     * @return the persisted entity.
     */
    public Subcategory update(Subcategory subcategory) {
        log.debug("Request to update Subcategory : {}", subcategory);
        return subcategoryRepository.save(subcategory);
    }

    /**
     * Partially update a subcategory.
     *
     * @param subcategory the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Subcategory> partialUpdate(Subcategory subcategory) {
        log.debug("Request to partially update Subcategory : {}", subcategory);

        return subcategoryRepository
            .findById(subcategory.getId())
            .map(existingSubcategory -> {
                if (subcategory.getName() != null) {
                    existingSubcategory.setName(subcategory.getName());
                }
                if (subcategory.getStatus() != null) {
                    existingSubcategory.setStatus(subcategory.getStatus());
                }
                if (subcategory.getImage() != null) {
                    existingSubcategory.setImage(subcategory.getImage());
                }
                if (subcategory.getImageContentType() != null) {
                    existingSubcategory.setImageContentType(subcategory.getImageContentType());
                }

                return existingSubcategory;
            })
            .map(subcategoryRepository::save);
    }

    /**
     * Get all the subcategories.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Subcategory> findAll() {
        log.debug("Request to get all Subcategories");
        return subcategoryRepository.findAll();
    }

    /**
     * Get one subcategory by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Subcategory> findOne(Long id) {
        log.debug("Request to get Subcategory : {}", id);
        return subcategoryRepository.findById(id);
    }

    /**
     * Delete the subcategory by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Subcategory : {}", id);
        subcategoryRepository.deleteById(id);
    }
}
