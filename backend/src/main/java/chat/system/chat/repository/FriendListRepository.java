package chat.system.chat.repository;

import chat.system.chat.model.FriendListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FriendListRepository extends JpaRepository<FriendListEntity, Integer> {

    FriendListEntity findByFirstUser(Integer id);

    FriendListEntity findBySecondUser(Integer id);
}
