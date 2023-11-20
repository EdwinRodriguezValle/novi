package novi.backend.services;

import novi.backend.dtos.UserDto;
import novi.backend.entities.RoleEntity;
import novi.backend.entities.UserEntity;
import novi.backend.exceptions.EmailAlreadyExistException;
import novi.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service(value = "userService")
public class UserServiceImplement implements UserDetailsService, UserService {
    @Autowired
    private RoleService roleService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username);
        if(userEntity == null){
            throw new UsernameNotFoundException("Invalid User or password.");
        }
        return new org.springframework.security.core.userdetails.User(userEntity.getUsername(), userEntity.getPassword(), getAuthority(userEntity));
    }

    private Set<SimpleGrantedAuthority>getAuthority(UserEntity userEntity){
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        userEntity.getRoleEntities().forEach(roleEntity -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + roleEntity.getName()));
        });
        return authorities;
    }
    @Override
    public List<UserEntity> findAll() {
        List<UserEntity> list = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }
    @Override
    public UserEntity findOne(String username){
        return userRepository.findByUsername(username);
    }

    @Override
    public UserEntity save(UserDto userDto){
        UserEntity newUser = userDto.getUserFromDto();
        if(userRepository.existsByEmail(newUser.getEmail()))
            throw new EmailAlreadyExistException("This email is already register.");
        newUser.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));

        RoleEntity roleEntity = roleService.findByName("USER");
        Set<RoleEntity> roleEntitySet = new HashSet<>();
        roleEntitySet.add(roleEntity);

        if(newUser.getEmail().split("@")[1].equals("admin.edu")){
            roleEntity = roleService.findByName("ADMIN");
            roleEntitySet.add(roleEntity);
        }
        newUser.setRoleEntities(roleEntitySet);
        return userRepository.save(newUser);
    }
}
