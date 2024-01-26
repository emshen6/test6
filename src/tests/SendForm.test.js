const puppeteer = require('puppeteer');

describe('form sending', () => {
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
        await page.goto('http://localhost:5173/cart');
        await page.waitForSelector('#from');
        const form = await page.$eval('#form', (e) => e.innerHTML);

        console.log(form);
    }, 10000);
});
