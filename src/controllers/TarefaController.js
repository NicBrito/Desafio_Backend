const Tarefa = require('../models/Tarefa');


exports.create = async (req, res) => {
  try {
  
    if (!req.body.titulo || !req.body.status) {
      return res.status(400).json({ error: 'Título e status são obrigatórios' });
    }

    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const where = {};
    if (req.query.status) {
      where.status = req.query.status; 
    }
    const tarefas = await Tarefa.findAll({ where });
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

  exports.findById = async (req, res) => {
    try {
      const tarefa = await Tarefa.findByPk(req.params.id);
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefa' });
    }
  };

  exports.update = async (req, res) => {
    try {
      const [updated] = await Tarefa.update(req.body, {
        where: { id: req.params.id }
      });
      if (!updated) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json(await Tarefa.findByPk(req.params.id));
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
  };
  exports.delete = async (req, res) => {
    try {
      const deleted = await Tarefa.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
  };

  exports.filterByStatus = async (req, res) => {
    try {
      const tarefas = await Tarefa.findAll({
        where: { status: req.query.status }
      });
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao filtrar tarefas' });
    }
  };