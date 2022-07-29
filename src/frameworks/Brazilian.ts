import {
  isValidCEP,
  isValidCNPJ as cnpjBU,
  isValidCPF as cpfBU
} from '@brazilian-utils/brazilian-utils'

class Brazilian {
  isCep (cep: string): boolean {
    return isValidCEP(cep)
  }

  isValidCnpj (cnpj: string): boolean {
    return cnpjBU(cnpj)
  }

  isValidCPF (cpf: string): boolean {
    return cpfBU(cpf)
  }
}

export default new Brazilian()
