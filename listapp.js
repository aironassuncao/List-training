const lista = [];

function inserir() {
    while (true) {
        console.log('\nInsira um item na sua lista (Digite "0" para voltar): ');
        const novoItem = prompt().trim();

        if (novoItem === '0') {
            break;
        } else if (novoItem !== '') {
            lista.push(novoItem);
            console.log('Minha lista: ', lista.join(', '));
        } else {
            console.log('Insira um item válido!');
        }
    }
}

function remover() {
    while (true) {
        console.log('Qual item deseja remover? (Digite o índice do número)');
        for (let i = 0; i < lista.length; i++) {
            console.log(i, lista[i]);
        }

        const numeroIndice = parseInt(prompt());

        if (!isNaN(numeroIndice) && numeroIndice >= 0 && numeroIndice < lista.length) {
            lista.splice(numeroIndice, 1);
            console.log(lista.join(', '));
            console.log("Item Removido!");
        } else {
            console.log('Erro. Tente de novo.');
        }

        console.log('\nDeseja remover outro [S]im ou [N]ao?');
        const opcaoDesejaRemover = prompt().toLowerCase();

        if (opcaoDesejaRemover === 'n') {
            break;
        } else if (opcaoDesejaRemover !== 's') {
            console.log('Selecione uma opção válida!');
        }
    }
}

function imprimirLista() {
    console.log('Minha Lista:');
    console.log(lista.join(', '));
}

function limparLista() {
    lista.length = 0;
    console.log('Todos os items foram eliminados!');
}

console.log('Olá, bem vindo ao seu gerenciador de lista! \n');

while (true) {
    console.log('Para começar, selecione uma opção:\n');
    console.log('[1] INSERIR ');
    console.log('[2] REMOVER ');
    console.log('[3] VER LISTA ');
    console.log('[4] IMPRIMIR LISTA');
    console.log('[5] LIMPAR LISTA');

    const selecao = prompt();

    if (selecao === '1') {
        inserir();
    } else if (selecao === '2') {
        remover();
    } else if (selecao === '3') {
        console.log('\n', lista.join(', '), '\n');
    } else if (selecao === '4') {
        imprimirLista();
    } else if (selecao === '5') {
        console.log('REALMENTE DESEJA LIMPAR TODOS OS ITENS DE SUA LISTA?!');
        console.log('[S]im / [N]ao');

        const limparListaSelecao = prompt().toLowerCase();

        if (limparListaSelecao === 's') {
            limparLista();
        } else if (limparListaSelecao !== 'n') {
            console.log('Opção nao existente. Tente novamente.');
        }
    }
}
