import { Client } from 'basic-ftp'
import fs from 'fs'
import path from 'path'

const server = process.env.FTP_SERVER || 'fgrsolutions.com.br'
const user = process.env.FTP_USERNAME || 'u149629279.fgrsolutions.com.br'
const password = process.env.FTP_PASSWORD || ''
const localDir = process.env.LOCAL_DIR || 'dist'
const remoteDir = process.env.REMOTE_DIR || '/public_html'
const secure = process.env.FTP_SECURE === 'false' ? false : true
const port = process.env.FTP_PORT ? Number(process.env.FTP_PORT) : 21

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

async function main() {
  if (!fs.existsSync(localDir)) {
    console.error('Local dir not found:', localDir)
    process.exit(1)
  }
  const client = new Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: server,
      port,
      user,
      password,
      secure,
      secureOptions: { rejectUnauthorized: false },
      passive: true,
    })
    await uploadDir(client, localDir, remoteDir)
  } catch (e) {
    console.error('FTP error:', e.message)
    process.exit(1)
  } finally {
    client.close()
  }
}

main()
