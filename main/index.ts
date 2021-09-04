import { BrowserWindow, app, ipcMain } from "electron";
import { resolve } from "path";
const main = () => {
  const window = new BrowserWindow({
    show: false,
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // window.webContents.openDevTools();
  window.setMenu(null);
  window.loadFile(resolve(__dirname, "../front/index.html"));
  window.setIcon(resolve(__dirname, "icon.png"));
  window.once("ready-to-show", () => window.show());
};

app.whenReady().then(() => {
  main();
});

ipcMain.handle("integration", (_, args) => {
  console.log(args);
});
