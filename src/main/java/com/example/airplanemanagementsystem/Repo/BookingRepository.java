package com.example.airplanemanagementsystem.Repo;

import com.example.airplanemanagementsystem.Entity.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface BookingRepository extends JpaRepository<Bookings, UUID> {
    List<Bookings> findByUserUid(UUID userId);
}
