package com.laventa.ecommerce.service;

import com.laventa.ecommerce.domain.Cart;
import com.laventa.ecommerce.repository.CartRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Cart}.
 */
@Service
@Transactional
public class CartService {

    private final Logger log = LoggerFactory.getLogger(CartService.class);

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    /**
     * Save a cart.
     *
     * @param cart the entity to save.
     * @return the persisted entity.
     */
    public Cart save(Cart cart) {
        log.debug("Request to save Cart : {}", cart);
        return cartRepository.save(cart);
    }

    /**
     * Update a cart.
     *
     * @param cart the entity to save.
     * @return the persisted entity.
     */
    public Cart update(Cart cart) {
        log.debug("Request to update Cart : {}", cart);
        // no save call needed as we have no fields that can be updated
        return cart;
    }

    /**
     * Partially update a cart.
     *
     * @param cart the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Cart> partialUpdate(Cart cart) {
        log.debug("Request to partially update Cart : {}", cart);

        return cartRepository
            .findById(cart.getId())
            .map(existingCart -> {
                return existingCart;
            })// .map(cartRepository::save)
        ;
    }

    /**
     * Get all the carts.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Cart> findAll() {
        log.debug("Request to get all Carts");
        return cartRepository.findAll();
    }

    /**
     *  Get all the carts where Customer is {@code null}.
     *  @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<Cart> findAllWhereCustomerIsNull() {
        log.debug("Request to get all carts where Customer is null");
        return StreamSupport
            .stream(cartRepository.findAll().spliterator(), false)
            .filter(cart -> cart.getCustomer() == null)
            .collect(Collectors.toList());
    }

    /**
     * Get one cart by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Cart> findOne(Long id) {
        log.debug("Request to get Cart : {}", id);
        return cartRepository.findById(id);
    }

    /**
     * Delete the cart by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Cart : {}", id);
        cartRepository.deleteById(id);
    }
}
