CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  lastname VARCHAR(200),
  id_curso INT
);

CREATE TABLE IF NOT EXISTS cursos (
  id SERIAL PRIMARY KEY,
  nome_curso VARCHAR(50),
  coordenador VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS rooms (
  room_id SERIAL PRIMARY KEY,
  room_name VARCHAR(200),
  capacity INT
);

CREATE TABLE IF NOT EXISTS bookings (
  booking_id SERIAL PRIMARY KEY,
  user_id INT,
  room_id INT,
  booking_data TIMESTAMP,
  descricao VARCHAR(100)
);

ALTER TABLE bookings ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE bookings ADD CONSTRAINT fk_room FOREIGN KEY (room_id) REFERENCES rooms (room_id);
ALTER TABLE users ADD CONSTRAINT fk_curso FOREIGN KEY (id_curso) REFERENCES cursos (id);

INSERT INTO cursos (nome_curso, coordenador) VALUES ('Engenharia Civil', 'João Silva');
INSERT INTO cursos (nome_curso, coordenador) VALUES ('Ciência da Computação', 'Maria Souza');

INSERT INTO users (name, lastname, id_curso) VALUES ('Carlos', 'Oliveira', 1);
INSERT INTO users (name, lastname, id_curso) VALUES ('Ana', 'Lima', 2);

INSERT INTO rooms (room_name, capacity) VALUES ('Auditório Principal', 100);
INSERT INTO rooms (room_name, capacity) VALUES ('Laboratório de Computação', 30);

INSERT INTO bookings (user_id, room_id, booking_data, descricao)
VALUES (1, 1, '2025-06-01 10:00:00', 'Palestra sobre estruturas');

INSERT INTO bookings (user_id, room_id, booking_data, descricao)
VALUES (2, 2, '2025-06-02 14:00:00', 'Workshop de Python');
