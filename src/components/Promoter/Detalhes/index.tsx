import  React from 'react';

interface Ingresso {
    id: number,
    valor_pago: number,
    id_lotacao: number,
    id_compra: number
}

type Setor = {
    id: number,
    nome: string
}

type Perfil = {
    id: number,
    nome: string
}

type Props = {
    ingressos: any[],
    setor: Setor,
    perfil: Perfil,
    setTotal: Function,
    setQtdTotal: Function,
    total: number,
    qtdTotal: number

}

export default function Detalhes(props: Props) {
    let totalVendido = 0;
    let qtdIngressos = 0;

    props.ingressos.map(( {valor_pago} ) => (
        totalVendido += valor_pago,
        qtdIngressos += 1,
        props.setTotal(totalVendido),
        props.setQtdTotal(qtdIngressos)
    ));

    return (
        <div className="mb-8 bg-gray-100 rounded-md p-4">
            <div className="grid gap-8 lg:grid-rows-1 md:grid-rows-1 sm:grid text-sm text-center">
            <h4 className="text-deep-purple-400 font-bold">{`${props.setor.nome} - ${props.perfil.nome}`}</h4>
                <h4 className="font-bold">{`Valor total: R$ ${totalVendido}`}</h4> 
                <h4 className="font-bold">{`Quantidade: ${props.ingressos.length}`}</h4>
            </div>
        </div>
    )
}