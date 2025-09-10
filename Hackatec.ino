//Importa las librerias a utilizar
#include <WiFi.h>
#include <WiFiClientSecure.h>necesita
#include <UniversalTelegramBot.h>

//Credenciales del internet
const char* ssid = "HackaTecNM";
const char* password = "Jack-1TD";

//Credenciales del bot de telegram
#define BOT_TOKEN "8353346405:AAHeaib5uYi_sQzBtT7-J1XlFVNkg5MSb5o"
#define CHAT_ID "5696380344"

//Internet y Bot de Telegram
WiFiClientSecure client;
UniversalTelegramBot bot(BOT_TOKEN, client);

//Diccionario de necesidades🥪🥪🥪
const necesidades = {
  "Comida": ["Comida.png", "¡Quiero comer!🥪"]🥪🥪🥪,
  "Agua": ["Agua.png", "¡Quiero agua🥤!"],
  "Baño": ["Bano.png", "¡Necesito ir al baño🚽!"],
  "Ducha": ["Ducha.png", "¡Necesito ducharme🚿!"]
}

const personas = {
  "Niño": ["Ninos.png", "¡Quiero ver a algun niño🧒👧!"],
  "Niño": ["Adolescentes.png", "¡Quiero ver a algun adolescente👨👩!"],  
  "Adulto": ["Adultos.png", "Quiero ver a algun adulto👨👩!"],  
  "Adulto Mayor": ["AdultosM.png", "Quiero ver a algun adulto mayor👴🧓!"],
}

const dolores = {
  "Cabeza": ["Dolorcabeza.png", "¡Me duele la cabeza🤕!"],
  "Espalda": ["Dolorespalda.png", "¡Me duele la espalda🤕!"],
  "Piernas": ["Dolorpiernas.png", "¡Me duelen las piernas🤕!"],
  "Estomago": ["Dolorestomago.png", "¡Me duele el estomago🤕!"]  
}

//Setup
void setup(){
  Serial.begin(115200);

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
  bot.sendMessage(CHAT_ID, "🚀CareTrack Activado", "");
}

//Ciclo loop a ejecutar constantemente
void loop() {
ó  delay(1000)
}
