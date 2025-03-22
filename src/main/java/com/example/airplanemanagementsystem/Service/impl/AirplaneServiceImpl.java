package com.example.airplanemanagementsystem.Service.impl;

import com.example.airplanemanagementsystem.Dto.AirplaneDTO;
import com.example.airplanemanagementsystem.Dto.FlightDTO;
import com.example.airplanemanagementsystem.Entity.Airplane;
import com.example.airplanemanagementsystem.Repo.AirplaneRepository;
import com.example.airplanemanagementsystem.Service.AirplaneService;
import com.example.airplanemanagementsystem.Util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class AirplaneServiceImpl implements AirplaneService {
    @Autowired
    private AirplaneRepository airplaneRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public int SaveFlights(AirplaneDTO airplaneDTO) {
        airplaneRepository.save(modelMapper.map(airplaneDTO, Airplane.class));
        return VarList.Created;
    }

    @Override
    public List<FlightDTO> getAllFlights() {
        return null;
    }

    @Override
    public int DeleteFlight(int Id) {
        return 0;
    }
}
