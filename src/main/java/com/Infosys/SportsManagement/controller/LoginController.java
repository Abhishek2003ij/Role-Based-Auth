package com.Infosys.SportsManagement.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.Infosys.SportsManagement.Entity.EventUser;
import com.Infosys.SportsManagement.service.EventUserService;

@Controller
public class LoginController {
  @Autowired
  private BCryptPasswordEncoder bcrypt;
  @Autowired 
  private EventUserService service;
  
  @GetMapping("/register")
  public ModelAndView showUserRegistrationPage() {
    EventUser user=new EventUser();
    ModelAndView mv=new ModelAndView("newUserRegistration");
    mv.addObject("userRecord",user);
    return mv;
  }
  
  @PostMapping("/register")
  public ModelAndView saveUserRegisterPage(@Valid @ModelAttribute("userRecord") EventUser user, BindingResult result) {
      if (result.hasErrors()) {
          return new ModelAndView("NewUserRegistration", "formErrors", result.getAllErrors());
      }
      String encodedPassword = bcrypt.encode(user.getPassword());
      user.setPassword(encodedPassword);
      service.save(user);
      return new ModelAndView("loginPage");
  }
  
  @GetMapping("/loginpage")
  public ModelAndView showLoginPage(@RequestParam(name = "error", required = false) String error) {
      ModelAndView mv = new ModelAndView("loginPage");
      if (error != null) {
          mv.addObject("errorMessage", "Wrong credentials, please re-enter.");
      }
      return mv;
  }
  
  @PostMapping("/login")
  public ModelAndView login(@RequestParam String username, @RequestParam String password) {
      EventUser user = service.findByUsername(username);
      if (user != null && bcrypt.matches(password, user.getPassword())) {
          return new ModelAndView("redirect:/index");
      } else {
          ModelAndView mv = new ModelAndView("loginPage");
          mv.addObject("errorMessage", "Invalid username or password");
          return mv;
      }
  }

  @GetMapping("/loginindex")
  public ModelAndView showLoginIndexPage() {
      return new ModelAndView("index");
  }
  
  @GetMapping("/loginerror")
  public ModelAndView showLoginErrorPage() {
      ModelAndView mv = new ModelAndView("loginPage");
      mv.addObject("errorMessage", "Wrong credentials, please re-enter.");
      return mv;
  }
  
}
