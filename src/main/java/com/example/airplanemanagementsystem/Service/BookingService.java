package com.example.airplanemanagementsystem.Service;

import com.example.airplanemanagementsystem.Dto.BookingDTO;
import java.util.List;
import java.util.UUID;

public interface BookingService {
    BookingDTO createBooking(BookingDTO bookingDTO);
    List<BookingDTO> getUserBookings(UUID userId);
}
