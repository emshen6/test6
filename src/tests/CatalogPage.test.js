const puppeteer = require('puppeteer');

describe('catalog page', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: 'new' });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('page loads correctly', async () => {
        await page.goto('http://localhost:5173/catalog');
        await page.waitForSelector('#title');
        const html = await page.$eval('#title', (e) => e.innerHTML);

        expect(html).toBe('Каталог');
    }, 10000);
});
