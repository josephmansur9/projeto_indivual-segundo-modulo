CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar(50),
  lastname varchar(200),
  id_curso INT
);

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome_curso varchar(50),
  coordenador varchar(50)
);

CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  room_name varchar(200),
  capacity INT
);

CREATE TABLE bookings (
  booking_id SERIAL,
  user_id INT,
  room_id INT,
  booking_data timestamp,
  descricao varchar(100)
);

ALTER TABLE bookings ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE bookings ADD FOREIGN KEY (room_id) REFERENCES rooms (room_id);

ALTER TABLE users ADD FOREIGN KEY (id_curso) REFERENCES cursos (id);

INSERT INTO users (name, lastname, id_curso)
VALUES ('grabiel', 'mansur', null),
('henrique', 'suttn', null),
('rafael', 'felps', null)