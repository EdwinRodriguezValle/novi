package novi.backend.services;


import novi.backend.entities.RoleEntity;
import novi.backend.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "roleService")
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public RoleEntity findByName(String name){
        return roleRepository.findRoleEntityByName(name);
    }
}
