let users = [
    { id: 1, name: "Jake", email: "jake@gmail.com", age: 17},
    { id: 2, name: "Paul", email: "paul@gmail.com", age: 18}
]

const messageHello = "Hello !"

const resolvers = {
    Query: {
        hello: (parent, args, context, info) => messageHello,
        users: () => users,
        user: (parent, { id }) => users.find(user => user.id == id)
    },
    Mutation: {
        createUser: (parent, {id, name, email, age}) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID == -1) {
                let newUser = {id, name, email, age}
                users.push(newUser)
                return newUser
            } else {
                throw new Error('ID already taken')
            }
        },
        deleteUser: (parent, {id}) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID != -1) {
                users.splice(checkID, 1)
                return true
            } else {
                throw new Error('unknow ID')
            }
        }
    }
}

export default resolvers