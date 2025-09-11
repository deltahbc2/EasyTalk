//Importa las librerias a utilizar
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <UniversalTelegramBot.h>

//Credenciales del internet
const char* ssid = "HackaTecNM";
const char* password = "Jack-1TD";

//Credenciales del bot de telegram
#define BOT_TOKEN "8353346405:AAHeaib5uYi_sQzBtT7-J1XlFVNkg5MSb5o"
#define CHAT_ID "5696380344"

//Define las variables de entrada y salida
#define OKbtn 5

//Internet y Bot de Telegram
WiFiClientSecure client;
UniversalTelegramBot bot(BOT_TOKEN, client);

//Estructura de los mensajes
struct Opcion {
  const char* nombre;
  const char* imagen;
  const char* mensaje;
};

// Diccionario de necesidades
Opcion necesidades[] = {
  {"Comida", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Comida.png", "¡Quiero comer!🥪"},
  {"Agua", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Agua.png", "¡Quiero agua🥤!"},
  {"Baño", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Bano.png", "¡Necesito ir al baño🚽!"},
  {"Ducha", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Ducha.png", "¡Necesito ducharme🚿!"}
};
// Diccionario de personas
Opcion personas[] = {
  {"Niño", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Ninos.png", "¡Quiero ver a algun niño🧒👧!"},
  {"Adulto", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Adultos.png", "Quiero ver a algun adulto👨👩!"},
};
// Diccionario de dolores
Opcion dolores[] = {
  {"Cabeza", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Dolorcabeza.png", "¡Me duele la cabeza🤕!"},
  {"Espalda", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Dolorespalda.png", "¡Me duele la espalda🤕!"},
  {"Piernas", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Dolorpiernas.png", "¡Me duelen las piernas🤕!"},
  {"Estomago", "https://github.com/CesarOliva/EasyTalk/blob/main/Tarjetas/Dolorestomago.png", "¡Me duele el estomago🤕!"}
};

//Setup
void setup(){
  Serial.begin(115200);
  
  //Inicializa los botones
  pinMode(OKbtn, INPUT);

  //Inicializa el WIFI
  WiFi.mode(WIFI_STA);
  WiFi.setSleep(false);
  WiFi.begin(ssid, password);

  Serial.print("Conectando a WiFi...");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConectado");

  client.setInsecure();

  //Envia mensaje de Bienvenida
  bot.sendMessage(CHAT_ID, "🚀EasyTalk Activado", "");
}

//Ciclo loop a ejecutar constantemente
void loop() {
  
  delay(10000);
}