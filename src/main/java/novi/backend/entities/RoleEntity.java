package novi.backend.entities;

import javax.persistence.*;

@Entity
public class RoleEntity {
//    Variables
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;
    @Column
    private String description;

//    Generating default constructor
    public RoleEntity() {
    }
//    Generating getter and setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
