package novi.backend.services;


import novi.backend.entities.RoleEntity;

public interface RoleService {
    RoleEntity findByName(String name);
}
