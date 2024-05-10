// Función asincrónica para enviar un script línea por línea a un cuadro de texto editable en una página web
async function enviarScript (scriptText, tiempoDeEspera = 250) {
  // Dividir el texto del script en líneas, eliminar espacios y filtrar líneas vacías
  const lines = scriptText
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line)

  // Obtener referencias a elementos DOM relevantes
  const main = document.querySelector('#main')
  const textarea = main.querySelector('div[contenteditable="true"]')

  // Verificar si hay un cuadro de texto editable presente
  if (!textarea) {
    throw new Error('No hay una conversación abierta')
  }

  try {
    // Iterar sobre cada línea del script
    for (const line of lines) {
      // Foco en el cuadro de texto editable
      textarea.focus()

      // TODO: execCommand is Deprecated
      // Insertar el texto de la línea actual en el cuadro de texto
      document.execCommand('insertText', false, line)

      // Despachar un evento de entrada en el cuadro de texto
      textarea.dispatchEvent(new Event('input', { bubbles: true }))

      // Esperar un tiempo especificado antes de continuar con la siguiente línea
      await new Promise((resolve) => setTimeout(resolve, tiempoDeEspera))

      // Encontrar el botón de enviar mensaje en la página
      const sendButton =
        main.querySelector('[data-testid="send"]') ||
        main.querySelector('[data-icon="send"]')

      // Hacer clic en el botón de enviar mensaje
      sendButton.click()

      // Esperar un tiempo antes de continuar con la siguiente línea
      await new Promise((resolve) => setTimeout(resolve, tiempoDeEspera))
    }

    // Devolver la cantidad total de líneas enviadas con éxito
    return lines.length
  } catch (error) {
    // Manejar errores e imprimir mensajes de error en la consola
    console.error(error)
    throw error
  }
}

/*
  MESSAGES TO SEEND.
  EDIT THE STRINGS
  on the function enviarScript()
*/

enviarScript(`
Whatsapp script sender
Creado por Pedro Yanez
Mas sobre el proyecto en
https://github.com/wotanCode/WhatsappScriptSender
Borra esto y escribe tu mensaje personalizado aquí
`)
  .then((e) => console.log(`Código finalizado, ${e} mensajes enviados`))
  .catch(console.error)
