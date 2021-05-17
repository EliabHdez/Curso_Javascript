const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego']
}
const person2 = {
    name: 'Alejandro',
    age: 30,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomás']
}

console.log(person)
console.log(person.name)
console.log(person['name'])
console.log(person.age)
console.log(person['age'])
console.log(person.sons)
console.log(person['sons'])
console.log(person.sons[0])
console.log(person.sons[1])

console.log('-------------');
for(const key in person){
    console.log(key);
}
console.log('-------------');
for(const key in person){
    console.log(person[key]);
}
console.log('-------------');
for(const son of person2.sons){
    console.log(son);
}
console.log('-------------');
console.log(`Hola ${person2.name}. Tienes ${person2.age} años y tienes 5 hijos. Sus nombres son ${person2.sons.join(', ')}`);