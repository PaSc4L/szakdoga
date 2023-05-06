package chat.system.chat.model;

import javax.persistence.*;

@Table(name="chat_message")
@Entity
public class ChatMessageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Integer Id;
    @Column()
    private String senderId;
    @Column()
    private String recieverId;
    @Column()
    private String roomId;
    @Column()
    private String sender;
    @Column()
    private String reciver;
    @Column()
    private String content;

    public String getRecieverId() {
        return recieverId;
    }

    public void setRecieverId(String recieverId) {
        this.recieverId = recieverId;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String id) {
        this.senderId = id;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getReciver() {
        return reciver;
    }

    public void setReciver(String reciver) {
        this.reciver = reciver;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
