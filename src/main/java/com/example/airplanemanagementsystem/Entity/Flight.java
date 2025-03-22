package com.example.airplanemanagementsystem.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Primary;

@Entity
@Table(name = "flights")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Flight {
    @Id
    @Column(unique = true)
    private String flightNumber;
    private String aircraft;
    private String arrivalTime;
    private String departureTime;
    private String destination;
    private String operatingDays;
    private String origin;
    private String status;



}
