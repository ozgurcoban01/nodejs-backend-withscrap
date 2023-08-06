const cheerio = require("cheerio");
const axios = require("axios");


// Function starts here
async function getFormulaOneDrivers() {
    try {
      // Fetch data from URL and store the response into a const
      const response = await axios('https://www.trendyol.com/nike-air-force-1-y-s8056');
      // Convert the response into text

      // Load body data
      const $ = cheerio.load(response.data);
      
      // Selecting Each col-12 class name and iterate through the list
      const data=$(".srch-prdcts-cntnr > div:nth-child(3)> div:nth-child(1) > .prdct-cntnr-wrppr > .p-card-wrppr")
        data.map((i,el)=>{
            const price=$(el).find(".card-border > a > .product-down > .price-promotion-container > .prc-cntnr  > .prc-box-dscntd").text()
            console.log(price);
        })
        
      
    } catch (error) {
      console.log(error);
    }
  }
  
  // Run getFormulaOneDrivers
  getFormulaOneDrivers();