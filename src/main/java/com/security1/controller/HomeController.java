package com.security1.controller;

import com.security1.dto.UserDto;
import com.security1.model.Authority;
import com.security1.model.User;
import com.security1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User register(@RequestBody UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setAuthorities(userDto.getAuthorities());
        return this.userRepository.save(user);
    }

//    @PostMapping("/login")
//    public ResponseEntity<HttpStatus> login(@RequestBody UserDto userDto) throws Exception {
//        Authentication authentication;
//        try {
//         authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(),userDto.getPassword()));
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        } catch (BadCredentialsException e) {
//                throw new Exception("Invalid credentials");
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody UserDto userDto) throws Exception {
        try {
            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Find user from DB
            User user = userRepository.findByEmail(userDto.getEmail())
                    .orElseThrow(() -> new Exception("User not found"));

            // Get user's role (authority)
            String authority = user.getAuthorities().stream()
                    .findFirst()
                    .map(Authority::getAuthority)
                    .orElse("ROLE_USER");

            // Prepare response
            Map<String, String> response = new HashMap<>();
            response.put("authority", authority);
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (BadCredentialsException e) {
            throw new Exception("Invalid credentials");
        }
    }


    @GetMapping("/getUserById/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
