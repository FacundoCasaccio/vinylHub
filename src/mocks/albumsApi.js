
const products = [
    {id: 1, category: "albums", name: "Blurryface", artist: "Twenty One Pilots", year: 2015, source: "https://i.postimg.cc/YSLDZQYY/blurryface.jpg", stock: 25, price: 20},
    {id: 2, category: "albums", name: "Trench", artist: "Twenty One Pilots", year: 2018, source: "https://i.postimg.cc/4yPWVPRk/trench.jpg", stock: 5, price: 20},
    {id: 3, category: "albums", name: "Demon Days", artist: "Gorillaz", year: 2005, source: "https://i.postimg.cc/9M3ghzYS/demon-Days.webp", stock: 5, price: 20},
    {id: 4, category: "albums", name: "Renaissance", artist: "Polyphia", year: 2016, source: "https://i.postimg.cc/h41ykDzy/renaissance.jpg", stock: 5, price: 20},
    {id: 5, category: "albums", name: "New Levels New Devils", artist: "Polyphia", year: 2018, source: "https://i.postimg.cc/rsMhDbbN/newlevels-New-Devils.jpg", stock: 5, price: 20},
    {id: 6, category: "albums", name: "Swimming", artist: "Mac Miller", year: 2018, source: "https://i.postimg.cc/rmSnFchp/swimming.png", stock: 5, price: 20},
    {id: 7, category: "shirts", name: "Efflorence", artist: "Polyphia", year: 2016, source: "https://i.postimg.cc/SxJL9kkj/Polyphia.jpg", stock: 5, price: 15},
    {id: 8, category: "shirts", name: "Mac in Black", artist: "Mac Miller", year: 2022, source: "https://i.postimg.cc/nhg4Ygh2/macmiller.jpg", stock: 5, price: 15},
    {id: 9, category: "shirts", name: "Blurryface cover", artist: "Twenty One Pilots", year: 2015, source: "https://i.postimg.cc/NF8tb3tH/top.jpg", stock: 5, price: 15},
    {id: 10, category: "shirts", name: "The band", artist: "Gorillaz", year: 2021, source: "https://i.postimg.cc/tCrt7Y0L/gorillaz.jpg", stock: 5, price: 15}
];

export const getProducts = (categoryId) => new Promise( (res, rej) => {
    const filteredProducts = products.filter( product => product.category === categoryId);
    setTimeout( () => {
        categoryId
        ? res(filteredProducts)
        : res(products); 
    }, 2000) 
});

export const getItem = (id) => new Promise( (res, rej) =>
        setTimeout( () => res(products[id]), 2000)
    )                

