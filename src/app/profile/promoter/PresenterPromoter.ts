import { personalFormData } from "@/components/Promoter/formPersonalData";

// Classe para realizar a modificação nas estruturas de dados (como dto)
export class PresenterPromoter{

    public static toUpdateProfile(form: personalFormData){
        const obj = {
            cpf: form.cpf_cnpj ? form.cpf_cnpj : '',
            cnpj: form.cpf_cnpj ? '' : form.cpf_cnpj,
            endereco:{ 
                bairro: form.neighborhood, 
                cep: form.cep, 
                cidade: form.city, 
                complemento: form.complement, 
                estado: form.state, 
                numero: form.number, 
                rua: form.street
            },
            telefone: form.phone,
            usuario: {
                nome: form.name, 
                email: form.email
            }
        }  
        return obj
    }
}

/**

  
 
 */