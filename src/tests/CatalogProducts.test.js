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
        await page.waitForSelector('#products');
        const elements = await page.$$('#products > *');
        console.log(elements);
        expect(elements.length).toBeGreaterThan(0);
    }, 10000);
});
