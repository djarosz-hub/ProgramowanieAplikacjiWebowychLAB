// enum Role {
//     Standard = 'Standard',
//     Moderator = 'Moderator',
//     Admin = 'Admin'
// }
// function StandardAccess(constructorFn: Function) {
//     constructorFn.prototype.role = Role.Standard;
// }

// function ModeratorAccess(constructorFn: Function) {
//     constructorFn.prototype.role = Role.Moderator;
// }
// function AdminAccess(constructorFn: Function) {
//     constructorFn.prototype.role = Role.Admin;
// }
// class User {
//     name: string;
//     surname: string;
//     role: Role;
//     toString(): string {
//         return `${this.name} ${this.surname} ${this.role}`;
//     }
// }
// @StandardAccess
// class StandardUser extends User {
//     constructor(name: string, surname: string) {
//         super();
//         this.name = name;
//         this.surname = surname;
//     }
// }
// @ModeratorAccess
// class ModeratorUser extends User {
//     constructor(name: string, surname: string) {
//         super();
//         this.name = name;
//         this.surname = surname;
//     }
// }
// @AdminAccess
// class AdminUser extends User {
//     constructor(name: string, surname: string) {
//         super();
//         this.name = name;
//         this.surname = surname;
//     }
// }
// class Resource {
//     private resourceValue: string;
//     constructor() {
//         this.resourceValue = "";
//     }

//     @watch
//     @forAdmin
//     @forModerator
//     public read(user: User): void {
//         this.resourceValue = "read";
//         console.log(this.resourceValue);
//     }

//     @watch
//     @forAdmin
//     public change(user: User): void {
//         this.resourceValue = "write";
//         console.log(this.resourceValue);
//     }
// }

// function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
//     const originalFn = descriptor.value;  
//     descriptor.value = function (param) {
//         console.log(`User: ${param} wants ${propKey}`);
//         return originalFn.call(this,param);
//     }
//     return descriptor;
// }
// function forAdmin(target: object, propKey: string, descriptor: PropertyDescriptor) {
//     const originalFn = descriptor.value;
//     descriptor.value = function (param) {
//         console.log(param)
//         // originalFn.call();
//         if (param.role === Role.Admin) {
//             return originalFn.call(this, param);
//         }
//     }
//     return descriptor;
// }
// function forModerator(target: object, propKey: string, descriptor: PropertyDescriptor) {
//     const originalFn = target[propKey];
//     descriptor.value = function (param) {
//         if (param.role === Role.Moderator) {   
//             return originalFn.call(this, param);
//         }
//     }
//     return descriptor;

// }
// const standard = new StandardUser('Kamil', 'Standardowski');
// const moderator = new ModeratorUser('Adam', 'Moderatowski');
// const admin = new AdminUser('Krzysztof', 'Adminski');
// // console.log(standard.toString());
// // console.log(moderator.toString());
// // console.log(admin.toString());
// const res = new Resource();
// console.log('Standardowy:');
// res.read(standard);
// res.change(standard);

// console.log('Moderator:');
// res.read(moderator);
// res.change(moderator);

// console.log('Admin:');
// res.read(admin);
// res.change(admin);


