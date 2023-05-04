package chat.system.chat.model;

import java.awt.*;

public class ChatMessage {
    //private MessageStatus messageType;
    private String senderId;
    private String recieverId;
    private String roomId;
    private String sender;
    private String reciver;
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

    /*public MessageStatus getMessageType() {
        return messageType;
    }

    public void setMessageType(MessageStatus messageType) {
        this.messageType = messageType;
    }*/

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
