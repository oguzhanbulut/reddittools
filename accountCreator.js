const puppeteer = require("puppeteer");


async function scraper(url) {
    const browser = await puppeteer.launch(
        {

            headless: false,
            // userDataDir: './reddit-' + email,
            ignoreHTTPSErrors: true,
        }
    )
    const page = await browser.newPage()
    await page.goto(url) // Go to reddit homepage

    await page.waitForTimeout(500)

    let i = 0;
    let randomInt = Math.floor(Math.random() * 10);
    while(i < randomInt){
        i++
    }

    await searchInput(page)
    await trendingIcon(page)
    await clickRandomPost(page)
    await clickRandomUpvote(page)

    let email = "email"
    let password = "password"

    await enterEmailAddress(page, email)
    await clickContinueButton(page)
    await usernameSuggestionClick(page)
    await selectRandomUsername(page)
    await enterPassword(page, password)
    await clickSignUpButton(page)
    await clickRedditLogo(page)




}

async function searchInput(page){
    try {
        const searchInput = await page.waitForXPath("//*[@id='header-search-bar']", {}) // Wait for search input
        try {
            const searchInputClick = await page.$x("//*[@id='header-search-bar']") // Search input xpath selector
            await searchInputClick[0].click() // Search input click
            await page.waitForTimeout(2000)
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function trendingIcon(page){
    try {
        const trendingIcon = await page.waitForXPath("//*[@style='--posttitletextcolor:#1A1A1B;']", {}) // Wait for trending title
        await page.waitForTimeout(2000)
        try {
            const trendingIconClick = await page.$x("//*[@style='--posttitletextcolor:#1A1A1B;']") // Trend topic title xpath
            const trendingIconCount =  trendingIconClick.length // Trend topic count
            await trendingIconClick[Math.floor(Math.random() * (trendingIconCount))].click() // Go to random trend topic page
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function clickRandomPost(page){
    try {
        const trendingIcon = await page.waitForXPath("//*[@style='--posttitletextcolor:#222222;']", {}) // Wait for trend post title
        await page.waitForTimeout(2000)
        try {
            const trendingIconClick = await page.$x("//*[@style='--posttitletextcolor:#222222;']") // Post title xpath
            const trendingIconCount =  trendingIconClick.length // Trend post count
            await trendingIconClick[Math.floor(Math.random() * (trendingIconCount))].click() // Go to random trend topic random post
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function clickRandomUpvote(page){
    try {
        const upvoteButton = await page.waitForXPath("//button[@aria-label='upvote']", {}) // Wait for upvote button
        await page.waitForTimeout(2000)
        try {
            const upvoteButtonClick = await page.$x("//button[@aria-label='upvote']") // Upvote button xpath
            const upvoteButtonCount =  upvoteButtonClick.length // Upvote button count
            await upvoteButtonClick[Math.floor(Math.random() * (upvoteButtonCount))].click() // Click random upvote button
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}

async function enterEmailAddress(page, email){
    try {

        const regEmail = await page.waitForXPath("//label[@for='regEmail']", {}) // Wait for email input
        await page.waitForTimeout(1000)
        try {
            await page.$eval('input[name=email]', (el, value) => el.value = value, email); // Enter email address for email input
            await page.waitForTimeout(1000)
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function clickContinueButton(page){
    try {
        const clickContinueButton = await page.waitForXPath("//button[@data-step='email']", {}) // Wait for continue button
        await page.waitForTimeout(1000)
        try {
            const clickContinueButtonClick = await page.$x("//button[@data-step='email']") // continue button xpath
            await clickContinueButtonClick[0].click() // Click continue button
            await page.waitForTimeout(1000)
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function usernameSuggestionClick(page){
    try {
        const usernameSuggestionButton = await page.waitForXPath("//a[@class='Onboarding__usernameRefresh']", {}) // Wait for usernameSuggestion button
        await page.waitForTimeout(2000)
        try {
            const usernameSuggestionButtonClick = await page.$x("//a[@class='Onboarding__usernameRefresh']") // usernameSuggestion button xpath
            await usernameSuggestionButtonClick[0].click() // Click usernameSuggestion button
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function selectRandomUsername(page){
    try {
        const selectUsernameButton = await page.waitForXPath("//a[@class='Onboarding__usernameSuggestion']", {}) // Wait for selectUsername button
        await page.waitForTimeout(2000)
        try {
            const selectUsernameButtonClick = await page.$x("//a[@class='Onboarding__usernameSuggestion']") // selectUsername button xpath
            const selectUsernameCount =  selectUsernameButtonClick.length // Username count
            await selectUsernameButtonClick[Math.floor(Math.random() * selectUsernameCount)].click() // Click random username
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function enterPassword(page, password){
    try {
        const regPassword = await page.waitForXPath("//label[@for='regPassword']", {}) // Wait for password input
        await page.waitForTimeout(1000)
        try {
            await page.$eval('input[name=password]', (el, value) => el.value = value, password); // Enter password for password input
            await page.waitForTimeout(1000)
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function clickSignUpButton(page){
    try {
        const clickSignUpButton = await page.waitForXPath("//button[@data-step='username-and-password']", {}) // Wait for SignUp button
        await page.waitForTimeout(2000)
        try {
            const clickSignUpButtonClick = await page.$x("//button[@data-step='username-and-password']") // SignUp button xpath
            await clickSignUpButtonClick[0].click() // Click SignUp button
            await page.waitForTimeout(2000)
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}

async function clickRedditLogo(page){
    try {
        const redditLogo = await page.waitForXPath("//a[@aria-label='Home']", {}) // Wait for reddit logo
        await page.waitForTimeout(2000)
        try {
            const redditLogoClick = await page.$x("//a[@aria-label='Home']") // Reddit logo xpath
            await redditLogoClick[0].click() // Go to reddit homepage
        }catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e)
    }
}
async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}


let url = "https://reddit.com/"
scraper(url).then(r => console.log(r))
