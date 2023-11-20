package novi.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class UserNameAlredyExistException extends ResponseStatusException {
    public UserNameAlredyExistException(String message){
        super(HttpStatus.CONFLICT, message);
    }
}
