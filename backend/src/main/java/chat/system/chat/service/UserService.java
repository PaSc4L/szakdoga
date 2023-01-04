package chat.system.chat.service;

import chat.system.chat.model.UserEntity;
import chat.system.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserEntity addUser(UserEntity user){
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
}
