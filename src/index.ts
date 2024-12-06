import { readFileSync } from 'node:fs'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

const ZIP_NAME = '<FILENAME>.zip'
const ZIP_FILEPATH = '/' + ZIP_NAME

app.get('/downloadZip', (c) => {
  c.header('Content-Disposition', `attachment; filename="${ZIP_NAME}"`)
  c.header('Content-Type', 'application/zip-compressed')

  return c.body(readFileSync(ZIP_FILEPATH))
})

const port = 3000

serve(
  {
    fetch: app.fetch,
    port
  },
  () => console.log(`Server running at http://localhost:${port}`)
)
