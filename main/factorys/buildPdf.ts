import puppeteer from "puppeteer-core";
export default async (path: string, id: number) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "chrome-win/chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:4600/" + id);
  await page.pdf({ path });

  await browser.close();
};
