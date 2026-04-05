import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

// ✅ CORS - allow all origins in development
app.use(cors());
app.use(express.json());

// ✅ CHECK API KEY
if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'your_groq_api_key_here') {
  console.log("❌ ERROR: Groq API key is missing or not configured in server/.env!");
  console.log("   Get a free key at: https://console.groq.com");
}

// ✅ GROQ CONFIG
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ✅ TRAINING DATA (VERY IMPORTANT)
const systemPrompt = `
You are Sanjay's AI portfolio assistant.

ONLY answer about:
- Skills
- Projects
- Experience
- Contact

Details:
Sanjay S is a Full Stack Developer and UI/UX Designer.

Skills:
React, JavaScript, Node.js, Express, MongoDB, HTML, CSS, UI/UX, Git

Projects:
1. Online Job Portal (React, Node.js) - Features job listings and filtering.
2. Online Course Portal (HTML, CSS, JS) - Responsive exploration application.
3. Smart Career Development System (React, AI, Express) - Career coaching with ATS checks.

Experience:
3+ years experience
50+ projects completed
15+ happy clients

Rules:
- Keep answers short and direct.
- Be professional and friendly.
- If a question is unrelated to Sanjay's portfolio, say:
"I can only answer about Sanjay's portfolio. How can I help you regarding his skills or projects?"
`;

// ✅ API ROUTE
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    console.log("User Message:", message);

    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'your_groq_api_key_here') {
      return res.status(500).json({ reply: "Groq API key is missing in server/.env. Get a free key at https://console.groq.com" });
    }

    // ✅ GROQ API CALL (using llama-3.3-70b-versatile - free & fast)
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = response.choices[0].message.content;
    console.log("AI Reply:", reply);

    res.json({ reply });

  } catch (error) {
    console.error("❌ ERROR:", error.message);

    res.status(500).json({
      reply: "Server error. Please check backend console or API key configuration.",
    });
  }
});

// ✅ SERVER RUNNING CHECK
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});