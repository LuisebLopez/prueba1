create database mercadito

create table proveedor_sinlista (
id_provsinlista int primary key identity(1, 1), 
nombre varchar(50))

create table proveedor_conlista (
id_provconlista int primary key identity(1, 1), 
nombre varchar(50))

create table factura_encabezado(
id_factura int primary key identity(1, 1),
id_provconlista int,
id_provsinlista int,
id_cliente int,
fecha date)

create table factura_detalle(
id_factura int,
producto_id int,
cantidad int)

create table inventario(
id_producto int primary key identity(1, 1),
nombre varchar(50),
precio int)

create table cliente(
id_cliente int primary key identity(1, 1),
nombre varchar(50),
genero varchar(1),
cantidad_debe int)

create table factura_encabezadoh(
id_factura int primary key identity(1, 1),
fecha date,
id_hogar int)

create table factura_detalleh(
id_factura int,
producto_id int,
cantidad int,
pago_telefono int,
pago_luz int,
pago_agua int,
pago_impuesto int)

create table hogar(
id_hogar int primary key identity(1, 1),
nombre varchar(50),
telefono varchar(20))

insert into hogar values('casadefamilia','99897856')
insert into factura_encabezadoh values('2020-04-22',1)
insert into factura_detalleh values(1,2,4,null,null,null,null)
insert into factura_detalleh values(1,1,3,null,null,null,null)
insert into factura_detalleh values(1,2,5,null,null,null,null)
insert into factura_detalleh values(1,3,5,null,null,null,null)
insert into factura_detalleh values(1,2,4,200,2000,323,4000)
insert into cliente values('Juan','M',2000)
insert into cliente values('Jessica','F',0)
insert into cliente values('Jose','M',0)
insert into cliente values('Luis','M',5000)
insert into cliente values('Carlos','M',0)
insert into cliente values('Patrick','M',0)
insert into cliente values('Javier','M',300)
insert into cliente values('Andrea','F',0)
insert into factura_encabezado values(1,null,null,'2020-04-14')
insert into factura_detalle values(1,3,2)
insert into factura_detalle values(1,2,5)
insert into factura_detalle values(1,4,2)
insert into factura_detalle values(1,5,2)
insert into factura_detalle values(1,1,2)
insert into factura_detalle values(1,3,3)
insert into factura_detalle values(1,1,4)
insert into inventario values('pepino',6)
insert into inventario values('manzana',8)
insert into inventario values('arroz',9)
insert into inventario values('azucar',8)
insert into inventario values('galletas',15)
insert into inventario values('leche',25)
insert into factura_encabezado values(null,null,1,'2020-04-14')
insert into factura_detalle values(2,3,2)
insert into factura_detalle values(2,2,5)
insert into factura_detalle values(2,4,2)
insert into factura_detalle values(2,5,2)
insert into factura_detalle values(2,1,2)
insert into factura_detalle values(2,3,3)
insert into factura_detalle values(2,1,4)
insert into proveedor_conlista values('bimbo')
insert into proveedor_conlista values('maseca')
insert into proveedor_conlista values('arroyo')
insert into proveedor_conlista values('Sula')
insert into proveedor_conlista values('larosa')
insert into proveedor_sinlista values('cocacola')
insert into proveedor_sinlista values('frutasyverduras')
insert into proveedor_sinlista values('Leyde')
insert into proveedor_sinlista values('cerveceria')
