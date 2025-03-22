package com.example.airplanemanagementsystem.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "packages")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Packages {
    @Id
    @Column(unique = true)
    private int PackageId;
    private String packageName;
    private String imagePath;
    private String description;
    private double price;
}
