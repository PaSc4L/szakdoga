package chat.system.chat.service;

import chat.system.chat.exception.UserNotFoundException;
import chat.system.chat.model.UserEntity;
import chat.system.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //---functions---
    public UserEntity addUser(UserEntity user){
        user.setCode(UUID.randomUUID().toString());
        return userRepository.save(user);
    }

    public List<UserEntity> findAllUsers(){
        return userRepository.findAll();
    }

    public UserEntity updateUser(UserEntity user)
    {
        return userRepository.save(user);
    }

    public void deleteUser(Long id){
        userRepository.deleteUserById(id);
    }

    public UserEntity findUserByCode(String code){
        return userRepository.findUserByCode(code).orElseThrow(() -> new UserNotFoundException("User is not found"));
    }
}
