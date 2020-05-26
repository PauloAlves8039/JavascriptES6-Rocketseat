const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

let idade = usuarios.map(usr => usr.idade);
// console.log(idade);

let filter = usuarios.filter(usr => usr.empresa === 'Rocketseat' && usr.idade > 18);
// console.log(filter);

let find = usuarios.find(usr => usr.empresa === 'Google');
// console.log(find);

let unirOperacoes = usuarios.map(usr => ({...usr, idade : usr.idade * 2})).filter(usr => usr.idade <= 50);
// console.log(unirOperacoes);