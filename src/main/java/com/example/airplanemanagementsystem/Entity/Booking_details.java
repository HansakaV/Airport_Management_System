package com.example.airplanemanagementsystem.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "booking_details")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Booking_details implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID bookingDetailId;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    private Bookings booking;

    private String passengerName;
    private String passportNumber;
    private double ticketPrice;
}
