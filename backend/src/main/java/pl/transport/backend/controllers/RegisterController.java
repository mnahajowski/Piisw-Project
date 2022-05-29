package pl.transport.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.transport.backend.dto.RegistrationDto;
import pl.transport.backend.dto.RegistrationResult;
import pl.transport.backend.services.UserService;

@RestController
@RequestMapping("register")
public class RegisterController {

	private final UserService userService;

	@Autowired
	public RegisterController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("")
	public RegistrationResult register(@RequestBody RegistrationDto registrationDto) {
		return userService.createUser(registrationDto.getUsername(), registrationDto.getPassword());
	}
}
