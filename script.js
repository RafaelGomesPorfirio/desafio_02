const estudantes = [
    {
        nome: "Rafael",
        prova1: 8,
        prova2: 7
    },
    {
        nome: "Daniel",
        prova1: 5,
        prova2: 7
    },
    {
        nome: "Raul",
        prova1: 8,
        prova2: 3
    }
]


function somaNotas (prova1, prova2) {
   return ((prova1 + prova2) / 2).toFixed(2)
}

for (position of estudantes) {
    if (somaNotas(position.prova1,position.prova2) >= 7) {
        alert(`A média do(a) aluno(a) ${position.nome} é: ${somaNotas(position.prova1,position.prova2)} \n
        Parabéns, ${position.nome}! Você foi aprovado(a) no concurso!`)
    }else {
        alert(`A média do(a) aluno(a) ${position.nome} é: ${somaNotas(position.prova1,position.prova2)} \n
        Não foi dessa vez, ${position.nome}! Tente novamente!`)
    }
}



