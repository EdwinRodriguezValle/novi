package novi.backend.services;

import novi.backend.dtos.UserDto;
import novi.backend.entities.UserEntity;

import java.util.List;

public interface UserService {
    UserEntity save(UserDto userDto);
     List<UserEntity> findAll();
    UserEntity findOne(String username);
}
