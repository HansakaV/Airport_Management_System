package com.example.airplanemanagementsystem.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "ticket_booking_details")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Ticket_Booking_Details {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID BookingId;
    @OneToOne
    @JoinColumn(name = "bookingID",nullable = false)
    private Ticket_Bookings ticketBookings;
    private LocalDate date;
    private LocalTime time;
}
