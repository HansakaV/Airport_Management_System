package com.example.airplanemanagementsystem.Service.impl;

import com.example.airplanemanagementsystem.Dto.PackageDTO;
import com.example.airplanemanagementsystem.Entity.Packages;
import com.example.airplanemanagementsystem.Repo.PackageRepository;
import com.example.airplanemanagementsystem.Service.PackageService;
import com.example.airplanemanagementsystem.Util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PackageServiceImpl implements PackageService {
    @Autowired
    private PackageRepository packageRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public int SavePackage(PackageDTO packageDTO) {
        packageRepository.save(modelMapper.map(packageDTO, Packages.class));
        return VarList.Created;
    }

    @Override
    public List<PackageDTO> getAllPackages() {
        return null;
    }

    @Override
    public int DeletePackage(String Id) {
        return 0;
    }

    @Override
    public int UpdatePackage(PackageDTO packageDTO) {
        return 0;
    }
}
