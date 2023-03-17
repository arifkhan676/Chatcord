const users = []; //We are using array instead of database that users are connect and stored in array

//join user to chat

function userJoin(id,username,room){
  const user = {id,username,room};
  users.push(user);

  return user;

}

//get the current user ,where we use use higher order function to find the user by their id

function getCurrentUser(id){
    return users.find(user => user.id === id );
}

module.exports = {
    userJoin,
    getCurrentUser
};