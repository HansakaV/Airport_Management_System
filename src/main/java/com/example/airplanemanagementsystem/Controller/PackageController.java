package com.example.airplanemanagementsystem.Controller;

import com.example.airplanemanagementsystem.Dto.AirplaneDTO;
import com.example.airplanemanagementsystem.Dto.PackageDTO;
import com.example.airplanemanagementsystem.Dto.ResponseDTO;
import com.example.airplanemanagementsystem.Service.PackageService;
import com.example.airplanemanagementsystem.Util.VarList;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/package")
@CrossOrigin("*")
public class PackageController {
    private final PackageService packageService;

    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @PostMapping("save")
    public ResponseEntity<ResponseDTO> saveAirplane(@Valid @RequestBody PackageDTO packageDTO){
        try {
            System.out.println("blaaa"+packageDTO);
            int result = packageService.SavePackage(packageDTO);
            ResponseDTO responseDTO = new ResponseDTO(VarList.Created, "Package saved successfully", result);
            return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
        } catch (Exception e) {
            ResponseDTO responseDTO = new ResponseDTO(VarList.Bad_Gateway, e.getMessage(), null);
            return new ResponseEntity<>(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
