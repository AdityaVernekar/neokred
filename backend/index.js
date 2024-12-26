const express = require('express');
const bodyParser = require('body-parser');
const { marked } = require('marked');
const { JSDOM } = require('jsdom');
const dompurify = require('dompurify');
const cors = require("cors")
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors())

// Function to sanitize HTML using DOMPurify
const sanitizeHtml = (html) => {
  const window = new JSDOM('').window;
  const DOMPurify = dompurify(window);
  return DOMPurify.sanitize(html);
};

// API Endpoint
app.post('/convert-markdown', (req, res) => {
  const { markdown } = req.body;

  if (!markdown) {
    return res.status(400).json({ error: 'Markdown content is required' });
  }

  try {
    // Convert Markdown to HTML
    const rawHtml = marked(markdown, { breaks: true });
    const sanitizedHtml = sanitizeHtml(rawHtml);

    res.json({ html: sanitizedHtml });
  } catch (error) {
    console.error('Error converting markdown:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Markdown-to-HTML API server running at http://localhost:${PORT}`);
});
