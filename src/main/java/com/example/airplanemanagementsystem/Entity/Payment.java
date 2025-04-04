package com.example.airplanemanagementsystem.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;
import java.time.LocalDateTime;

@Entity
@Table(name = "payment")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Payment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID paymentId;

    @OneToOne
    @JoinColumn(name = "booking_id", nullable = false)
    private Bookings booking;

    private double amountPaid;
    private LocalDateTime paymentDate;
    private String paymentMethod;
    private String transactionStatus;
    private String transactionReference;
}
