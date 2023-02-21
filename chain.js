const users = [
    {
        id: 1, 
        name: 'abul', 
        job: 'doctor'
    }
]
//as users is not a object. its a array and in the array there is a object so if we want to find the
//name from the object first we have tell the browser what is the index number then we can found name.
console.log(users[0].name);

//another one
const data = {
    count: 5000,
   data: [ 
    {
        id: 1, 
        name: 'abul', 
        job: 'engineer'
    },
    {
        id: 2, 
        name: 'dabul', 
        job: 'chor'
    }
]
}
//now if i want to print name from data we can do this
console.log(data.data[1].job);
//we can put it in a variable:
const firstJob = data.data[1].job;
console.log(firstJob);


// another one:

const user = {
    id: 5001,
    name: 'thomas',
   address: {
   street: {
        first: 'rampura', 
        second: 'third floor', 
        third: 'right side'
    },
    
         
        postoffice: 'badda', 
        city: 'dhaka'
    
} 
}

// if we want to get the property of street.second we have to do this:
const userfloor = user.address.street.second;
console.log(userfloor);
// suppose aikhane kono user street address deinai tokhn optional chain use korte hoi.example:
// optional chaining
const userfloor2 = user.address?.stret?.second;//eikhane issa korei street banan vul likhsi
console.log(userfloor2);