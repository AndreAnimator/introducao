import Produto from "./Produto";
import Cliente from "./Cliente";
export default class Venda
{
    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    public _produtos = new Array<Produto>();

    constructor(codigo : number, data : number, cliente : Cliente, produtos : Produto[])
    {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        for(var _i = 0; _i < produtos.length; _i++)
        {
            this._produtos[_i] = produtos[_i];
        }
    }

    get codigo() : number
    {
        return this._codigo;
    }

    get data() : number
    {
        return this._data;
    }

    get cliente() : Cliente
    {
        return this._cliente;
    }

    set codigo(codigo : number)
    {
        this._codigo = codigo;
    }

    set data(data : number)
    {
        this._data = data;
    }

    set cliente(cliente : Cliente)
    {
        this._cliente = cliente;
    }

    calcularTotal(): number {
        let soma : number = 0;
        for(let num of this._produtos)
        {
            soma += num.valor;
        }
        
        return soma;
    }
}