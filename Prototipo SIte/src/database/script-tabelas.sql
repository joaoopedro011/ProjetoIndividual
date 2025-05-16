-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE universoSCCP;

USE universoSCCP;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(100)
);
create table noticia(
idNoticia int primary key auto_increment,
titulo varchar(100),
conteudo varchar(250),
fkAutor int, constraint fkAutorNoticia foreign key (fkAutor) references usuario(idUsuario)
dtNoticia datetime
);
create table jogo(
idRodada int primary key auto_increment,
acertos varchar(45),
erros varchar(100),
media varchar(100)
fkUsuario int, constraint fkUsuarioJogo foreign key (fkUsuario) references usuario(idUsuario)
);

insert into usuario values
(default, 'ADM João', 'admjoao@gmail.com', 'adm123');


insert into noticia values
(default, 'Corinthians celebra números nos redes sociais e crescimento relevante no YouTube', 'Clube bate recordes de audiência e engajamento nas principais plataformas digitais.', 1, '2025-05-15 18:34:18'),
(default, 'Técnico do Corinthians projeta duelo contra o Racing e cobra mais regularidade da equipe', 'Clube bate recordes de audiência e engajamento nas principais plataformas digitais.', 1, '2025-05-13 20:12:58'),
(default, 'Memphis Depay sofre torção no tornozelo durante treino e desfalca Corinthians na Sul-Americana', 'Atacante passa por avaliações e está fora do jogo contra o Racing-URU, nesta quinta.', 1, '2025-05-10 11:27:23'),
(default, 'Corinthians lança oficialmente nova camisa II inspirada no Mundial de 2000', 'Uniforme desenhado pela Nike é predominantemente na cor preta com detalhes em branco e faz referência aos 25 anos da conquista do Mundial de Clubes de 2000.', 1, '2025-05-09 12:45:43'),
(default, 'NFL escolhe "clássico" para segundo jogo da liga na Neo Química Arena', 'Tetracampeão do Super Bowl e uma das principais equipes da atualidade será time visitante contra rival divisional na segunda partida da NFL em São Paulo.', 1, '2025-05-03 18:39:30');


