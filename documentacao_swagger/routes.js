const Produtos = [
  { id: 1, nome: "guarana" },
  { id: 2, nome: "maça" },
  { id: 3, nome: "leite" },
];

const Routes = (app) => {
  /**
   * @swagger
   * tags:
   *   - name: Produtos
   *     description: Endpoint relacionados aos usuarios
   */
    /**
   * 
   * 
   * 
   * 
   * @swagger
   * /:
   *   get:
   *     tags: [Produtos]
   *     summary: Retorna uma mensagem de boas-vindas
   *     responses:
   *          '200':
   *            description: Mensagem de boas-vindas
   */
  app.get("/", (req, res) => {
    res.send("Hello World");
    res.json({ msg: "Desenvovendo em node.js" });
  });
  /**
   * @swagger
   * /produtos:
   *   get:
   *     tags: [Produtos]
   *     summary: Retorna uma lista de produtos
   *     responses:
   *          '200':
   *            description: Lista de produtos
   */

  app.get("/produtos", (req, res) => {
    res.json(Produtos);
  });

  /**
   * @swagger
   * /produtos/{id}:
   *   get:
   *     tags: [Produtos]
   *     summary: Retorna uma produto
   *     responses:
   *          '200':
   *            description: Unico produto
   */

  app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    const produto = { id: id, nome: "leite" };
    res.json(produto);
  });

  /**
   * @swagger
   * /criarProduto:
   *   post:
   *     tags: [Produtos]
   *     summary: Retorna um novo produto
   *     responses:
   *          '200':
   *            description: Cria um novo produto
   */

  app.post("/criarProduto", (req, res) => {
    const produto = req.body;
    res.json(produto);
  });

  /**
   * @swagger
   * /atualizaProduto:
   *   put:
   *     tags: [Produtos]
   *     summary: Retorna um produto atualizado
   *     responses:
   *          '200':
   *            description: Atualiza um produto
   */

  app.put("/atualizaProduto/:id", (req, res) => {
    const id = req.params.id;
    const produto = req.body;
    produto.id = id;
    res.json(produto);
  });

  /**
   * @swagger
   * /produtos/{id}:
   *   delete:
   *     tags: [Produtos]
   *     summary: Deleta um produto
   *     responses:
   *          '200':
   *            description: Remove um produto com sucesso
   */

  app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({ msg: `O usuario ${id} foi removido com sucesso!` });
  });
};

module.exports = Routes;
