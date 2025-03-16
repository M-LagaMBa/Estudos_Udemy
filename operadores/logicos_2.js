let t1 = false;
let t2 = false;

let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV 50"?', comprarTV50);

let = comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV 32"?', comprarTV32); // XOR

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete?', tomarSorvete);

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarEmCasa); // NOT