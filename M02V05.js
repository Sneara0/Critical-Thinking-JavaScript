//count subtotal

const  cartItems=[
    { id: 1, name: 'Item A', price: 10.0, quantity: 2 },
    { id: 2, name: 'Item B', price: 15.0, quantity: 4 },
    { id: 3, name: 'Item C', price: 7.5, quantity: 3 },

];

const subtotal= cartItems.reduce((subtotal,product)=>{
    console.log(subtotal,product);
    return subtotal + product.price * product.quantity;
},0);
//console.log(subtotal)

//find best scorer
const players=[
    {name:"Jamal Bhuyan",score:50},
    {name:"Sheikh Mursalin",score:80},
    {name:"Rakib Hossain",score:65},

];

const bestplayer=players.reduce((bestplayer,player)=>{
    console.log(bestplayer,player);
    if (bestplayer.score>player.score){
        return bestplayer;
    }
    return player;

},players[0]);
console.log(bestplayer);