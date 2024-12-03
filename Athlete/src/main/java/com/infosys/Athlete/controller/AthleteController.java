package com.infosys.Athlete.controller;

import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.infosys.Athlete.Service.AthleteService;
import com.infosys.Athlete.entity.Athlete;

@Controller
public class AthleteController {

    private final AthleteService athleteService;

    public AthleteController(AthleteService athleteService) {
        this.athleteService = athleteService;
    }

    @GetMapping("/athletes")
    public String listAthlete(Model model) {
        model.addAttribute("Athlete", athleteService.getAllAthletes());
        return "athletes";
    }

    @GetMapping("/athlete/new")
    public String createAthlete(Model model) {
        Athlete athlete = new Athlete();
        model.addAttribute("athlete", athlete);
        return "create_athlete";
    }

    @PostMapping("/athlete")
    public String saveAthlete(@ModelAttribute("athlete") Athlete athlete) {
        athleteService.saveAthlete(athlete);
        return "redirect:/athletes";  // Fixed redirection
    }

    @GetMapping("/athlete/edit/{id}")
    public String editAthleteForm(@PathVariable Long id, Model model) {
        // Check if athlete exists in the Optional object
        Optional<Athlete> athleteOpt = athleteService.getAthleteById(id);
        
        if (athleteOpt.isPresent()) {
            model.addAttribute("athlete", athleteOpt.get());
        } else {
            // Handle the case when athlete is not found
            model.addAttribute("error", "Athlete not found");
        }
        
        return "edit_athlete";
    }

    @PostMapping("/athlete/{id}")
    public String updateAthlete(@PathVariable Long id, @ModelAttribute("athlete") Athlete athlete, Model model) {
        Optional<Athlete> athleteOpt = athleteService.getAthleteById(id);

        if (athleteOpt.isPresent()) {
            Athlete existingAthlete = athleteOpt.get();
            existingAthlete.setFirstName(athlete.getFirstName());
            existingAthlete.setLastName(athlete.getLastName());
            existingAthlete.setEmail(athlete.getEmail());
            
            athleteService.updateAthlete(existingAthlete);
        } else {
            model.addAttribute("error", "Athlete not found");
        }
        
        return "redirect:/athletes";  // Fixed redirection
    }

    @GetMapping("/athlete/{id}")
    public String deleteAthlete(@PathVariable Long id) {
        athleteService.deleteAthlete(id);
        return "redirect:/athletes";  // Fixed redirection
    }
}
