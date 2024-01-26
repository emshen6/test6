const puppeteer = require('puppeteer');

describe('cart page', () => {
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
        await page.waitForSelector('#title');
        const html = await page.$eval('#title', (e) => e.innerHTML);

        expect(html).toBe('Корзина');
    }, 10000);

    test('add one item in cart', async () => {
        await page.goto('http://localhost:5173/catalog/1');
        await page.waitForSelector('#addToCart');
        const addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await page.goto('http://localhost:5173/cart');
        await page.waitForSelector('#itemsInCart');
        const itemsInCart = await page.$$('#itemsInCart > *');

        expect(itemsInCart.length).toBe(1);
    }, 10000);

    test('add two same items in cart', async () => {
        await page.goto('http://localhost:5173/catalog/1');
        await page.waitForSelector('#addToCart');
        const addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await addToCartButton.click();
        await page.goto('http://localhost:5173/cart');
        await page.waitForSelector('button');
        const buttons = await page.$$('button');
        const count = await (await buttons[1].getProperty('textContent')).jsonValue();

        expect(count).toBe('2');
    }, 100000);

    test('add two different items in cart', async () => {
        await page.goto('http://localhost:5173/catalog/1');
        await page.waitForSelector('#addToCart');
        let addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await page.goto('http://localhost:5173/catalog/2');
        await page.waitForSelector('#addToCart');
        addToCartButton = await page.$('#addToCart');
        await addToCartButton.click();
        await page.goto('http://localhost:5173/cart');
        await page.waitForSelector('#itemsInCart');
        const itemsInCart = await page.$$('#itemsInCart > *');

        expect(itemsInCart.length).toBe(2);
    }, 10000);

    test('test form', async () => {
        await page.goto('http://localhost:5173/catalog/1');
        await page.waitForSelector('#addToCart');
        const addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await page.goto('http://localhost:5173/cart');
        await page.type('#input1', 'a');
        await page.type('#input2', '89999999999');
        await page.type('#input3', 'a');
        await page.type('#input4', 'a@gmail.com');
        await page.type('#input5', 'a');
        const buttons = await page.$$('button');

        await buttons[4].click();
        function delay(time) {
            return new Promise(function (resolve) {
                setTimeout(resolve, time);
            });
        }
        await delay(2000);
        const itemsInCart = await page.$$('#itemsInCart > *');

        expect(itemsInCart.length).toBe(0);
    }, 10000);
});
