package chat.system.chat.model;

import javax.persistence.*;

@Table(name="chat_message")
@Entity
public class ChatMessageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Integer Id;
    @Column()
    private Integer senderId;
    @Column()
    private Integer recieverId;
    @Column()
    private Integer roomId;
    @Column()
    private String sender;
    @Column()
    private String reciever;
    @Column()
    private String content;

    public Integer getRecieverId() {
        return recieverId;
    }

    public void setRecieverId(Integer recieverId) {
        this.recieverId = recieverId;
    }

    public Integer getSenderId() {
        return senderId;
    }

    public void setSenderId(Integer id) {
        this.senderId = id;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public String getReciever() {
        return reciever;
    }

    public void setReciever(String reciever) {
        this.reciever = reciever;
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
