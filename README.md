# App

## Backend (optional)
Run the backend server to persist records to a local JSON file instead of relying on browser storage.

```bash
npm install
npm start
```

The server will:
- Serve the static site at `http://localhost:3000`
- Expose a JSON API at `/api/records` (GET/POST) and `/api/records/:id` (GET/DELETE)

Stored records are written to `data/records.json` (gitignored).
