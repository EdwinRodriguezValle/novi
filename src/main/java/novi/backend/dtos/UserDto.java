package novi.backend.dtos;



import novi.backend.entities.UserEntity;

import java.util.Date;


public class UserDto {
//    Variables
    private String username;

    private String password;

    private String email;

    private String phone;

    private String name;

    private String lastName;

    private Date birthdays;

    private String gender;

    private String address;


//    Getter and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthdays() {
        return birthdays;
    }

    public void setBirthdays(Date birthdays) {
        this.birthdays = birthdays;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public UserEntity getUserFromDto(){
    UserEntity userEntity = new UserEntity();
    userEntity.setUsername(username);
    userEntity.setPassword(password);
    userEntity.setEmail(email);
    userEntity.setPhone(phone);
    userEntity.setName(name);
    userEntity.setLastName(lastName);
    userEntity.setGender(gender);
    userEntity.setAddress(address);
    userEntity.setBrithdays(birthdays);

    return userEntity;
}

}
