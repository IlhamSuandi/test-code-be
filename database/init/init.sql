CREATE TABLE meeting (
  id BIGSERIAL PRIMARY KEY,
  unit VARCHAR(255) NOT NULL,
  meeting_room VARCHAR(50) NOT NULL,
  capacity VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  total_attendance INT NOT NULL,
  total_consumption INT NOT NULL DEFAULT 0,
  type_consumption VARCHAR(50) NOT NULL
);
