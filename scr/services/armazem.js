import {
    insereRoupa,
    mostraRoupas,
    mostraRoupaPeloId,
} from "../data/clothing";


//adicionar uma roupa a base de dados
async function adicionarRoupa(pathToImage, tamanho, categoria, genero) {
    const roupa = await insereRoupa({
        pathToImage,
        tamanho,
        categoria,
        genero
    })
    return roupa
}

//mostrar todas as roupas
async function mostraTodasRoupas() {
    const roupas = await mostraRoupas()
    if (roupas == undefined) {
        return "Nenhuma roupa disponível."
    }
    return roupas
}

//mostrar uma roupa com o id correspondente 
async function apresentaRoupa(idRoupa) {
    const umaRoupa = await mostraRoupaPeloId(idRoupa)
    if (umaRoupa === undefined) {
        return "Roupa não encontrada."
    }
    return umaRoupa
}



export {
   adicionarRoupa,
   mostraTodasRoupas,
   apresentaRoupa
}