
const users=["Satya","Jaswant","Albert"]

function getAllUsers(page=1){
    const start=(page-1)*3;
    const end=start+3;
    return users.slice(start,end);
}

function getUser(index){
    if(index===0 && index<users.length)
    {
        return users[index];
    }
    else{
        return null
    }
}

function addUser(name){
    users.push(name);
    return users
}

module.exports={
    getAllUsers,
    getUser,
    addUser
}