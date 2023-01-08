package com.laventa.ecommerce.service;

import com.laventa.ecommerce.domain.Offer;
import com.laventa.ecommerce.repository.OfferRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Offer}.
 */
@Service
@Transactional
public class OfferService {

    private final Logger log = LoggerFactory.getLogger(OfferService.class);

    private final OfferRepository offerRepository;

    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    /**
     * Save a offer.
     *
     * @param offer the entity to save.
     * @return the persisted entity.
     */
    public Offer save(Offer offer) {
        log.debug("Request to save Offer : {}", offer);
        return offerRepository.save(offer);
    }

    /**
     * Update a offer.
     *
     * @param offer the entity to save.
     * @return the persisted entity.
     */
    public Offer update(Offer offer) {
        log.debug("Request to update Offer : {}", offer);
        return offerRepository.save(offer);
    }

    /**
     * Partially update a offer.
     *
     * @param offer the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Offer> partialUpdate(Offer offer) {
        log.debug("Request to partially update Offer : {}", offer);

        return offerRepository
            .findById(offer.getId())
            .map(existingOffer -> {
                if (offer.getCreatedOn() != null) {
                    existingOffer.setCreatedOn(offer.getCreatedOn());
                }
                if (offer.getUpdatedOn() != null) {
                    existingOffer.setUpdatedOn(offer.getUpdatedOn());
                }
                if (offer.getStartingDate() != null) {
                    existingOffer.setStartingDate(offer.getStartingDate());
                }
                if (offer.getClosingDate() != null) {
                    existingOffer.setClosingDate(offer.getClosingDate());
                }
                if (offer.getPercentage() != null) {
                    existingOffer.setPercentage(offer.getPercentage());
                }
                if (offer.getStatus() != null) {
                    existingOffer.setStatus(offer.getStatus());
                }

                return existingOffer;
            })
            .map(offerRepository::save);
    }

    /**
     * Get all the offers.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Offer> findAll() {
        log.debug("Request to get all Offers");
        return offerRepository.findAll();
    }

    /**
     *  Get all the offers where Product is {@code null}.
     *  @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Offer> findAllWhereProductIsNull() {
        log.debug("Request to get all offers where Product is null");
        return StreamSupport
            .stream(offerRepository.findAll().spliterator(), false)
            .filter(offer -> offer.getProduct() == null)
            .collect(Collectors.toList());
    }

    /**
     * Get one offer by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Offer> findOne(Long id) {
        log.debug("Request to get Offer : {}", id);
        return offerRepository.findById(id);
    }

    /**
     * Delete the offer by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Offer : {}", id);
        offerRepository.deleteById(id);
    }
}
