package novi.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class EmailAlreadyExistException extends ResponseStatusException {
    public EmailAlreadyExistException(String massage){
        super(HttpStatus.CONFLICT, massage);
    }
}
