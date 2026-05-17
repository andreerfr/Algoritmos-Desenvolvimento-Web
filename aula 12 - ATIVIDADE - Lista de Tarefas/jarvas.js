
let tarefas = [];
let filtroAtual = 'todas';

window.adicionarTarefa = function() {
    const input = document.getElementById('taskInput');
    const texto = input.value.trim();
    
    if (texto === '') {
        alert('Digite uma tarefa!');
        return;
    }
    
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };
    
    tarefas.push(novaTarefa);
    input.value = '';
    carregarTarefas();
}

window.editarTarefa = function(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) return;
    
    const novoTexto = prompt('Editar tarefa:', tarefa.texto);
    if (novoTexto && novoTexto.trim() !== '') {
        tarefa.texto = novoTexto.trim();
        carregarTarefas();
    }
}

window.excluirTarefa = function(id) {
    if (confirm('Excluir esta tarefa?')) {
        tarefas = tarefas.filter(t => t.id !== id);
        carregarTarefas();
    }
}

window.alternarConcluida = function(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        carregarTarefas();
    }
}

window.filtrarTarefas = function(filtro) {
    filtroAtual = filtro;
    carregarTarefas();
}


function carregarTarefas() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    let tarefasExibir = [];
    
    if (filtroAtual === 'pendentes') {
        tarefasExibir = tarefas.filter(t => !t.concluida);
    } else if (filtroAtual === 'concluidas') {
        tarefasExibir = tarefas.filter(t => t.concluida);
    } else {
        tarefasExibir = tarefas;
    }
    
    if (tarefasExibir.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty-message';
        
        if (filtroAtual === 'pendentes') {
            li.textContent = 'Nenhuma tarefa pendente!';
        } else if (filtroAtual === 'concluidas') {
            li.textContent = 'Nenhuma tarefa concluída!';
        } else {
            li.textContent = 'Nenhuma tarefa cadastrada!';
        }
        
        taskList.appendChild(li);
        return;
    }
    
    tarefasExibir.forEach(tarefa => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = tarefa.concluida;

        checkbox.onclick = function() {
            window.alternarConcluida(tarefa.id);
        }
        
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = tarefa.texto;
        if (tarefa.concluida) {
            taskText.classList.add('completed');
        }
        
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Editar';
        editBtn.onclick = function() {
            window.editarTarefa(tarefa.id);
        }
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = function() {
            window.excluirTarefa(tarefa.id);
        }
        
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('taskInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                window.adicionarTarefa();
            }
        });
    }
    carregarTarefas();
});