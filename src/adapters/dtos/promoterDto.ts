// Objeto dto para o body da requisição de atualizar dados do promoter
export type promoterDTO = { 
    cpf: string | null,
    cnpj: string | null,
    endereco:{ 
        bairro: string, 
        cep: string, 
        cidade: string, 
        complemento: string, 
        estado: string, 
        numero: string, 
        rua: string
    },
    telefone: string,
    usuario: {
        nome: string, 
        email: string
    }
}  