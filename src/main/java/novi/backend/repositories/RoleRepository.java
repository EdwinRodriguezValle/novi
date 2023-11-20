package novi.backend.repositories;


import novi.backend.entities.RoleEntity;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<RoleEntity, Long> {


    RoleEntity findRoleEntityByName(String name);

}
