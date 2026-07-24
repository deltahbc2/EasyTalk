# EASYTALK

EasyTalk es un proyecto desarrollado durante el HackaTec del Instituto Tecnologico de Nuevo Leon, enfocado en facilitar la comunicacion de personas con dificultades o ausencia del habla mediante una solucion accesible, visual e intuitiva.

## Descripcion

El proyecto combina:

- Una landing page informativa para presentar la propuesta.
- Un prototipo en Arduino / ESP32.
- Integracion con Telegram para enviar mensajes y alertas.
- Tarjetas visuales con necesidades, personas y tipos de dolor para comunicar mensajes de forma rapida.

La idea principal es ofrecer una alternativa practica para expresar necesidades basicas y mejorar la comunicacion en contextos de apoyo, cuidado o atencion.

## Caracteristicas

- Interfaz web responsiva.
- Secciones de presentacion del proyecto, equipo, tecnologia y contacto.
- Carrusel del equipo de trabajo.
- Grafica informativa con Chart.js.
- Chatbot integrado en la landing page.
- Prototipo fisico basado en Arduino / ESP32.
- Envio de mensajes a Telegram desde el dispositivo.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Chart.js
- Arduino C++
- ESP32
- UniversalTelegramBot

## Estructura del proyecto

- `index.html`: pagina principal del proyecto.
- `styles.css`: estilos visuales de la landing page.
- `main.js`: logica de interaccion de la interfaz web.
- `Hackatec.ino`: codigo del prototipo en Arduino / ESP32.
- `Imagenes/`: recursos visuales, fotos y logo del proyecto.
- `Tarjetas/`: tarjetas visuales de comunicacion.

## Prototipo Arduino / ESP32

El archivo `Hackatec.ino` contiene la logica del dispositivo:

- Se conecta a una red WiFi.
- Inicializa comunicacion con Telegram.
- Envia un mensaje de bienvenida al activarse.

El prototipo esta pensado como base para expandir el envio de mensajes segun la interaccion con botones o tarjetas fisicas.

## Landing page

Version publicada:

https://deltahbc2.github.io/EasyTalk/

## Equipo

- Cesar Oliva
- Andre Anzures
- Oscar Santiago
- Sergio Acosta

## Asesoria

- Laura Gomez, Dra. en Computacion

## Institucion

Instituto Tecnologico de Nuevo Leon

## Contacto

- Correo: `proyectos@deltahbc.com`

## Reconocimiento

Proyecto realizado por DeltaHBC para HackaTec 2025, con enfoque en soluciones tecnologicas con impacto social.
