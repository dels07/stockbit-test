-- DDL
CREATE TABLE parent (
  ID int not null auto_increment,
  UserName varchar(50),
  primary key (ID)
);

CREATE TABLE user (
  ID int not null auto_increment,
  UserName varchar(50),
  Parent int,
  primary key (ID)
);

INSERT INTO parent (UserName) VALUES('Ali'),('Budi');

INSERT INTO user (UserName, Parent) VALUES('Ali', 2),('Budi', 0),('Cecep', 1);

-- DML
SELECT u.ID, u.UserName, p.UserName as "ParentUserName"
FROM user u LEFT JOIN parent p ON (u.Parent = p.ID)
ORDER BY u.ID;