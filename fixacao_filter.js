const usuarios = [
    {
        nome: 'Jean Alves',
        perfil: 'admin'
    },{
        nome: 'Alessandra',
        perfil: 'admin'
    },{
        nome: 'Davi',
        perfil: 'user'
    },{
        nome: 'Samuel',
        perfil: 'user'
    }
]

// a função filter retorna um array com os elementos
// que passarem pelo critério de filtragem
console.log(
    usuarios.filter((usuario) => usuario.perfil === 'admin') // retorna um array somente com os usuários admins
)