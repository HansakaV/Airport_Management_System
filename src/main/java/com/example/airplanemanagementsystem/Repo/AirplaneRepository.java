package com.example.airplanemanagementsystem.Repo;

import com.example.airplanemanagementsystem.Entity.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirplaneRepository extends JpaRepository<Airplane,Integer> {

}
