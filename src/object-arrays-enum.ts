// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Himal',
//   age: 39
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Himal',
//   age: 39,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

enum Role {
  ADMIN, RAD_ONLY, AUTHOR
};

const person= {
  name: 'Himal',
  age: 39,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
}

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];

let favoriteActivities: string[]
favoriteActivities = ['Sports', 'Reading']

console.log(person.name)

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}