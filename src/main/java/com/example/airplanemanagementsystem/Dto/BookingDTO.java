package com.example.airplanemanagementsystem.Dto;

import java.time.LocalDate;

public class BookingDTO {
    private Long id;
    private LocalDate bookingDate;
    private String passengerName;
    private String flightClass;
    private String paymentMethod;
    private String seatNumber;
    private String bookingStatus;
    private LocalDate createdAt;
}
