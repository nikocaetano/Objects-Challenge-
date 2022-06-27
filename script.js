
// Crie um objeto que receba ao menos três propriedades sobre você.

const properties = {
    sign: 'Aries',
    ascendant: 'Leo',
    moon: 'Gemini',
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

properties.Venus = 'Aquarius'

// Remova uma propriedade desse objeto.

delete properties.moon

//Mostre no console todas as propriedades desse objeto.

console.log(properties)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

const register = [{
    nome: 'Luis',
    idade: 20,
    telefone: '11 99586-5060',
    amigos: ['Denis', 'Francisca', 'Luiza', 'Fernanda'],
},
{
    nome: 'Bruna',
    idade: 30,
    telefone: '11 99562-4849',
    amigos: ['Diego', 'Luiz', 'Paula', 'Gabriel'],
},
{
    nome: 'Joana',
    idade: 22,
    telefone: '11 99584-2356',
    amigos: ['Fernanda', 'Gabriela', 'Barbara', 'Felipe'],
},
{
    nome: 'Gabriel',
    idade: 25,
    telefone: '11 95655-4896',
    amigos: ['Valdirene', 'Bernardo', 'Janaina', 'Glauco'],
},
{
    nome: 'Jandira',
    idade: 29,
    telefone: '11 98565-5857',
    amigos: ['Deise', 'Ludmila', 'Bernardete', 'Lucimar'],
},
]

console.log(register)

// Mostre no console o nome de um amigo de cada lista.

console.log(register[0].amigos[2])
console.log(register[1].amigos[1])
console.log(register[2].amigos[1])
console.log(register[3].amigos[0])
console.log(register[4].amigos[3])
