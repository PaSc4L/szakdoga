package chat.system.chat.controller;

import chat.system.chat.Dto.UserDTO;
import chat.system.chat.model.UserEntity;
import chat.system.chat.service.UserService;
import net.bytebuddy.implementation.bind.MethodDelegationBinder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserEntity>> getAllUsers () {
        List<UserEntity> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<Integer> findUser(@PathVariable("email") String email){
        UserEntity userEntity = userService.findUserByEmail(email);
        return new ResponseEntity<>(userEntity.getId(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<UserEntity> addUser(@RequestBody UserEntity user){
        UserEntity newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<UserEntity> updateUser(@RequestBody UserEntity user){
        UserEntity updateUser = userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable("id") Integer id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO dto){
        try{
            System.out.println("Ide eljött");
            return ResponseEntity.ok(userService.register(dto));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ex.getMessage());
        }
    }
}
