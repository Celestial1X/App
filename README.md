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

## Deploying on Render without losing data

Render web services run on ephemeral filesystems by default, so local files can be reset on deploy/restart.

To persist this app's JSON storage:

1. In Render, add a **Persistent Disk** to your web service.
2. Set mount path (example): `/var/data`.
3. Add environment variable `DATA_DIR=/var/data/app-data` (or leave unset and rely on `RENDER_DISK_MOUNT_PATH`).
4. Redeploy.

The backend now prefers:
- `DATA_DIR` (if set)
- otherwise `RENDER_DISK_MOUNT_PATH/app-data` (Render persistent disk)
- otherwise local `./data` (local development)

For production workloads, using a managed database (e.g. Render PostgreSQL) is still recommended over file-based storage.
