package com.infosys.Athlete.Service;

import java.util.Set;

import com.infosys.Athlete.entity.Team;

public interface TeamService {

    Team createTeam(String name, String coach); // Create a new team

    Team addAthletesToTeam(Long teamId, Set<Long> athleteIds); // Add athletes to a team

    Set<Team> getAllTeams(); // Get all teams

    Team getTeamById(Long id); // Get team by ID

    Team updateTeam(Long id, String name, String coach); // Update team details

    void deleteTeam(Long id); // Delete team
}
