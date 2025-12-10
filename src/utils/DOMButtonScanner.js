/**
 * DOMButtonScanner
 * ----------------
 * Escanea el DOM buscando elementos tipo botón o clicables.
 * Muestra sus atributos, texto y HTML en la consola.
 *
 * Uso:
 *   - Puedes pegarlo en la consola.
 *   - O importarlo y llamarlo como función en tu proyecto.
 *
 * Autor: Pedro Yanez (2025)
 */

export function DOMButtonScanner ({
  rootSelector = '#main',
  searchTerms = ['send', 'enviar', 'paper', 'plane'],
  maxPreview = 80
} = {}) {
  const main = document.querySelector(rootSelector) || document.body
  const nodes = Array.from(main.querySelectorAll('button, [role="button"], div[role="button"], span[role="button"]'))

  if (!nodes.length) {
    console.log(`⚠️ No se encontraron elementos tipo button/role=button en "${rootSelector}". Buscando en todo el documento...`)
    const all = Array.from(document.querySelectorAll('button, [role="button"], div[role="button"], span[role="button"]'))
    console.log('📊 Total buttons found in document:', all.length)
    console.log(all.slice(0, 40).map((n, i) => ({ i, outerHTML: n.outerHTML.slice(0, 600) })))
    return
  }

  const results = nodes.map((el, i) => {
    const attrs = {}
    for (const a of el.attributes) attrs[a.name] = a.value
    return {
      index: i,
      tag: el.tagName.toLowerCase(),
      text: (el.innerText || '').trim().slice(0, maxPreview),
      outerHTML: el.outerHTML.slice(0, 800),
      attrs
    }
  })

  console.log(`✅ Candidates inside "${rootSelector}":`, results.length)
  console.log(results.slice(0, 80))

  const likely = results.filter(r => {
    const s = JSON.stringify(Object.values(r.attrs)).toLowerCase()
    const t = (r.text || '').toLowerCase()
    return searchTerms.some(term => s.includes(term) || t.includes(term))
  })

  console.log(`🎯 Posibles candidatos que contienen ${searchTerms.join('/')}:`, likely.length, likely)

  return likely
}

if (typeof window !== 'undefined' && !window.__DOMButtonScannerLoaded) {
  window.__DOMButtonScannerLoaded = true
  console.log('🚀 Ejecutando DOMButtonScanner...')
  DOMButtonScanner()
}
