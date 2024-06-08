interface User {
    name: string,
    bio: string,
    age: number
}

function sumAge(users: User[]) {
    let sum = 0;
    for (const user of users) {
        sum += user.age
    }
    return sum
}

const somaTodosUsers = sumAge([{
    name: 'John',
    bio: 'med',
    age: 18
}])

//Não preciso passar sempre o tipo pois infere sozinho

