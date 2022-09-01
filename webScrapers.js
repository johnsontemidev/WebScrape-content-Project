const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[1]/div[2]/div[1]/div/div/div/div/div/div[2]/div[2]/div[1]/div[1]/span');
    const txt = await el.getProperty('textContent');
    const price = await txt.jsonValue();

    const [el2] = await page.$x('/html/body/div[1]/div[2]/div[1]/div/div/div/div/div/div[2]/div[2]/div[3]/div[2]/div/span[1]/a');
    const txt2 = await el2.getProperty('textContent');
    const seller = await txt2.jsonValue();

    const [el3] = await page.$x('/html/body/div[1]/div[2]/div[1]/div/div/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/span');
    const txt3 = await el3.getProperty('textContent');
    const avail = await txt3.jsonValue();

    const [el4] = await page.$x('//*[@id="body"]/div[10]/div[1]/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div/div/div[1]/span');
    const txt4 = await el4.getProperty('textContent');
    const nextOfferPrice = await txt4.jsonValue();

    const [el5] = await page.$x('/html/body/div[10]/div[1]/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div/div/div[1]/div[1]/div/div[1]/span');
    const txt5 = await el5.getProperty('textContent');
    const nextOfferAvail = await txt5.jsonValue();


    console.log({price, seller, avail, nextOfferPrice, nextOfferAvail});

    browser.close();

}

scrapeProduct('https://www.takealot.com/russell-hobbs-2200w-crease-control-iron/PLID34147865');