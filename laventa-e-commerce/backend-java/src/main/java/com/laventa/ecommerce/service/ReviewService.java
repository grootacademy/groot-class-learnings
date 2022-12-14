package com.laventa.ecommerce.service;

import com.laventa.ecommerce.domain.Review;
import com.laventa.ecommerce.repository.ReviewRepository;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Review}.
 */
@Service
@Transactional
public class ReviewService {

    private final Logger log = LoggerFactory.getLogger(ReviewService.class);

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    /**
     * Save a review.
     *
     * @param review the entity to save.
     * @return the persisted entity.
     */
    public Review save(Review review) {
        log.debug("Request to save Review : {}", review);
        return reviewRepository.save(review);
    }

    /**
     * Update a review.
     *
     * @param review the entity to save.
     * @return the persisted entity.
     */
    public Review update(Review review) {
        log.debug("Request to update Review : {}", review);
        return reviewRepository.save(review);
    }

    /**
     * Partially update a review.
     *
     * @param review the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Review> partialUpdate(Review review) {
        log.debug("Request to partially update Review : {}", review);

        return reviewRepository
            .findById(review.getId())
            .map(existingReview -> {
                if (review.getDiscription() != null) {
                    existingReview.setDiscription(review.getDiscription());
                }
                if (review.getStar() != null) {
                    existingReview.setStar(review.getStar());
                }
                if (review.getImage() != null) {
                    existingReview.setImage(review.getImage());
                }
                if (review.getImageContentType() != null) {
                    existingReview.setImageContentType(review.getImageContentType());
                }
                if (review.getCreatedOn() != null) {
                    existingReview.setCreatedOn(review.getCreatedOn());
                }
                if (review.getUpdatedOn() != null) {
                    existingReview.setUpdatedOn(review.getUpdatedOn());
                }

                return existingReview;
            })
            .map(reviewRepository::save);
    }

    /**
     * Get all the reviews.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Review> findAll() {
        log.debug("Request to get all Reviews");
        return reviewRepository.findAll();
    }

    /**
     * Get one review by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Review> findOne(Long id) {
        log.debug("Request to get Review : {}", id);
        return reviewRepository.findById(id);
    }

    /**
     * Delete the review by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Review : {}", id);
        reviewRepository.deleteById(id);
    }
}
