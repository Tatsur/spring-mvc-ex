create table products (id bigserial primary key, name text, title text, price decimal, amount int);
insert into products (name, title, price, amount) values
('Shoes', 'perfect shoes',500,2),
('Hat', 'superior hat',1000,3);