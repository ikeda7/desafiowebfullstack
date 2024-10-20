export class Empresa {
    constructor(id, razao_social, nome_fantasia, cnpj) {
        this.id = id;
        this.razao_social = razao_social;
        this.nome_fantasia = nome_fantasia;
        this.cnpj = cnpj;
    }
  
    constructor(razao_ocial, nome_fantasia, cnpj) { 
        this.razao_social = razao_social;
        this.nome_fantasia = nome_fantasia;
        this.cnpj = cnpj;
    }
}
