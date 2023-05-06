package chat.system.chat.controller;

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
    private ChatMessageService chatMessageService;

    //get message from public chat and send message to public chat
    @MessageMapping("/message")
    @SendTo("/topic/public")
    public ChatMessageEntity sendMessage(@Payload ChatMessageEntity chatMessage) {

        return chatMessage;
    }

    //get and send message from private chat
    @MessageMapping("/private-message")
    public ChatMessageEntity sendPrivateMessage(@Payload ChatMessageEntity chatMessage){
        chatMessageService.saveMessage(chatMessage);
        simpMessagingTemplate.convertAndSendToUser(chatMessage.getRoomId(),"/private", chatMessage );

        return chatMessage;
    }
}
