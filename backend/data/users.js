import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: true
    },

    {
        name: 'Cristiano Ronaldo',
        email: 'CR7@example.com',
        password: bcrypt.hashSync('1234567', 10),
    },

    {
        name: 'Lebron James',
        email: 'KingJames@example.com',
        password: bcrypt.hashSync('1234567', 10),
    },
]

export default users