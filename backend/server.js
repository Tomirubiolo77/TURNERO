const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Leer horarios ocupados desde archivo
app.get('/api/horarios-ocupados', (req, res) => {
  const data = fs.readFileSync('backend/db.json', 'utf-8');
  const horarios = JSON.parse(data);
  res.json(horarios);
});

// Guardar nueva reserva
app.post('/api/reservar', (req, res) => {
  const nuevo = req.body; // { horario: "08:30" }

  const data = fs.readFileSync('backend/db.json', 'utf-8');
  const horarios = JSON.parse(data);

  if (horarios.includes(nuevo.horario)) {
    return res.status(400).json({ mensaje: 'Horario ya reservado' });
  }

  horarios.push(nuevo.horario);
  fs.writeFileSync('backend/db.json', JSON.stringify(horarios, null, 2));
  res.status(200).json({ mensaje: 'Reservado con éxito' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});