package chat.system.chat.repository;

import chat.system.chat.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//JpaRepository<> => we are extending the JPaReository, with the UserRepository.
//we need to tell it what class this repository is for, and the type of the primary key.
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    //by just naming and generating the deleteUserById method, spring understands the key words,
    //and creates a method just by these key words.
    void deleteUserById(Long id);

    Optional<UserEntity> findUserByCode(String code);
}
