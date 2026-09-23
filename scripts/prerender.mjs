import { readFile, writeFile } from 'node:fs/promises'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const markup = renderToString(React.createElement(App))
  const outputPath = new URL('../dist/index.html', import.meta.url)
  const html = await readFile(outputPath, 'utf8')
  const rendered = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  if (rendered === html) {
    throw new Error('Le conteneur #root attendu est absent du fichier de production.')
  }

  await writeFile(outputPath, rendered, 'utf8')
} finally {
  await server.close()
}
