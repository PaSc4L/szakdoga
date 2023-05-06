package chat.system.chat.Dto;

public class ChatMessageDTO {

    private String senderId;
    private String recieverId;
    private String roomId;
    private String sender;
    private String reciver;
    private String content;


    public ChatMessageDTO() {
    }

    public ChatMessageDTO(String senderId, String recieverId, String roomId, String sender, String reciver, String content) {
        this.senderId = senderId;
        this.recieverId = recieverId;
        this.roomId = roomId;
        this.sender = sender;
        this.reciver = reciver;
        this.content = content;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getRecieverId() {
        return recieverId;
    }

    public void setRecieverId(String recieverId) {
        this.recieverId = recieverId;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReciver() {
        return reciver;
    }

    public void setReciver(String reciver) {
        this.reciver = reciver;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
