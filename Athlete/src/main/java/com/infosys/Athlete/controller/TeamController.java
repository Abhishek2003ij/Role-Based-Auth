package com.infosys.Athlete.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.Athlete.Service.TeamService;
import com.infosys.Athlete.entity.Team;

@RestController
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    // Create a new team
    @PostMapping("/create")
    public Team createTeam(@RequestParam String name, @RequestParam String coach) {
        return teamService.createTeam(name, coach);  // Calling service to create a team
    }

    // Add athletes to a team
    @PostMapping("/{teamId}/addAthletes")
    public Team addAthletesToTeam(@PathVariable Long teamId, @RequestParam Set<Long> athleteIds) {
        return teamService.addAthletesToTeam(teamId, athleteIds);  // Calling service to add athletes
    }

    // Get all teams
    @GetMapping("/all")
    public Set<Team> getAllTeams() {
        return teamService.getAllTeams();  // Calling service to get all teams
    }

    // Get a team by ID
    @GetMapping("/{id}")
    public Team getTeamById(@PathVariable Long id) {
        return teamService.getTeamById(id);  // Calling service to get team by ID
    }

    // Update a team
    @PutMapping("/{id}")
    public Team updateTeam(@PathVariable Long id, @RequestParam String name, @RequestParam String coach) {
        return teamService.updateTeam(id, name, coach);  // Calling service to update team
    }

    // Delete a team
    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);  // Calling service to delete team
    }
}
