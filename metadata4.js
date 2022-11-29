//The Fungible Asset Standard(Solana Blockchain)

// Created By Rahat Khan Tusar
const fs = require("fs")
const imageDir= fs.readdirSync("./build/assets")
imageDir.forEach((img) =>{
    //JSON METADATA
    const metadata = {
        name: `CryptoCats #000${img.split(".")[0]}`,
        symbol:"C",
        description:"Collection of 5 numbers on the blockchain. This is the number 1/5.",
        external_url: "https://github.com/r3k4t",
        seller_fee_basis_points: 1000,
        image: `${img.split(".")[0]}.png`,
        attributes: [
            {trait_type: "Layer-1",  value: "0"},
            {trait_type: "Layer-2",  value: "0"}, 
            {trait_type: "Layer-3",  value: "0"},
            {trait_type: "Layer-4",  value: `${img.split(".")[0]}`}
        ],
        properties : {
            creators: [{address: "FJeyKmhpGmF5BRM7FB6iiPygBGTjtxmT5o9M4Qbg1Yx7", share: 100}],
            files: [{uri: `${img.split(".")[0]}.png`, type: "image/png"}],

        },
        category:"image"    
    }
    fs.writeFileSync(
    `./build/assets/${img.split(".")[0]}.json`,
    JSON.stringify(metadata)
    
    )
    
    
})