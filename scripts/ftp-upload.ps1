param(
  [string]$Server = "fgrsolutions.com.br",
  [string]$Username = "u149629279.fgrsolutions.com.br",
  [string]$Password = "",
  [string]$LocalDir = "dist",
  [string]$RemoteDir = "/public_html"
)

$ErrorActionPreference = "Stop"

function Upload-Directory {
  param(
    [string]$ftpUrl,
    [string]$localPath
  )

  Get-ChildItem -Path $localPath -Recurse | ForEach-Object {
    $relativePath = $_.FullName.Substring((Resolve-Path $localPath).Path.Length)
    $relativePath = $relativePath -replace "^\\", ""
    $remotePath = ($ftpUrl.TrimEnd('/') + '/' + ($relativePath -replace "\\", "/"))

    if ($_.PSIsContainer) {
      try {
        $req = [System.Net.FtpWebRequest]::Create($remotePath)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $req.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $req.GetResponse().Close()
      } catch {}
    } else {
      $req = [System.Net.FtpWebRequest]::Create($remotePath)
      $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
      $req.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
      $req.UseBinary = $true
      $req.UsePassive = $true
      $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
      $req.ContentLength = $bytes.Length
      $req.GetRequestStream().Write($bytes, 0, $bytes.Length)
      $req.GetRequestStream().Close()
      $req.GetResponse().Close()
      Write-Host "Uploaded: $relativePath"
    }
  }
}

if (!(Test-Path $LocalDir)) { throw "LocalDir not found: $LocalDir" }

$baseUrl = "ftp://$Server$RemoteDir"
Upload-Directory -ftpUrl $baseUrl -localPath $LocalDir
Write-Host "Upload complete"
