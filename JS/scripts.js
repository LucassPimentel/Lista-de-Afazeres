let tarefa = document.querySelector('.inserir-tarefa')
let adicionar =  document.getElementById('btn-adicionar').onclick = function () {
    if(tarefa.value.length == 0) {
        alert('[ERRO] - Adicione uma tarefa!')

    } else { 
        document.getElementById('tarefas').innerHTML += `
        
        <div id="tarefas">

        <span id ="tarefa-nome">
            ${tarefa.value}
            <button class ="deletar-tarefa"> 
            <i class="fas fa-trash-alt"></i>
            </button>
        </span>
        

        </div>
        
        
        `;

        let tarefasAtuais = document.querySelectorAll('.deletar-tarefa');
            for(i=0; i<tarefasAtuais.length; i++) {
                tarefasAtuais[i].onclick = function () {
                    this.parentNode.remove();
                }
            }

            let tarefasConcluidas = document.querySelectorAll('#tarefa-nome')
            for(i=0; i < tarefasConcluidas.length; i++) {
                tarefasConcluidas[i].onclick = function () {
                    this.classList.toggle('tarefa-completa')
                }
            }

            document.querySelector('.inserir-tarefa').value = ''
    }
}