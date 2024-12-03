package com.infosys.Athlete.Service.implement;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.Athlete.Service.TeamService;
import com.infosys.Athlete.entity.Athlete;
import com.infosys.Athlete.entity.Team;
import com.infosys.Athlete.repository.AthleteRepo;
import com.infosys.Athlete.repository.TeamRepository;

@Service
public class TeamImp implements TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private AthleteRepo athleteRepository;

    // Create a new team
    @Override
    public Team createTeam(String name, String coach) {
        Team team = new Team(name, coach); // Create a team
        return teamRepository.save(team);  // Save and return the created team
    }

    // Add athletes to the team
    @Override
    public Team addAthletesToTeam(Long teamId, Set<Long> athleteIds) {
        Team team = teamRepository.findById(teamId).orElse(null);
        if (team != null) {
            Set<Athlete> athletes = new HashSet<>(athleteRepository.findAllById(athleteIds)); // Fetch athletes
            team.setAthletes(athletes); // Associate athletes with the team
            return teamRepository.save(team);  // Save and return the updated team
        }
        return null; // Return null if team not found
    }

    // Get all teams
    @Override
    public Set<Team> getAllTeams() {
        return new HashSet<>(teamRepository.findAll());  // Return all teams as a set
    }

    // Get team by ID
    @Override
    public Team getTeamById(Long id) {
        return teamRepository.findById(id).orElse(null);  // Return the team or null if not found
    }

    // Update a team
    @Override
    public Team updateTeam(Long id, String name, String coach) {
        Team team = getTeamById(id); // Fetch team by ID
        if (team != null) {
            team.setName(name);  // Update the name
            team.setCoach(coach);  // Update the coach
            return teamRepository.save(team);  // Save and return the updated team
        }
        return null;  // Return null if team not found
    }

    // Delete a team
    @Override
    public void deleteTeam(Long id) {
        if (teamRepository.existsById(id)) { // Check if team exists
            teamRepository.deleteById(id);  // Delete the team by ID
        } else {
            throw new RuntimeException("Team not found with id: " + id); // Throw exception if not found
        }
    }
}
