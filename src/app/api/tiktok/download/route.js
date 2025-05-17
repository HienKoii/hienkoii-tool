import puppeteer from "puppeteer";

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url) {
      return Response.json({ error: "Thiếu url TikTok" }, { status: 400 });
    }

    // Bật browser ảo với giao diện (headful mode) và slowMo để dễ quan sát
    // const browser = await puppeteer.launch({ headless: false, slowMo: 100, args: ["--no-sandbox"] });

    // Chạy browser ẩn (headless), không slowMo
    const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto("https://snaptik.app/vn2", { waitUntil: "networkidle2" });

    // Kiểm tra và đóng popup nếu có
    const closeBtn = await page.$('[aria-label="close"]');
    if (closeBtn) {
      await closeBtn.click();
    }

    // Nhập link TikTok vào form
    await page.type("#url", url);

    await page.click("button[type='submit']");
    try {
      await page.waitForSelector(".button.download-file", { timeout: 30000 });
    } catch (e) {
      const html = await page.content();
      await browser.close();
      return Response.json({ error: "Không tìm thấy nút tải về", html }, { status: 500 });
    }

    // Lấy link video đầu tiên (không logo)
    const videoUrl = await page.$eval(".button.download-file", (el) => el.href);
    await browser.close();

    if (!videoUrl) {
      return Response.json({ error: "Không lấy được link video" }, { status: 500 });
    }
    return Response.json({ videoUrl });
  } catch (err) {
    return Response.json({ error: "Lỗi xử lý: " + err.message }, { status: 500 });
  }
}
