package chat.system.chat.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ChatMessage {
    private String senderName;
    private String recieverName;
    private String message;
    private String date;
    private Status status;

}
