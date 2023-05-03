package chat.system.chat.service;

import chat.system.chat.model.FriendListEntity;
import chat.system.chat.model.UserEntity;
import chat.system.chat.repository.FriendListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class FriendListService {

    @Autowired
    private FriendListRepository friendListRepository;

    public FriendListEntity addFriend(FriendListEntity addFriend) {
        return friendListRepository.save(addFriend);
    }

    public List<FriendListEntity> getFriends(Integer id) {
        List<FriendListEntity> friendListEntities = new ArrayList<FriendListEntity>();
        FriendListEntity friend = friendListRepository.findByFirstUser(id);
        if(friend != null){
            friendListEntities.add(friendListRepository.findByFirstUser(id));
        }
        friend = friendListRepository.findBySecondUser(id);
        if(friend != null){
            friendListEntities.add(friendListRepository.findBySecondUser(id));
        }
        return friendListEntities;
    }

    public List<Integer> getRooms(Integer id) {
        List<Integer> roomNumbers = new ArrayList<Integer>();
        FriendListEntity friend = friendListRepository.findByFirstUser(id);
        if(friend != null){
            roomNumbers.add(friendListRepository.findByFirstUser(id).getId());
        }
        friend = friendListRepository.findBySecondUser(id);
        if(friend != null){
            roomNumbers.add(friendListRepository.findBySecondUser(id).getId());
        }
        return roomNumbers;
    }
}
