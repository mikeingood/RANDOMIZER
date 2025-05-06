
const fs = require("fs");
const path = require("path");

exports.handler = async function (event) {
  const PASSWORD = "mikeingood"; // измени на свой пароль

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Метод не поддерживается" };
  }

  const body = JSON.parse(event.body);
  const { password, words } = body;

  if (password !== PASSWORD) {
    return { statusCode: 403, body: "Неверный пароль" };
  }

  try {
    const filePath = path.join(__dirname, "../../words.txt");
    fs.writeFileSync(filePath, words.join("\n"), "utf-8");
    return { statusCode: 200, body: "Файл обновлён" };
  } catch (error) {
    return { statusCode: 500, body: "Ошибка записи: " + error.message };
  }
};
