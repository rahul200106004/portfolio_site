// api/proxy.js - Routes all API calls to your backend
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export default async function handler(req, res) {
  const { path } = req.query;
  const pathString = Array.isArray(path) ? path.join('/') : path;
  
  try {
    const response = await axios({
      method: req.method,
      url: `${BACKEND_URL}/${pathString}`,
      data: req.body,
      headers: {
        ...req.headers,
        'Content-Type': 'application/json',
      },
      validateStatus: () => true, // Don't throw on any status
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Backend service unavailable' });
  }
}
