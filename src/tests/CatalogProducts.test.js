const puppeteer = require('puppeteer');

describe('catalog products page', () => {
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
        await page.waitForSelector('#category');
        const category = await page.$$('#category > *');

        for (const c of category) {
            console.log(c);
            await c.click();
            await page.waitForSelector('#products');
            const elements = await page.$$('#products > *');
            expect(elements.length).toBeGreaterThan(0);
        }
    }, 10000);
});
