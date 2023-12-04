lista = [

]


def inserir():
    print('\n')
    print('Insira um item na sua lista: ')
    print('Digite "0" para voltar')
    print('\n')

    novo_item = input()

    if novo_item.isspace() or novo_item == '':
        print('Insira um item válido!')
        inserir()
    if novo_item == '0':
        main()
    else:
        lista.append(novo_item)

    print('Minha lista: ', ', '.join(lista))
    inserir()


def remover():
    print('Qual item deseja remover?')
    print("")
    print('Digite o índice do número!')

    for index, name in enumerate(lista):
        print(index, name)

    numero_indice = int(input())

    try:
        lista.pop(numero_indice)
        print(', '.join(lista))
        print("Item Removido! \n")

    except:
        print('Erro. Tente de novo \n')

    print('\n')
    print('Deseja remover outro [S]im ou [N]ao?')

    opcao_deseja_remover = input()
    opcao_deseja_remover.lower()

    if opcao_deseja_remover == 's':
        remover()
    elif opcao_deseja_remover == 'n':
        main()
    else:
        print('Selecione uma opção válida!')


def imprimir_lista():
    print('Minha Lista:')
    for items in lista:
        print(items)


def limpar_lista():
    lista.clear()
    print('Todos os items foram eliminados!')


print('Olá, bem vindo a0 seu gerenciador de lista! \n')

while True:
    def main():
        print('Para começar, selecione uma opção:\n')

        print('[1] INSERIR ')
        print('[2] REMOVER ')
        print('[3] VER LISTA ')
        print('[4] IMPRIMIR LISTA')
        print('[5] LIMPAR LISTA')

        selecao = input()

        if selecao == '1':
            inserir()
        elif selecao == '2':
            remover()
        elif selecao == '3':
            print('\n')
            print(', '.join(lista))
            print('\n')
            main()
        elif selecao == '4':
            imprimir_lista()
            main()
        elif selecao == '5':
            print('REALMENTE DESEJA LIMPAR TODOS OS ITENS DE SUA LISTA?!')
            print('[S]im / [N]ao')

            limpar_lst_selecao = input()
            limpar_lst_selecao.lower()

            if limpar_lst_selecao == 's':
                limpar_lista()
                main()
            if limpar_lst_selecao == 'n':
                main()
            else:
                print('Opção nao existente. Tente novamente.')
                main()


    main()
