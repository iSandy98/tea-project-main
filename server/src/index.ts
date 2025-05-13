export { Home } from '../../src/pages/home';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Пример данных
const teas = [
  { id: 1, name: 'Зелёный чай', price: '150₽' },
  { id: 2, name: 'Чёрный чай', price: '130₽' },
  { id: 3, name: 'Улун', price: '170₽' },
];

app.get('/api/teas', (req, res) => {
  res.json(teas);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});

