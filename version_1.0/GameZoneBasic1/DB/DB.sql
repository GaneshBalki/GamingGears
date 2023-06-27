create table User1 (custid int primary key auto_increment, username varchar(50),password varchar(50), email varchar(50), mobile varchar(50), addr varchar(50), isActive int);
Insert into User1 values(123,"GaneshBalki","12345","ganesh@1357","7889546512","gokhalenagar",1);

create table Cart (custId int, pid int, price float,qty int default 1);

create table Product( pid int primary key, catId int,pname varchar(60),shortDisc varchar(200),imgUrl varchar(50),qty int,price float);
insert into Product values(1,1,"My KeyBord","High Quaity Premium Keyboard","#",50,4540);

insert into Product values(2,2,"My Mouse","High Quaity Premium Mouse","#",50,440);
insert into Product values(3,1,"Z Stylish KeyBord","High Quaity Premium Keyboard","#",10,8540);
insert into Product values(4,3,"I5 itel Processor","a circuit that performs all of the cals","#",5,45540);
insert into Product values(6,2,"Mouse","High Quaity Premium Mouse",'https://rb.gy/rvl07',6,1155);