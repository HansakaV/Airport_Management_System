package com.example.airplanemanagementsystem.Service;

import com.example.airplanemanagementsystem.Dto.FlightDTO;
import com.example.airplanemanagementsystem.Dto.PackageDTO;

import java.util.List;

public interface PackageService {
    int SavePackage(PackageDTO packageDTO);
    List<PackageDTO> getAllPackages();
    int DeletePackage(String Id);
    int UpdatePackage(PackageDTO packageDTO);

}
