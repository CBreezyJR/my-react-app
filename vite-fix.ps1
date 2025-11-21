Write-Host "Cleaning up Vite and npm cache..."

try { Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue } catch {}

if (Test-Path "../node_modules") {
    Write-Host "Removing node_modules..."
    Remove-Item -Recurse -Force "../node_modules"
}

if (Test-Path "../package-lock.json") {
    Write-Host "Removing package-lock.json..."
    Remove-Item -Force "../package-lock.json"
}

if (Test-Path "../node_modules/.vite") {
    Write-Host "Removing Vite cache..."
    Remove-Item -Recurse -Force "../node_modules/.vite"
}

Write-Host "Reinstalling dependencies..."
npm install --prefix ..

Write-Host "Clearing npm cache..."
npm cache clean --force

Write-Host "Starting Vite dev server..."
npm run dev --prefix ..
