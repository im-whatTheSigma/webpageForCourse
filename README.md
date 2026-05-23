# Brute Force Lab Setup

This repository contains a simple login portal designed for a brute-forcing exercise at your cryptography/network security camp.

## Why Vercel instead of GitHub Pages?
For brute-forcing tools (like Hydra, ffuf, Burp Suite, or Python scripts) to work effectively, the server needs to return proper HTTP responses (e.g., Status `401 Unauthorized` for failure, or `200 OK` + Flag for success). 
Static sites (like GitHub Pages) only run client-side JavaScript, which most automated brute-forcing tools do not execute. By using Vercel, we can employ a lightweight "Serverless Function" (`api/login.js`) that acts exactly like a real backend server.

## Files
* `index.html`: The very simple, un-beautified login front-end.
* `api/login.js`: The backend handler that checks credentials and returns the flag.

## How to Customize
1. Open `api/login.js`.
2. Change the `TARGET_PASSWORD` to the password you want your students to guess. (Currently set to `password123`).
3. Change the `FLAG` to your desired CTF flag format.

## Deployment to Vercel
1. Create a GitHub repository and push these files to it.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and import the repository you just created.
4. Leave all build settings as default (Framework Preset: Other) and click **Deploy**.
5. Once deployed, provide the Vercel URL to your students! They can point their brute-forcing tools directly at the `/api/login` endpoint.
