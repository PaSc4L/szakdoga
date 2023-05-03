package chat.system.chat.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Table(name="user")
@Entity
public class UserEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Integer id;
    @Column()
    private String username;
    @Column(name = "name")
    private String name;
    @Column( unique= true, name="email" )
    private String email;
    @Column()
    private String password;
    @Column()
    private String code;
    @Column()
    private String phone;
    @Column()
    private Date birthdate;

    public UserEntity() {
    }

    public UserEntity(Integer id, String username, String name, String email, String password,String code, String phone, Date birthdate) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.code = code;
        this.phone = phone;
        this.birthdate = birthdate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getCode(){
        return code;
    }

    public void setCode(String code){
        this.code = code;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getBirthDate() {
        return birthdate;
    }

    public void setBirthDate(Date birthdate) {
        this.birthdate = birthdate;
    }
}
