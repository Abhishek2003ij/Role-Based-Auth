package com.infosys.Athlete.Service.implement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.Athlete.Service.AthleteService;
import com.infosys.Athlete.entity.Athlete;
import com.infosys.Athlete.repository.AthleteRepo;

@Service
public class AthleteImp implements AthleteService {

    private final AthleteRepo athleteRepo;

    @Autowired
    public AthleteImp(AthleteRepo athleteRepo) {
        this.athleteRepo = athleteRepo;
    }

    // Get all athletes
    @Override
    public List<Athlete> getAllAthletes() {
        return athleteRepo.findAll();  // Fetching all athletes
    }

    // Save a new athlete
    @Override
    public Athlete saveAthlete(Athlete athlete) {
        return athleteRepo.save(athlete); // Saving athlete and returning saved entity
    }

    // Update an athlete
    @Override
    public Athlete updateAthlete(Athlete athlete) {
        if (athleteRepo.existsById(athlete.getId())) {
            return athleteRepo.save(athlete); // Updating athlete
        } else {
            throw new RuntimeException("Athlete not found with id: " + athlete.getId());
        }
    }

    // Get an athlete by ID
    @Override
    public Optional<Athlete> getAthleteById(Long id) {
        return athleteRepo.findById(id);  // Return Optional<Athlete> as expected
    }

    // Delete an athlete by ID
    @Override
    public void deleteAthlete(Long id) {
        if (athleteRepo.existsById(id)) {
            athleteRepo.deleteById(id); // Deleting athlete by ID
        } else {
            throw new RuntimeException("Athlete not found with id: " + id); // Handle case where athlete doesn't exist
        }
    }
}
