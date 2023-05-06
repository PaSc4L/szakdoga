package chat.system.chat.repository;

import chat.system.chat.model.ChatMessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatMessageRepository extends JpaRepository<ChatMessageEntity, Integer> {

}
