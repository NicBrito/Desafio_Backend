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