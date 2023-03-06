const productsArray = [
    {
        id: 'price_1MhA8xSJ0IlIJKWf6yRCHFoW',
        name: 'God Of War',
        price: 999,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGArHcRJLnCPnuE4OfboRDbJqVLR-uSTGYHg&usqp=CAU',
    },
    {
        id: "price_1MhAAtSJ0IlIJKWfL2rMtB5j",
        name: 'Clash of Clans',
        price: 4000,
        image: 'https://m.media-amazon.com/images/I/91ORNgyTf2L.png',
    },
    {
        id: "price_1MhAG9SJ0IlIJKWfsjyntWyI",
        name: 'Gta 5',
        price: 1999,
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1671485100',
    },
    {
        id: "price_1MhAGtSJ0IlIJKWfIdMjQneJ",
        name: 'Dead Target',
        price: 810,
        image: 'https://thumbnails.pcgamingwiki.com/1/1e/DEAD_TARGET_VR_Zombie_Intensified_cover.jpg/300px-DEAD_TARGET_VR_Zombie_Intensified_cover.jpg',
    },
    {
        id: "price_1MhAHXSJ0IlIJKWffkt5Os31",
        name: 'Call Of Duty',
        price: 999,
        image: 'https://cdn1.dotesports.com/wp-content/uploads/2020/04/02142718/GarenaWorld.png',
    },
    {
        id: "price_1MhAI3SJ0IlIJKWfxCDuEujF",
        name: 'PUBG',
        price: 1050,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl_qq4X4asOWumLLIeuvnJQMn2yRIFCuvTQ&usqp=CAU',
    },
    {
        id: "price_1MhAKGSJ0IlIJKWffIAwvJWq",
        name: 'Gaming Chair',
        price: 9991,
        image: 'https://cdn.shopify.com/s/files/1/0356/9850/7909/products/ZEB-GC3000-pic1_1200x.jpg?v=1626158949',
    },
    {
        id: "price_1MhAKYSJ0IlIJKWf9yb2mcKx",
        name: 'Gaming Table',
        price: 11100,
        image: 'https://lmsin.net/cdn-cgi/image/h=750,w=750,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000010710373-1000010710372_01-2100.jpg',
    },
    {
        id: "price_1MhAKnSJ0IlIJKWfOCiIskvt",
        name: 'Gaming Headphones',
        price: 2000,
        image: 'https://images.immediate.co.uk/production/volatile/sites/3/2021/11/best-gaming-headsets-bfeeeaf.jpg?quality=90&resize=620,414',
    },
    {
        id: "price_1MhAL0SJ0IlIJKWf0a3V77GP",
        name: 'Gaming Keyboard and Mouse',
        price: 3780,
        image: 'https://m.media-amazon.com/images/I/71aARXewm6L._SL1500_.jpg',
    },
    {
        id: "price_1MhALFSJ0IlIJKWfLFIltYuf",
        name: 'Charger',
        price: 999,
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/NX/WJ/HC/119689523/3-in-1-wireless-charging-stand-wireless-charging-stand-multi-charger-500x500.jpeg',
    },
    {
        id: "price_1MhALTSJ0IlIJKWfjX8KqjXd",
        name: 'Press Start',
        price: 1000,
        image: 'https://m.media-amazon.com/images/I/81+SFgc5SoL.png',
    }
];

function getProductData(id) {
    let ProductData = productsArray.find(product =>
        product.id === id)

    if (ProductData === undefined) {
        console.log('product data not found from id ' + id);
        return undefined;
    }

    return ProductData;
}

export { productsArray, getProductData };