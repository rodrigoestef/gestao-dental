import { BrowserWindow, app } from "electron";
import { resolve } from "path";
const main = () => {
  const window = new BrowserWindow({ show: false, width: 800, height: 600 });
  window.setMenu(null);
  window.loadFile(resolve(__dirname, "../front/index.html"));
  window.setIcon(resolve(__dirname, "icon.png"));
  window.once("ready-to-show", () => window.show());
};

app.whenReady().then(() => {
  main();
});
