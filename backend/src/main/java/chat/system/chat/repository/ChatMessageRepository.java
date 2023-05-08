package chat.system.chat.repository;

import chat.system.chat.model.ChatMessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessageEntity, Integer> {

    List<ChatMessageEntity> getAllByRoomId(Integer id);

    List<ChatMessageEntity> getAllChatMessagesByRoomId(Integer id);

    List<ChatMessageEntity> findAllChatMessagesByRoomId(Integer id);
}
