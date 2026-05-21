export async function POST(req: Request) {
  try {
    const body = await req.json()

    const message = `
🟢 Новая заявка

👤 Имя: ${body.name}

📧 Email: ${body.email}

📱 Телефон: ${body.phone}

🧠 Тип консультации: ${body.type}

📝 Сообщение:
${body.message}
    `

    const token = "8690050991:AAEDWwbOnrfmCLWeTPcMhGinYCjdSn_yK-k"
    const chatId = "1272772327"

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`

    await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false })
  }
}