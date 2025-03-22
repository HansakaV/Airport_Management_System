package com.example.airplanemanagementsystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AirplaneDTO {
    private String model;
    private String manufacturer;
    private int capacity;
    private String status;
}
