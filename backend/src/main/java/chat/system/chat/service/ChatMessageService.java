package chat.system.chat.service;

import chat.system.chat.Dto.ChatMessageDTO;
import chat.system.chat.model.ChatMessageEntity;
import chat.system.chat.repository.ChatMessageRepository;
import chat.system.chat.repository.FriendListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatMessageService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessageEntity saveMessage(ChatMessageDTO message){
        System.out.println(message.getContent());
        ChatMessageEntity chatMessageEntity = new ChatMessageEntity();
        chatMessageEntity.setSenderId(message.getSenderId());
        chatMessageEntity.setRecieverId(message.getRecieverId());
        chatMessageEntity.setRoomId(message.getRoomId());
        chatMessageEntity.setSender(message.getSender());
        chatMessageEntity.setReciever(message.getReciever());
        chatMessageEntity.setContent(message.getContent());
        chatMessageRepository.save(chatMessageEntity);
        return chatMessageEntity;
    }

    public List<ChatMessageEntity> getAllMessages(Integer id){
        List<ChatMessageEntity> getRoomMessages = chatMessageRepository.findAllChatMessagesByRoomId(id);
        return getRoomMessages;
    }

}
