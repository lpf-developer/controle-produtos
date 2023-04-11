class Produto{

    constructor(){
        this.id = 1
        this.arrayProdutos = []
        this.msg = ''
    }

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

    salvar(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            alert('salvar')
        }
    }

    adicionar(){
        
    }

    excluir(){
        alert("Produto excluído")
    }    

    showFlashMessage(message, timeout) {
        let flashMessage = document.getElementById('flash-message');
        flashMessage.innerHTML = message;
        flashMessage.style.display = 'block';
        setTimeout(function () {
            flashMessage.style.display = 'none';
        }, timeout);
    }
}

let produto = new Produto