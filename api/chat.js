export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { contents } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY is missing from environment variables.");
    return res.status(500).json({ 
      error: { message: "GEMINI_API_KEY is not configured on the server. Please add it to your Vercel Environment Variables." } 
    });
  }

  try {
    // Using gemini-1.5-flash as it is the current stable production model
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Fetch Error:", error);
    return res.status(500).json({ error: { message: "Internal Server Error: " + error.message } });
  }
}
