const nomes = ["Pedro", "Felipe", "João", "Daniel", "Vinicius", "Gustavo", "Juan"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)