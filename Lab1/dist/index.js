const users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
const admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(`${person.name} ${person.surname}, age: ${person.age}, role: ${person.role}`);
}
function filterPersons(persons, criteria) {
    return persons.filter(criteria);
}
function namedAdam(param) {
    return param.name === 'Adam';
}
const persons = [...users, ...admins];
for (const p of persons)
    logPerson(p);
console.log('---');
const ageAbove = persons.filter(p => p.age > 25);
for (const p of ageAbove)
    logPerson(p);
console.log('---');
const filtered = filterPersons(persons, { name: 'Adam' });
for (const p of filtered)
    console.log(p);
//# sourceMappingURL=index.js.map