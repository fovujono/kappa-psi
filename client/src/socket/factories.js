const uuid = require("uuid");

const createUser = ({ name }) => ({
  id: uuid(),
  name
});

const createMessage = ({ message, sender }) => {
  return {
    id: uuid(),
    time: getTime(new Date(Date.now())),
    message: message,
    sender: sender
  };
};


const createChat = ({messages: [], users: []} = {})=>({
    id: uuid(),
    name,
    messages,
    users,
    typingUsers: []

})


const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}