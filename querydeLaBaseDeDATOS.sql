IF EXISTS (SELECT * FROM sys.databases WHERE name = 'cochesProyectoLenmar')
BEGIN
    DROP DATABASE cochesByS_net;
END;
GO

-- Crear y usar la base de datos cochesProyectoLenmar
CREATE DATABASE cochesByS_net;
GO
USE cochesByS_net;

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    ID INT IDENTITY (1,1) PRIMARY KEY,
    NombreUsuario VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(100) NOT NULL,
    Ciudad VARCHAR(50) NOT NULL,
    Pais VARCHAR(50) NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    TipoUsuario NVARCHAR(100) NOT NULL,
    CONSTRAINT ck_tipouser CHECK (TipoUsuario IN ('Comprador', 'Vendedor', 'CompradorYVendedor', 'Mirón'))
);

-- Crear la tabla Coches
CREATE TABLE Coches (
    ID INT IDENTITY (1,1) PRIMARY KEY,
    Color VARCHAR(50) NOT NULL,
    Modelo VARCHAR(100) NOT NULL,
    Matricula VARCHAR(50) NOT NULL,
    CV INT NOT NULL,
    AnoFabricacion INT NOT NULL,
    Descripcion TEXT NOT NULL,
    IDVendedor INT NOT NULL,
    FOREIGN KEY (IDVendedor) REFERENCES Usuarios(ID)
);

-- Insertar datos en la tabla Usuarios
INSERT INTO Usuarios (NombreUsuario, CorreoElectronico, Ciudad, Pais, Telefono, TipoUsuario)
VALUES
('jgarcia', 'jgarcia@example.com', 'Madrid', 'España', '+34 600123456', 'Vendedor'),
('mmartinez', 'mmartinez@example.com', 'Barcelona', 'España', '+34 611234567', 'Comprador'),
('alvarez92', 'alvarez92@example.com', 'Málaga', 'España', '+34 622345678', 'Comprador'),
('jsmith', 'jsmith@example.com', 'Londres', 'Reino Unido', '+44 7001234567', 'Vendedor'),
('awatson', 'awatson@example.com', 'Nueva York', 'Estados Unidos', '+1 9171234567', 'Comprador'),
('choi.k', 'choi.k@example.com', 'Seúl', 'Corea del Sur', '+82 1012345678', 'Vendedor'),
('li.wang', 'li.wang@example.com', 'Pekín', 'China', '+86 1012345678', 'Comprador'),
('robertob', 'robertob@example.com', 'Roma', 'Italia', '+39 3201234567', 'Vendedor'),
('suzuki.t', 'suzuki.t@example.com', 'Tokio', 'Japón', '+81 9012345678', 'Comprador'),
('josefa89', 'josefa89@example.com', 'Lisboa', 'Portugal', '+351 931234567', 'Vendedor'),
('juanperez', 'juan.perez@example.com', 'Madrid', 'España', '+34 622000001', 'Comprador'),
('ana.gomez', 'ana.gomez@example.com', 'Valencia', 'España', '+34 622000002', 'Vendedor'),
('martamartinez', 'marta.martinez@example.com', 'Barcelona', 'España', '+34 622000003', 'CompradorYVendedor'),
('luislopez', 'luis.lopez@example.com', 'Sevilla', 'España', '+34 622000004', 'Mirón'),
('claudioramos', 'claudio.ramos@example.com', 'Lisboa', 'Portugal', '+351 962000005', 'Comprador'),
('sofialima', 'sofia.lima@example.com', 'Oporto', 'Portugal', '+351 962000006', 'Vendedor'),
('emiliamendes', 'emilia.mendes@example.com', 'Lisboa', 'Portugal', '+351 962000007', 'Comprador'),
('adrianfernandez', 'adrian.fernandez@example.com', 'Granada', 'España', '+34 622000008', 'Vendedor'),
('carlossanchez', 'carlos.sanchez@example.com', 'Bilbao', 'España', '+34 622000009', 'Comprador'),
('marialaura', 'maria.laura@example.com', 'París', 'Francia', '+33 612000010', 'Vendedor'),
('danielprieto', 'daniel.prieto@example.com', 'Madrid', 'España', '+34 622000011', 'Mirón'),
('marialuisa', 'maria.luisa@example.com', 'Toledo', 'España', '+34 622000012', 'Comprador'),
('andreacastro', 'andrea.castro@example.com', 'Barcelona', 'España', '+34 622000013', 'Comprador'),
('vicentemorales', 'vicente.morales@example.com', 'Londres', 'Reino Unido', '+44 702000014', 'CompradorYVendedor'),
('javierpineda', 'javier.pineda@example.com', 'México DF', 'México', '+52 552000015', 'Vendedor'),
('camilarojas', 'camila.rojas@example.com', 'Buenos Aires', 'Argentina', '+54 112000016', 'Comprador'),
('nicolasfuentes', 'nicolas.fuentes@example.com', 'Montevideo', 'Uruguay', '+598 992000017', 'Mirón'),
('lucianoestrada', 'luciano.estrada@example.com', 'Santiago', 'Chile', '+56 962000018', 'Comprador'),
('raquelaraujo', 'raquel.araujo@example.com', 'São Paulo', 'Brasil', '+55 112000019', 'Vendedor'),
('patricioribeiro', 'patricio.ribeiro@example.com', 'Río de Janeiro', 'Brasil', '+55 212000020', 'Comprador');


-- Insertar datos en la tabla Coches
INSERT INTO Coches (Color, Modelo, Matricula, CV, AnoFabricacion, Descripcion, IDVendedor)
VALUES
('Rojo', 'Ford Focus', '1234ABC', 115, 2018, 'Coche familiar compacto en buen estado.', 1),
('Negro', 'BMW Serie 3', '5678DEF', 190, 2020, 'Sedán deportivo con gran potencia.', 4),
('Blanco', 'Volkswagen Golf', '9101GHI', 150, 2017, 'Coche versátil y económico.', 1),
('Azul', 'Audi A3', '1121JKL', 140, 2019, 'Compacto premium ideal para ciudad.', 7),
('Gris', 'Toyota Corolla', '3141MNO', 125, 2016, 'Coche fiable y bajo consumo.', 9),
('Amarillo', 'Renault Megane', '3456JKL', 110, 2018, 'Compacto eficiente y confiable.', 1),
('Rojo', 'Peugeot 308', '4567MNO', 130, 2019, 'Deportivo y elegante.', 2),
('Blanco', 'Toyota RAV4', '5678PQR', 160, 2020, 'SUV ideal para familias.', 3),
('Azul', 'Mazda 3', '6789STU', 150, 2017, 'Compacto con excelente rendimiento.', 4),
('Negro', 'Audi Q3', '7890VWX', 190, 2021, 'SUV con acabados de lujo.', 5),
('Plateado', 'BMW Serie 1', '8901YZA', 140, 2016, 'Diseño moderno y eficiente.', 6),
('Gris', 'Honda Accord', '9012BCD', 180, 2019, 'Sedán amplio y cómodo.', 7),
('Verde', 'Hyundai i30', '1234CDE', 120, 2018, 'Eficiente y compacto.', 8),
('Azul', 'Kia Sportage', '2345DEF', 135, 2020, 'SUV urbano con tecnología avanzada.', 9),
('Rojo', 'Volkswagen Tiguan', '3456EFG', 150, 2021, 'SUV premium con gran capacidad.', 10),
('Blanco', 'Seat Arona', '4567FGH', 115, 2017, 'Compacto y funcional.', 11),
('Gris', 'Mercedes-Benz Clase A', '5678GHI', 200, 2018, 'Lujo en un formato compacto.', 12),
('Negro', 'Ford Kuga', '6789HIJ', 170, 2019, 'SUV ideal para aventuras.', 13),
('Rojo', 'Citroën C4', '7890IJK', 100, 2016, 'Eficiencia y confort en ciudad.', 14),
('Amarillo', 'Fiat Tipo', '8901JKL', 95, 2020, 'Sedán compacto con diseño moderno.', 15),
('Plateado', 'Toyota Corolla', '9012KLM', 120, 2018, 'Compacto, económico y confiable.', 16),
('Verde', 'Opel Astra', '1234LMN', 140, 2017, 'Compacto ideal para el día a día.', 17),
('Blanco', 'Subaru Forester', '2345MNO', 175, 2021, 'SUV con tecnología y seguridad avanzada.', 18),
('Gris', 'Skoda Octavia', '3456NOP', 150, 2019, 'Sedán confiable y elegante.', 19),
('Azul', 'Volvo XC40', '4567OPQ', 200, 2020, 'SUV compacto de lujo.', 20);
('Negro Mate', 'Seat León Cupra', '0001XYZ', 290, 2020, 'Potente y modificado con llantas deportivas.', 1),
('Rojo Brillante', 'Volkswagen Golf GTI', '0002ABC', 245, 2018, 'Con un sistema de escape personalizado.', 2),
('Azul Metalizado', 'Audi S3', '0003DEF', 310, 2019, 'Incluye iluminación LED bajo el chasis.', 3),
('Blanco Perla', 'BMW M3', '0004GHI', 430, 2021, 'Con spoiler grande y kit de carrocería.', 4),
('Gris Titanio', 'Ford Focus RS', '0005JKL', 350, 2020, 'Modificaciones de suspensión y frenos.', 5),
('Verde Neón', 'Honda Civic Type R', '0006MNO', 320, 2018, 'Con sistema de sonido premium instalado.', 6),
('Amarillo Sol', 'Renault Megane RS', '0007PQR', 275, 2020, 'Llantas personalizadas y luces tintadas.', 7),
('Morado Oscuro', 'Subaru WRX STI', '0008STU', 300, 2017, 'Motor mejorado para mayor rendimiento.', 8),
('Naranja Brillante', 'Mazda RX-7', '0009VWX', 280, 2016, 'Aspecto deportivo con vinilos personalizados.', 9),
('Azul Claro', 'Toyota Supra', '0010YZH', 450, 2021, 'Modificaciones aerodinámicas únicas.', 10);
