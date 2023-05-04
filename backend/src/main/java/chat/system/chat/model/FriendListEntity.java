package chat.system.chat.model;


import javax.persistence.*;


@Table(name="friend_list")
@Entity
public class FriendListEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Integer id;
    @Column()
    private Integer firstUser;
    @Column()
    private Integer secondUser;

    public FriendListEntity() {
    }

    public FriendListEntity(Integer id, Integer firstUser, Integer secondUser) {
        this.id = id;
        this.firstUser = firstUser;
        this.secondUser = secondUser;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFirstUser() {
        return firstUser;
    }

    public void setFirstUser(Integer firstUser) {
        this.firstUser = firstUser;
    }

    public Integer getSecondUser() {
        return secondUser;
    }

    public void setSecondUser(Integer secondUser) {
        this.secondUser = secondUser;
    }
}
