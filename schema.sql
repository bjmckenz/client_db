
-- Note that the SQLite3 dump isn't quite right for PostgreSQL.
-- 1. "number" needs to be "integer" or "float".
-- 2. "date" needs to be "date".
-- 3. id/rowid needs to be "id serial primary key"
-- 4. quoted strings in the CREATE INDEX need the quotes removed.

CREATE TABLE containers (containerNumber varchar, nameOfShip varchar, containerSize float, dateContainerShipped varchar);
INSERT INTO containers VALUES('123','COSCO Star',50,'2024-01-01');
INSERT INTO containers VALUES('456J','MAERSK Rock',25.600000000000000532,'2024-03-08');
INSERT INTO containers VALUES('x1','Betty',34,'2024-05-14');
CREATE UNIQUE INDEX idx_containers_containerNumber ON containers (containerNumber);
