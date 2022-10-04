//The Fungible Asset Standard

// Created By Rahat Khan Tusar
const fs = require("fs")
const imageDir= fs.readdirSync("./build/assets")
imageDir.forEach((img) =>{
    //JSON METADATA
    const metadata = {
        name: `CryptoCats #${img.split(".")[0]}`,//Looks like CryptoPunks style
        description:"An image in the NFT collection",
        image:`https://nsugenesis.com/nfts/${img.split(".")[0]}.png`,
       
             
       
    }
    fs.writeFileSync(
    `./build/assets/${img.split(".")[0]}.json`,
    JSON.stringify(metadata)
    
    )
    
    
})