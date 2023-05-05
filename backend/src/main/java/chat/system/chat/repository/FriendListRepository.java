package chat.system.chat.repository;

import chat.system.chat.model.FriendListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendListRepository extends JpaRepository<FriendListEntity, Integer> {


    List<FriendListEntity> findFriendListsByFirstUser(Integer id);

    List<FriendListEntity> findFriendListsBySecondUser(Integer id);
}
