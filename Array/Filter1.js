 const produtos = [
     { nome: 'Notebook', preco: 2499, fragil: true},
     { nome: 'iPad Pro', preco: 4199, fragil: true},
     { nome: 'Capa de Vidro', preco: 12.49, fragil: true},
     { nome: 'Capa de Plástico', preco: 18.49, fragil: false}
 ]

 const caro = produto => produto.preco >= 500
 const fragil = produto => produto.fragil 
 
 console.log(produtos.filter(caro).filter(fragil))