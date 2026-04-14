## Local Setup

### Step 1 — Download the project

Download and unzip the project folder, then open it in VS Code.

### Step 2 — Install frontend dependencies

Open a terminal in the project root and run:

```bash
npm install
```

### Step 3 — Install backend dependencies

```bash
cd server
npm install
```

### Step 4 — Set up environment variables

Create a `.env` file in the **project root** (not inside `server/`) with the following:

```dotenv
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.zhz2qnd.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5001
```

### Step 5 — Run the application

You need **two terminal tabs** open at the same time:

**Terminal 1 — Frontend:**
```bash
npm run dev
```

**Terminal 2 — Backend:**
```bash
cd server
npm run dev
```

When the backend is connected successfully you will see:
```
✅ Connected to MongoDB Atlas
🚀 Server running on http://localhost:5001
```

### Step 6 — Open in browser

```
http://localhost:5173
```

---

## Mongo db credentials:
email: quiijadas@sheridancollege.ca
password: Tiramisu123.