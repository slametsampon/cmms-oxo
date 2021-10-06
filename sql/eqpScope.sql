CREATE SEQUENCE scope_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE EqpScope (
    id bigint DEFAULT nextval('scope_id_seq'::regclass) NOT NULL PRIMARY KEY,
    scope character varying(50) NOT NULL
);

INSERT INTO EqpScope (scope) VALUES
('Electrical'),
('Instrumentation'),
('Controller'),
('Facility'),
('Mechanical'),
('Civil'),
('IT'),
('Furniture'),
('General')
