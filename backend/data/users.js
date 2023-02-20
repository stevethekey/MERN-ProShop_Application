import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bycrpt.hashSync('1234567', 10),
        isAdmin: true
    },

    {
        name: 'Cristiano Ronaldo',
        email: 'CR7@example.com',
        password: bycrpt.hashSync('1234567', 10),
    },

    {
        name: 'Lebron James',
        email: 'KingJames@example.com',
        password: bycrpt.hashSync('1234567', 10),
        isAdmin: true
    },
]

export default users