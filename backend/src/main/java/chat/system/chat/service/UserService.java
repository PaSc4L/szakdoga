package chat.system.chat.service;

import chat.system.chat.Dto.RegisterDTO;
import chat.system.chat.exception.UserNotFoundException;
import chat.system.chat.model.UserEntity;
import chat.system.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    //---functions---
    public UserEntity addUser(UserEntity user) {
        user.setCode(UUID.randomUUID().toString());
        return userRepository.save(user);
    }

    public List<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity updateUser(UserEntity user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteUserById(id);
    }

    public UserEntity findUserByCode(String code) {
        return userRepository.findUserByCode(code).orElseThrow(() -> new UserNotFoundException("User is not found"));
    }

    public UserEntity login(String email, String password) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity entity = userRepository.findUserByEmail(email);
        if (entity == null) {
            throw new UsernameNotFoundException("User not found in the database!");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(entity.getEmail(), entity.getPassword(), authorities);
    }
    @Transactional
    public RegisterDTO register(RegisterDTO dto) {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(dto.getEmail());
        userEntity.setPassword(passwordEncoder.encode(dto.getPassword()));
        userEntity.setUsername(dto.getUsername());
        userEntity.setCode(UUID.randomUUID().toString());
        userEntity.setBirthDate(dto.getBirthdate());
        userEntity.setName(dto.getName());
        userEntity.setPhone(dto.getPhone());
        userEntity = userRepository.save(userEntity);
        dto.setCode(userEntity.getCode());
        return dto;
    }
    
}
