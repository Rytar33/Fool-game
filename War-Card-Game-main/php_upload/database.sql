CREATE DATABASE "db users"

CREATE TABLE "user"(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(12) NOT NULL,
	email varchar(319) NOT NULL,
	password varchar(20) NOT NULL,
	--↑ временно в текстовом формате ↑
	backgroundCard varchar(10) DEFAULT 'default',
	PRIMARY KEY (id))

CREATE TABLE "statisticswithbot"(
	id int NOT NULL AUTO_INCREMENT,
	quantityGame int DEFAULT 0,
	quantityWin int DEFAULT 0,
	quantityDraw int DEFAULT 0,
	quantityLose int DEFAULT 0,
	PRIMARY KEY (id)
)

CREATE TABLE "statisticswithplayer"(
	id int NOT NULL AUTO_INCREMENT,
	quantityGame int DEFAULT 0,
	quantityWin int DEFAULT 0,
	quantityDraw int DEFAULT 0,
	quantityLose int DEFAULT 0,
	PRIMARY KEY (id)
)