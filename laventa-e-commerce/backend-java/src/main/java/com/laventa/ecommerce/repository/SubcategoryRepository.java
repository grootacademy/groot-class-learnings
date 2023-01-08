package com.laventa.ecommerce.repository;

import com.laventa.ecommerce.domain.Subcategory;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Subcategory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SubcategoryRepository extends JpaRepository<Subcategory, Long> {}
