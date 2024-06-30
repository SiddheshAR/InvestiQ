

const users = [
    {
        email:"sidh@gmail.com",
        pass:"password1",
        num:9321664323
    },
    {
        email:"raju@gmail.com",
        pass:"password2",
        num:9321664323
    },
    {
        email:"farah@gmail.com",
        pass:"password3",
        num:9321664323
    }
]

const getUserEmail = email =>{
    const found = users.find(user=> user.email=== email);
    return found;
}

export default getUserEmail;