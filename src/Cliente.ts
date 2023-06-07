import Endereco from "./Endereco";
import Telefone from "./Telefone";
export default class Cliente
{
    private _nome : string;
    private _cpf : number;
    private _data_nascimento : number;
    private _sexo : string;
    private _endereco : Endereco;
    private _telefone : Telefone;

    constructor(nome : string, cpf : number, data_nascimento : number, sexo : string, endereco : Endereco, telefone : Telefone)
    {
        this._nome = nome;
        this._cpf = cpf;
        this._data_nascimento = data_nascimento;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefone = telefone;
    }

    get nome() : string
    {
        return this._nome;
    }
    
    get cpf() : number
    {
        return this._cpf;
    }

    get data_nascimento() : number
    {
        return this._data_nascimento;
    }

    get sexo() : string
    {
        return this._sexo;
    }

    get endereco() : Endereco
    {
        return this._endereco;
    }

    get telefone() : Telefone
    {
        return this._telefone;
    }

    set nome(nome : string)
    {
        this._nome = nome;
    }

    set cpf(cpf : number)
    {
        this._cpf = cpf;
    }

    set data_nascimento(data_nascimento : number)
    {
        this._data_nascimento = data_nascimento;
    }

    set sexo(sexo : string)
    {
        this._sexo = sexo;
    }

    set endereco(endereco : Endereco)
    {
        this._endereco = endereco;
    }

    set telefone(telefone : Telefone)
    {
        this._telefone = telefone;
    }
}