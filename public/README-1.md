# ✦ OMNISCI — Powered by Grok (xAI)

## Deploy in 4 steps — takes about 5 minutes

---

### STEP 1 — Upload files to GitHub

1. Go to https://github.com and sign up / log in
2. Click the **+** button → **New repository**
3. Name it: `omnisci-xai`
4. Click **Create repository**
5. Click **uploading an existing file**
6. Upload ALL files keeping this exact structure:

```
omnisci-xai/
├── server.js
├── package.json
├── render.yaml
├── .gitignore
└── public/
    └── index.html
```

⚠️ Make sure `index.html` is inside a folder called `public`

7. Click **Commit changes**

---

### STEP 2 — Deploy on Render.com (FREE)

1. Go to https://render.com and sign up (free, no credit card)
2. Click **New +** → **Web Service**
3. Click **Connect a repository** → connect your GitHub
4. Select your `omnisci-xai` repository
5. Render will auto-detect settings from `render.yaml`
6. Scroll down to **Environment Variables**
7. Click **Add Environment Variable**:
   - Key:   `XAI_API_KEY`
   - Value: `xai-VqdO27f8qU0yTfCVsPZfd0moHyGKvPGnWwphtO9fwAeoAro49t6F65G654jC15vZeGbXKokr0t2EzeCf`
8. Click **Create Web Service**

---

### STEP 3 — Wait for deploy (~2 minutes)

Render will show build logs. When you see:
```
✦ OMNISCI (xAI/Grok) running on port 10000
```
It's ready!

---

### STEP 4 — Open in any browser

Render gives you a permanent URL:
```
https://omnisci-xai.onrender.com
```
(the exact name may vary slightly)

Open it on **any device, any browser, anywhere in the world**. ✦

---

## ⚠️ Important: Regenerate your API key

Your xAI key was shared in a chat conversation, which means others could see it.

1. Go to https://console.x.ai
2. Go to API Keys → delete the old key
3. Create a new key
4. Update it in Render: Dashboard → your service → Environment → edit `XAI_API_KEY`

---

## Free tier note

Render's free tier sleeps after 15 minutes of inactivity.
The first load after sleeping takes ~30 seconds.
To avoid this, upgrade to Render Starter ($7/month).

---

## File structure explained

| File | Purpose |
|------|---------|
| `server.js` | Node.js server — holds your API key securely, proxies to xAI |
| `package.json` | Lists dependencies (express, cors) |
| `render.yaml` | Tells Render how to build and run the app |
| `public/index.html` | The full OMNISCI frontend (cosmic UI, 12 domains) |
