package com.example.airplanemanagementsystem.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
@Table(name = "ticket_bookings")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Ticket_Bookings implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID bookingID;
    private String type;
    private double price;
}
