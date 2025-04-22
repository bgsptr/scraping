import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function scraper() {
    // write your scraping logic here

    const options = new chrome.Options().addArguments('--headless');
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    const targetUrl = `https://www.examtopics.com/discussions/amazon/view/102904-exam-aws-certified-developer-associate-dva-c02-topic-1/`;

    try {   
        // navigate to the target webpage
        await driver.get(targetUrl);

        const html = await driver.findElement(By.className("question-body"))
        console.log(html);
  
    } catch (error) {  
        // handle error  
        console.error('An error occurred:', error);
    } finally {
        // quit browser session 
        await driver.quit();
    }
}
 
scraper();