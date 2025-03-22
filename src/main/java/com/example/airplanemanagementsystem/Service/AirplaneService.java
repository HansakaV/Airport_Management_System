package com.example.airplanemanagementsystem.Service;

import com.example.airplanemanagementsystem.Dto.AirplaneDTO;
import com.example.airplanemanagementsystem.Dto.FlightDTO;

import java.util.List;

public interface AirplaneService {
    int SaveFlights(AirplaneDTO airplaneDTO);
    List<FlightDTO> getAllFlights();
    int DeleteFlight(int Id);
}
