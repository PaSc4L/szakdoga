package chat.system.chat.service;

import chat.system.chat.Dto.FriendListDTO;
import chat.system.chat.model.FriendListEntity;
import chat.system.chat.model.UserEntity;
import chat.system.chat.repository.FriendListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FriendListService {

    @Autowired
    private FriendListRepository friendListRepository;

    @Autowired
    private UserService userService;

    public FriendListEntity addFriend(FriendListEntity addFriend) {
        return friendListRepository.save(addFriend);
    }

    public List<FriendListDTO> getFriends(Integer id) {
        List<Integer> friendIds = new ArrayList<Integer>();
        List<FriendListEntity> friends = friendListRepository.findFriendListsByFirstUser(id);
        for(FriendListEntity friend : friends){
            if(friend != null){
                friendIds.add(friend.getSecondUser());
            }
        }

        friends = friendListRepository.findFriendListsBySecondUser(id);
        for(FriendListEntity friend : friends){
            if(friend != null){
                friendIds.add(friend.getFirstUser());
            }
        }

        List<FriendListDTO> dtos = new ArrayList<>();

        for (Integer az: friendIds) {
            dtos.add(idToDTO(id, az));
        }
        return dtos;
    }

    private FriendListDTO idToDTO(Integer firstId, Integer secondId){
        UserEntity user = userService.findById(secondId);
        FriendListDTO dto = new FriendListDTO();
        dto.setId(secondId);
        dto.setRoomId(getFriendRoom(firstId,secondId));
        dto.setName(user.getName());

        return dto;
    }

    public List<Integer> getRooms(Integer id) {
        List<Integer> roomNumbers = new ArrayList<Integer>();
        List<FriendListEntity> friends = friendListRepository.findFriendListsByFirstUser(id);
        for(FriendListEntity friend : friends){
            if(friend != null){
                roomNumbers.add(friend.getId());
            }
        }

        friends = friendListRepository.findFriendListsBySecondUser(id);
        for(FriendListEntity friend : friends){
            if(friend != null){
                roomNumbers.add(friend.getId());
            }
        }
        return roomNumbers;
    }

    public Integer getFriendRoom(Integer firstId, Integer secondId){
        FriendListEntity roomId = friendListRepository.getByFirstUserAndSecondUser(firstId,secondId);
        if(roomId == null){
            roomId = friendListRepository.getBySecondUserAndFirstUser(firstId,secondId);
            return roomId.getId();
        }
        else{
            return roomId.getId();
        }
    }
}
