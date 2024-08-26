const tarefas = [ "Lavar a louça", "Estudar", "Fazer compras"];
tarefas.push("Cozinhar");
tarefas.shift();
const temEstudar = tarefas.includes("Estudar");
console.log(`A lista de tarefas ${temEstudar ? "tem" : "não tem"} a tarefa Estudar.`);
