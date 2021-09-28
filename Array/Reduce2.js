const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

// Des 1: todos são bolsistas?
const bolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map( a=> a.bolsista).reduce(bolsistas))

//Des 2: algum aluno é bolsista?
const Abolsitas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(b => b.bolsista).reduce(Abolsitas))