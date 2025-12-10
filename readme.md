# WhatsappScriptSender

Script diseñado para enviar mensajes personalizados a través de WhatsApp Web. Diseñado para trollear o molestar, ideal para responder a intentos de phishing.

Este proyecto se inspiró en [SendScriptWhatsApp](https://github.com/Matt-Fontes/SendScriptWhatsApp), creado por Matt Fontes. La idea surgió al ver la utilidad de su herramienta para enviar mensajes de WhatsApp de forma rápida y automatizada, lo que motivó la creación de una solución con leves mejoras.

Úselo bajo su propio riesgo.

## Instrucciones de uso

1. En el proyecto, diríjase al directorio `./src/` y abra el archivo con su editor de código preferido o el script de su preferencia. Para más información sobre él, haga clic "[aquí](#scripts)".
2. Al final del archivo se encuentra el mensaje a personalizar. Este se encuentra en la función `sendMessage`.

```js
/*
  MESSAGES TO SEND.
  EDIT THE STRINGS
  on the function sendMessage()
*/

sendMessage(`
Creado por Pedro Yanez
Borra esto y escribe tu mensaje personalizado aquí
`)
```

3. Una vez editado el mensaje de su preferencia, copie y pegue todo el contenido del archivo.
4. Desde el navegador, idealmente en el computador, abra WhatsApp Web. Ingrese a una ventana de chat a la cual desea enviar el script, luego inspeccione cualquier elemento, diríjase a la consola. Pegue todo el script en la consola del navegador.
5. Vea el mundo arder.

## Scripts

Todos los scripts se envían con una velocidad de 250 milisegundos, esto se define en la propia función del script de la siguiente manera:

```js
timeSpeed = 250
```

Actualmente, el proyecto cuenta con los siguientes scripts:

* `script_001`: Base script. Envía mensajes personalizados por WhatsApp Web.
* `DOMButtonScanner`: Utilidad para detectar cambios en la estructura del DOM de WhatsApp Web y localizar dinámicamente el botón de envío (`Send`).

> ⚙️ **Nota:** Desde la versión `v2.0.0`, WhatsApp Web cambió su estructura interna, lo que rompió el selector anterior.
> El script base fue actualizado y ahora utiliza `aria-label` y otros *fallbacks* para funcionar nuevamente.
> El nuevo `DOMButtonScanner.js` sirve como herramienta auxiliar para futuras detecciones automáticas.

## Utils

En el directorio `./src/utils` se encuentran algunas utilidades de interés.

* `Shrek-movie-script.txt`: Contiene todo el guion de la película de Shrek, por si deseas enviar un mensaje que tarde más de 30 minutos en enviarse.

## Contribuciones

¡Tu contribución es bienvenida para mejorar este proyecto! Si tienes ideas, sugerencias o encuentras errores, por favor, siéntete libre de abrir un problema en el [repositorio del proyecto](https://github.com/pedroelhumano/WhatsappScriptSender/issues).

Si deseas contribuir directamente al código, puedes hacer fork sobre el proyecto, sigue estos pasos para configurar el entorno de desarrollo local:

1. **Clonar el Repositorio:**

   ```
   git clone https://github.com/pedroelhumano/WhatsappScriptSender.git
   ```

2. **Instalar Dependencias:**

   ```
   cd WhatsappScriptSender
   npm install
   ```

3. **Realizar Cambios:** Haz tus ajustes en el código base.

4. **Enviar Pull Request:**
   Sube tus cambios a una rama y crea un Pull Request al repositorio principal. Describe brevemente las mejoras que realizaste.

¡Gracias por contribuir al proyecto! 😊

---

© Pedro Yanez. Casi todos los derechos reservados...

---

#### Licencia

Este proyecto está bajo la Licencia MIT.
