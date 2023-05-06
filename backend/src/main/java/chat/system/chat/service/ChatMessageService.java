package chat.system.chat.service;

import chat.system.chat.Dto.ChatMessageDTO;
import chat.system.chat.model.ChatMessageEntity;
import chat.system.chat.repository.ChatMessageRepository;
import chat.system.chat.repository.FriendListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatMessageService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessageDTO saveMessage(ChatMessageDTO message){
        ChatMessageEntity chatMessageEntity = new ChatMessageEntity();
        chatMessageEntity.setSenderId(message.getSenderId());
        chatMessageEntity.setRecieverId(message.getRecieverId());
        chatMessageEntity.setRoomId(message.getRoomId());
        chatMessageEntity.setSender(message.getSender());
        chatMessageEntity.setReciver(message.getReciver());
        chatMessageEntity.setContent(message.getContent());
        chatMessageRepository.save(chatMessageEntity)
        return message;
    }

}
