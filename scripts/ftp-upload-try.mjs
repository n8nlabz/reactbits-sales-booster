import { Client } from 'basic-ftp'
import fs from 'fs'
import path from 'path'

const server = '46.202.145.89'
const users = ['u149629279.fgrsolutions.com.br', 'u149629279']
const password = 'Toddy745033'
const localDir = 'dist'
const remoteDir = '/public_html'
const secureOptions = [true, false]

async function uploadDir(client, localPath, remotePath) {
  await client.ensureDir(remotePath)
  const entries = fs.readdirSync(localPath, { withFileTypes: true })
  for (const entry of entries) {
    const lp = path.join(localPath, entry.name)
    const rp = path.posix.join(remotePath, entry.name)
    if (entry.isDirectory()) {
      await uploadDir(client, lp, rp)
    } else {
      await client.uploadFrom(lp, rp)
      console.log(`Uploaded: ${rp}`)
    }
  }
}

async function tryCombo(user, secure) {
  const client = new Client()
  client.ftp.verbose = true
  try {
    console.log(`Trying login: user='${user}', secure=${secure}`)
    await client.access({ host: server, user, password, secure, secureOptions: { rejectUnauthorized: false }, passive: true })
    console.log('Login OK')
    await uploadDir(client, localDir, remoteDir)
    console.log('Upload OK')
    client.close()
    return true
  } catch (e) {
    console.log('Failed:', e.message)
    client.close()
    return false
  }
}

async function main() {
  if (!fs.existsSync(localDir)) { console.error('Local dir not found:', localDir); process.exit(1) }
  for (const user of users) {
    for (const secure of secureOptions) {
      const ok = await tryCombo(user, secure)
      if (ok) return
    }
  }
  console.error('All combinations failed. Please verify FTP credentials.')
  process.exit(1)
}

main()
