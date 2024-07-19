export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    desc: string;
    img: string;
}

export const products: Product[] = [
    { id: 1, name: "Minimalist Watch", category: "accessories", price: 129.00, desc: "Elegant and functional timepiece with a premium leather strap.", img: "https://picsum.photos/seed/p1/600/400" },
    { id: 2, name: "Noise-Canceling Headphones", category: "electronics", price: 249.00, desc: "Immersive sound experience with adaptive noise cancellation.", img: "https://picsum.photos/seed/p2/600/400" },
    { id: 3, name: "Smart Home Assistant", category: "electronics", price: 199.00, desc: "Connect and control your entire home with your voice.", img: "https://picsum.photos/seed/p3/600/400" },
    { id: 4, name: "Executive Messenger Bag", category: "fashion", price: 159.00, desc: "Spacious and professional leather bag with laptop sleeve.", img: "https://picsum.photos/seed/p4/600/400" },
    { id: 5, name: "Wireless Charging Stand", category: "electronics", price: 49.00, desc: "Fast charging for all your devices with a sleek wooden finish.", img: "https://picsum.photos/seed/p5/600/400" },
    { id: 6, name: "Compact Mechanical Keyboard", category: "electronics", price: 109.00, desc: "Satisfying tactile feedback and customizable RGB backlighting.", img: "https://picsum.photos/seed/p6/600/400" },
    { id: 7, name: "Premium Cotton T-Shirt", category: "fashion", price: 35.00, desc: "Ultra-soft, breathable cotton for everyday comfort.", img: "https://picsum.photos/seed/p7/600/400" },
    { id: 8, name: "Leather Wallet", category: "accessories", price: 55.00, desc: "Slim design with RFID protection and multiple card slots.", img: "https://picsum.photos/seed/p8/600/400" }
];
