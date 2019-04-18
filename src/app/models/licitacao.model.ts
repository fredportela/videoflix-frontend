export interface Licitacao {
    id: number;
    fonte: string;
    cliente: string;
    tipo_disputa: string;
    forma_conducao: string;
    abrangencia: string;
    data_abertura: string;
    modalidade: string;
    numero_edital: string;
    data_publicacao: string,
    valor: number;
    micro_empresa: string;
    codigo: string;
    estado: string;
    municipio: string;
    url: string;
    resumo: string;
    rnum?: number;
}
