function status(request, response) {
  response.status(200).json({ chave: "alunos curso.dev" });
}

export default status;
