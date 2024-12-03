package com.infosys.Athlete.Service;

import java.util.List;
import java.util.Optional;

import com.infosys.Athlete.entity.Athlete;

public interface AthleteService {

    List<Athlete> getAllAthletes();
    Athlete saveAthlete(Athlete athlete);
    Athlete updateAthlete(Athlete athlete);
    Optional<Athlete> getAthleteById(Long id);  // Return type should be Optional<Athlete>
    void deleteAthlete(Long id);
}
