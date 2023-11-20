# Technical requirement:

## Versions:

- This app is build on Springboot `2.5.6 version`. It will fail if you will run it in another version of Springboot. Be aware to run under 2.5.6 version.
- The entire app is built on `Java version 17 version`, other version could cause some technical problems.

## Dependencies:
You need to have all the bellow listed dependencies setup in your `pom.xml` map: otherwise it will fail to run the project.

```XML 
        <dependencies>
<!--    It will help you to start you app-->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter</artifactId>
            </dependency>  
<!--    It will let run the  tests   -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-test</artifactId>
                <scope>test</scope>
            </dependency>
<!--    It will connect the database -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-data-jpa</artifactId>
            </dependency>
<!--    It will allow you to create the security and authentication -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-security</artifactId>
            </dependency>
<!--    It launches the web app -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>
<!--    This will generate the web tokken to give you extra security and authentication -->
            <dependency>
                <groupId>io.jsonwebtoken</groupId>
                <artifactId>jjwt</artifactId>
                <version>0.9.1</version>
            </dependency>
<!--    Security test-->
            <dependency>
                <groupId>org.springframework.security</groupId>
                <artifactId>spring-security-test</artifactId>
                <scope>test</scope>
            </dependency>
<!--    Connection to database with postgres SQL-->
            <dependency>
                <groupId>org.postgresql</groupId>
                <artifactId>postgresql</artifactId>
                <scope>runtime</scope>
            </dependency>
<!--    To work efficiently meanwhile you are writting the software-->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-devtools</artifactId>
                <scope>runtime</scope>
                <optional>true</optional>
            </dependency>
        </dependencies>
```

## Project configuration:
This is connected to `postgreSQL version 15` database. You need adjust the configuration `application.configuration` to connect to your own database at your local computer.
- Make sure to have properly configuration your database connection

spring.datasource.url=jdbc:postgresql://localhost:5432/{`your own database name hier`}
spring.datasource.username={`your own data uswer name hier`}
spring.datasource.password={`your own database password hier`}

