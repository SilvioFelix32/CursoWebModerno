//Middleware pattern(chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //"..." Agrupar tudo e cria um array
     const execPasso = indice => {
         middlewares && indice < middlewares.length &&
         middlewares[indice](ctx, () => execPasso(indice + 1)) //com essa função eu vou chamar o indice, e dps +1
     }
     execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)