async function sendMessage (scriptText, timeSpeed = 250) {
  const lines = scriptText
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line)

  const main = document.querySelector('#main')
  const textarea = main.querySelector('div[contenteditable="true"]')

  if (!textarea) {
    throw new Error('No hay una conversación abierta')
  }

  try {
    for (const line of lines) {
      textarea.focus()

      // TODO: execCommand is Deprecated
      document.execCommand('insertText', false, line)

      textarea.dispatchEvent(new Event('input', { bubbles: true }))

      await new Promise((resolve) => setTimeout(resolve, timeSpeed))

      const sendButton =
        main.querySelector('[data-testid="send"]') ||
        main.querySelector('[data-icon="send"]')

      sendButton.click()

      await new Promise((resolve) => setTimeout(resolve, timeSpeed))
    }

    return lines.length
  } catch (error) {
    console.error(error)
    throw error
  }
}

/*
  MESSAGES TO SEEND.
  EDIT THE STRINGS
  on the function sendMessage()
*/

sendMessage(`
Whatsapp script sender
Creado por Pedro Yanez
Mas sobre el proyecto en
https://github.com/wotanCode/WhatsappScriptSender
Borra esto y escribe tu mensaje personalizado aquí
`)
  .then((e) => console.log(`Código finalizado, ${e} mensajes enviados`))
  .catch(console.error)
