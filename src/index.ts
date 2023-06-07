import Cliente from "./Cliente";
import Venda from "./Venda";
import Produto from "./Produto";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

let enederecoCliente1 : Endereco = new Endereco("almirante didio costa", 1052, "guarapuava", "parana");
let telefoneCliente1 : Telefone = new Telefone("55", 42998705718, "celular");
let cliente1 : Cliente = new Cliente("Andre", 123124236, 10112004, "Masculino", enederecoCliente1, telefoneCliente1);
let produtos = new Array<Produto>();
produtos[0] = new Produto(1, "Mouse legal", 60);
produtos[1] = new Produto(2, "Teclado maneiro", 200);
produtos[2] = new Produto(3, "Monitor Supimpa", 1000);
produtos[3] = new Produto(4, "Gabinete muito bacana", 100);
console.log("o cliente " + cliente1.nome + " comprou os seguintes produtos:\n");
for (let index = 0; index < produtos.length; index++) {
    console.log(produtos[index].codigo + " : " + produtos[index].descricao + " de valor " + produtos[index].valor + "\n");
}
let venda1 : Venda = new Venda(1, 10122022, cliente1, produtos);
console.log("E gastou no total: " + venda1.calcularTotal());

