const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Leer horarios ocupados desde archivo
app.get('/api/horarios-ocupados', (req, res) => {
  const fecha = req.query.fecha; // por ejemplo: "2025-07-14"

  if (!fecha) {
    return res.status(400).json({ mensaje: 'Falta la fecha en la consulta' });
  }

  const data = fs.readFileSync('backend/db.json', 'utf-8');
  const json = JSON.parse(data);

  const horarios = json[fecha] || []; // Si no hay datos para esa fecha, devolvés []
  res.json(horarios);
});
// Guardar nueva reserva
app.post('/api/reservar', (req, res) => {
  const { fecha, horario } = req.body;

  if (!fecha || !horario) {
    return res.status(400).json({ mensaje: 'Faltan datos: fecha u horario' });
  }

  const data = fs.readFileSync('backend/db.json', 'utf-8');
  const json = JSON.parse(data);

  if (!json[fecha]) {
    json[fecha] = [];
  }

  if (json[fecha].includes(horario)) {
    return res.status(400).json({ mensaje: 'Horario ya reservado para esa fecha' });
  }

  json[fecha].push(horario);

  fs.writeFileSync('backend/db.json', JSON.stringify(json, null, 2));
  res.status(200).json({ mensaje: 'Reservado con éxito' });
});