# 🌦️ Weather App (NestJS + PostgreSQL + OpenWeather)

Сервіс на NestJS, який фетчить погодні дані з OpenWeather API та зберігає їх у базу PostgreSQL в JSON-форматі. Працює в Docker, має 2 REST API: `POST` для збереження даних і `GET` для витягування та форматованої відповіді.

---

## 🚀 Функціонал

- Фетчинг погоди по координатам (lat, lon) з OpenWeather API
- Збереження відповіді в PostgreSQL (`JSONB`)
- Отримання збережених даних
- Відповідь автоматично форматована інтерцептором NestJS

---

## 🧱 Технології

- **NestJS**
- **PostgreSQL**
- **TypeORM**
- **Axios**
- **Docker & Docker Compose**
- **.env конфігурація**

---

## 📦 Встановлення та запуск

### 1. Клонувати репозиторій
```bash
git clone https://github.com/yourname/weather-app.git
cd weather-app  

### 2. Налаштувати .env
bash
DATABASE_URL=postgres://weather:secret@postgres:5432/weatherdb
WEATHER_API_KEY=your_openweather_api_key  # потрібен One Call by Call план

### 3. Запуск у Docker
docker compose up --build

📮 API
🔹 POST /weather/fetch
Опис: Фетчить дані з OpenWeather і зберігає в БД

Запит:

bash
POST http://localhost:3000/weather/fetch
Content-Type: application/json
Тіло:
json
{
  "lat": 50.45,
  "lon": 30.52,
  "part": "minutely"
}

🔹 GET /weather
Опис: Повертає збережені дані по координатах у форматованому вигляді

Запит:
bash
GET http://localhost:3000/weather?lat=50.45&lon=30.52&part=minutely

Відповідь:
json
{
  "sunrise": 1684926645,
  "sunset": 1684977332,
  "temp": 292.55,
  "feels_like": 292.87,
  "pressure": 1014,
  "humidity": 89,
  "uvi": 0.16,
  "wind_speed": 3.13
}

🧪 Тестування
Запусти API через docker compose up --build
Перевір POST /weather/fetch через Postman або curl
Потім виконай GET /weather і переконайся, що відповідь форматована
Перевір логи та консоль, щоб бачити запити до API

📂 Скрипти
Команда	Опис
npm run start:dev	Запуск у dev режимі
npm run build	Білд проєкту
npm run lint	ESLint перевірка
npm run format	Причесати код через Prettier
⚠️ Важливо
Для використання One Call 3.0 потрібна платна підписка на One Call by Call
Без неї можна використовувати One Call 2.5, але з обмеженнями
