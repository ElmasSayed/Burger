use ea6iwuzwemdynf2f;
drop table burgers;
CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean,
	createdAt timestamp not null default current_timestamp,
	PRIMARY KEY (id)
);

