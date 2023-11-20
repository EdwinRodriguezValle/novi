package novi.backend.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component

public class CustomAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, org.springframework.security.access.AccessDeniedException e) throws IOException, ServletException {
        System.out.println("Running CustomAccessDeniedHandler");
        response.setStatus((HttpStatus.FORBIDDEN.value()));
        response.setContentType("Application/json");
        Map<String, Object> data = new HashMap<>();
        data.put("timesstamp", new Date());
        data.put("status", HttpStatus.FORBIDDEN.value());
        data.put("message", "Access denied, login again");
        data.put("Path", request.getRequestURL().toString());
        data.put("PD:", "Have a nice day :)!");
        OutputStream out = response.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, data);
        out.flush();
    }
}
