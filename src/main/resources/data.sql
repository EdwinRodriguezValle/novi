INSERT INTO role_entity (description, name) VALUES ('Administrador', 'ADMIN');
INSERT INTO role_entity (description, name) VALUES ('Usuario', 'USER');

INSERT INTO user_entity(username, password, email, phone, name ) values ('user1', 'usuario', 'usuario@gmail.com', '0638497646', 'Usuario');
INSERT INTO user_entity(username, password, email, phone, name ) values ('user2', 'usuario', 'usuaria@gmail.com', '0738497646', 'Usuaria');
INSERT INTO user_roles(user_id, role_id) values (1, 1);
INSERT INTO user_roles(user_id, role_id) values (2, 2);
