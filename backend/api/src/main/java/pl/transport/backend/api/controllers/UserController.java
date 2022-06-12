package pl.transport.backend.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.transport.backend.data.users.User;
import pl.transport.backend.services.UserService;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("")
	public List<User> getAll() {
		return userService.getAll();
	}
}