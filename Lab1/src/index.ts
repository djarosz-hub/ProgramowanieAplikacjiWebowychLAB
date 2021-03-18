// export{};
// const name:string = 'John';
// document.body.innerHTML = `<h1>Hello ${name}</h1>`;

// class Person{
//     firstname:string;
//     lastname:string;
//     age:number;
//     constructor(firstname:string, lastname:string, age:number) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     Show():void{
//         console.log(`Witaj ${this.firstname} ${this.lastname}, wiek: ${this.age}`);
//     }
// }

// let p = new Person('Jan', 'Kowalski',20);
// p.Show();

interface Person {
        name:string;
        surname:string;
        age:number;
        role:string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
        console.log(`${person.name} ${person.surname}, age: ${person.age}, role: ${person.role}`);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
        return persons.filter(criteria);
        }
    function namedAdam(param:Person):boolean{
        return param.name === 'Adam';
    }
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    const persons:Person[] = [...users,...admins];
    for(const p of persons)
        logPerson(p);
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    console.log('---');
    const ageAbove:Person[] = persons.filter(p=>p.age > 25);
    for(const p of ageAbove)
        logPerson(p);
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log('---');
    const filtered:Person[] = filterPersons(persons, namedAdam);
    for(const p of filtered)
        console.log(p);

