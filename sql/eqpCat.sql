CREATE SEQUENCE cat_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE Eqp_Cat (
    id bigint DEFAULT nextval('cat_id_seq'::regclass) NOT NULL PRIMARY KEY,
    category character varying(50) NOT NULL
);

INSERT INTO Eqp_Cat (category) VALUES
('Electrical'),
('Instrumentation'),
('Controller'),
('Facility'),
('Mechanical'),
('Civil'),
('IT'),
('Furniture'),
('General')
