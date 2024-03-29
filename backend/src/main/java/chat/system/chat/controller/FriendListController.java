package chat.system.chat.controller;

import chat.system.chat.Dto.FriendListDTO;
import chat.system.chat.model.FriendListEntity;
import chat.system.chat.repository.FriendListRepository;
import chat.system.chat.service.FriendListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/friends")
public class FriendListController {


    private final FriendListService friendListService;

    public FriendListController(FriendListService friendListService) {
        this.friendListService = friendListService;
    }

    @PostMapping("/addFriend")
    public ResponseEntity<FriendListEntity> createConnection(@RequestBody FriendListEntity friendListEntity){
        FriendListEntity newFriend = friendListService.addFriend(friendListEntity);
        return new ResponseEntity<>(newFriend, HttpStatus.CREATED);
    }

    @GetMapping("/getFriendList/{id}")
    public ResponseEntity<List<FriendListDTO>> getAllFriends(@PathVariable Integer id){
        List<FriendListDTO> friendIds = friendListService.getFriends(id);
        return new ResponseEntity<>(friendIds, HttpStatus.OK);
    }

    @GetMapping("/getAllRoomId/{id}")
    public ResponseEntity<List<Integer>> getAllRoomId(@PathVariable Integer id){
        List<Integer> roomIds = friendListService.getRooms(id);
        return new ResponseEntity<>(roomIds, HttpStatus.OK);
    }
}
