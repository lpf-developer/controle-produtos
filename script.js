class Produto{

    constructor(){
        this.id = 1
        this.arrayProdutos = []
        this.msg = ''
    }

    // Funções Auxiliares
    lerDados(){

        let produto = {}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.valor = document.getElementById('valor').value
        
        return produto
    }

    validaCampos(produto){

        //let validaNumero = /^[-]?\d*\.?\d+$/
        
        if(produto.valor == ''){
            this.msg += "- Informe o valor do produto<br>"
            document.getElementById("valor").focus()
        }

        // if (validaNumero.test(produto.valor)){
        //     msg += "- Valor inválido do produto"
        //     document.getElementById("valor").focus()
        // }

        if(produto.nomeProduto == '') {
            this.msg += "- Informe o nome do produto<br>"
            document.getElementById("produto").focus()
        }
        
        if(this.msg != ''){
            this.showFlashMessage(this.msg,3000)
            this.msg = ''
            return false
        }

        return true
    }

    formataMoeda(valor){
        
        return "R$ " + valor.replace(',', '.').replace('.', ',');
    }

    showFlashMessage(message, timeout) {
        let flashMessage = document.getElementById('flash-message');
        flashMessage.innerHTML = message;
        flashMessage.style.display = 'block';
        setTimeout(function () {
            flashMessage.style.display = 'none';
        }, timeout);
    }

    cancelar(){
        document.getElementById('produto').value=''
        document.getElementById('valor').value=''
    }

    // CRUD
    salvar(){
        
        let produto = this.lerDados()
        
        if(this.validaCampos(produto)){
            this.adicionar(produto)
        }
        
        this.listaTabela()
        this.cancelar()
    }

    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    listaTabela(){
        
        let tbody = document.getElementById("tbody")
        
        tbody.innerText = ''
        
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            
            // Insere linhas e colunas
            let tr = tbody.insertRow()
            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()            
            let td_valor = tr.insertCell()            
            let td_acoes = tr.insertCell()
            
            // Insere valores
            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.formataMoeda(this.arrayProdutos[i].valor)
            //td_acoes.innerText = this.arrayProdutos[i].valor

            /**
             * Opcionalmente, podemos inserir classes css na célula através de
             * códigojavascript.
             * O código abaixo insere a classe center (css), que centraliza as 
             * strings ao centro do campo através da função classList.add
             * 
             * td_id.classList.add('center')
             */

            // Botões de Ação Editar e Excluir

            // Botão Editar
            let btnEdit = document.createElement('button')
            let imgEdit = document.createElement('img')
            imgEdit.src = "atualizar.png"
            btnEdit.classList.add('background-yellow')
            btnEdit.setAttribute("onclick","produto.editar()")
           
            // Botão Excluir
            let btnExcluir = document.createElement('button')
            let imgExcluir = document.createElement('img')
            imgExcluir.src = "excluir.png"
            btnExcluir.classList.add('background-red')
            btnExcluir.setAttribute("onclick", "produto.excluir(" + this.arrayProdutos[i].id +")")
            
            // Inserindo os botões nas células
            btnEdit.appendChild(imgEdit) // Insere a imagem no botão
            td_acoes.appendChild(btnEdit) // Insere o botão na célula

            btnExcluir.appendChild(imgExcluir)
            td_acoes.appendChild(btnExcluir)
        }
    }

    editar(){
        alert ("Editando o produto...")
    }

    excluir(id){
        
        let tbody = document.getElementById("tbody")

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i,1)
                tbody.deleteRow(i)
            }
        }
    }      
}

let produto = new Produto