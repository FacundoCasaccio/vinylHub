const products = [
    {id: 1, name: "Blurryface", artist: "Twenty One Pilots", year: 2015, source: "https://i.postimg.cc/YSLDZQYY/blurryface.jpg"},
    {id: 2, name: "Trench", artist: "Twenty One Pilots", year: 2018, source: "https://i.postimg.cc/4yPWVPRk/trench.jpg"},
    {id: 3, name: "Demon Days", artist: "Gorillaz", year: 2005, source: "https://i.postimg.cc/9M3ghzYS/demon-Days.webp"},
    {id: 4, name: "Renaissance", artist: "Polyphia", year: 2016, source: "https://i.postimg.cc/h41ykDzy/renaissance.jpg"},
    {id: 5, name: "New Levels New Devils", artist: "Polyphia", year: 2018, source: "https://i.postimg.cc/rsMhDbbN/newlevels-New-Devils.jpg"},
    {id: 6, name: "Swimming", artist: "Mac Miller", year: 2018, source: "https://i.postimg.cc/rmSnFchp/swimming.png"}
];

export const getProducts = new Promise( (res, rej) => 
    setTimeout( () => res(products), 2000) 
);
