function Item(nomeItem, quantidade, preco){
    this.nomeItem = nomeItem;
    this.quantidade = quantidade;
    this.preco = preco;
  }
  
  var itens = [];
  
  function adicionarItem(){
    var nomeItensNovo $("#nomeItemId").val();
    var quantidadeNovo $("#quantidadeId").val();
    var precoNovo $("#precoId").val();
    
    var novoItem = new Item(nomeItensNovo, quantidadeNovo, precoNovo);
    
    itens.push(novoItem);
  }