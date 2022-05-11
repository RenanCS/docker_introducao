<h1 align="center">
  Introdução a docker
</h1>

<h4 align="center">
	🚧  API + DB + WEB ♻️ Em Andamento 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-problemas-encontrados">Problemas encontrados</a> •
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

O projeto consiste em praticar o docker rodando API + DataBase + Web em docker:
- API - Node
- Database - Mysql
- Web - PHP


---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Docker](https://www.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


```bash
#1-Rodar os comandos dentro da pasta docker-introducao
#2-O %cd% pode ser substituído no linux por $(pwd)

# Rodar o docker com banco de dados
$ docker build -t=mysql-image -f %cd%/api/db/Dockerfile .
$ docker run -d -v %cd%/api/db/data:/var/lib/mysql --rm --name=mysql-container mysql-image
$ docker exec -i mysql-container mysql -uroot -prenanteste < api/db/script.sql


# Rodar o docker com api
$ docker build -t=node-image -f %cd%/api/Dockerfile .
$ docker run -d -v %cd%/api:/home/node/app -p=9001:9001 --link=mysql-container --rm --name=node-container node-image

# Rodar o docker com a web
$ docker build -t=php-image -f website/Dockerfile .
$ docker run -d -v %cd%/website:/var/www/html -p=8888:80 --link=node-container --rm --name=php-container php-image

```

---

## ❌Problemas encontrados

 
---

## 🛠 Tecnologias

- **[Docker](https://www.docker.com/)**





