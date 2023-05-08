package chat.system.chat.controller;

import chat.system.chat.Dto.ChatMessageDTO;
import chat.system.chat.model.ChatMessageEntity;
import chat.system.chat.model.FriendListEntity;
import chat.system.chat.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    private FriendListEntity friendListEntity;

    //get message from public chat and send message to public chat
    @MessageMapping("/message")
    @SendTo("/topic/public")
    public ChatMessageDTO sendMessage(@Payload ChatMessageDTO chatMessage) {

        return chatMessage;
    }

    //get and send message from private chat
    @MessageMapping("/private-message")
    public ChatMessageDTO sendPrivateMessage(@Payload ChatMessageDTO chatMessage){
        simpMessagingTemplate.convertAndSendToUser(chatMessage.getRoomId().toString(),"/private", chatMessage );

        return chatMessage;
    }
}
