package chat.system.chat.service;

import chat.system.chat.model.ChatMessageEntity;
import chat.system.chat.repository.ChatMessageRepository;
import chat.system.chat.repository.FriendListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatMessageService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessageEntity saveMessage(ChatMessageEntity message){
        return chatMessageRepository.save(message);
    }

}
