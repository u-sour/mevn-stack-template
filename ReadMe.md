# 🏗️ MEVN-Stack-Template

This is a simple template for building "MEVN" stack with authentication.

## 🛸 Deployment

it's simple you can deploy backend & frontend separately.

💻 **Frontend** you can choose render, vercel, netify etc...

🗃️ **Backend** you can choose render, vercel etc...

how about deploy backend and frontend together ?

yes, you can also deploy it on vercel or render.

## 🤔 How to deploy on [Render](https://render.com/) ?

💻 **Frontend**

1. set your website address in .env file

   example: `VITE_API_URI="https://mevn-deploy.onrender.com"`

2. run cmd `npm run build `
3. copy all files from **dist** folder on frontend then paste into **public** folder on backend

🗃️ **Backend**

1.  add your website address in allowed_origin.js file

    example:

    ```
    const origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://192.168.1.13:5173",
    "http://localhost:5174",
    "http://192.168.1.13:5174",
    "https://mevn-deploy.onrender.com"
    ];
    export default origins;
    ```

2.  push all of your source code into github

☁️ **Render**

1. login > new > web service > build and deploy from a git repository
2. select your rpo that you want to deploy > connet
3. input the information that render require and your enviroment variables
4. create web service and wait until it build successful

**That's it, congratulation** 🥳

## 🤔 Where should i start ?

go to backend and frontend folder and check ReadMe.md file.

😎 good luck, see you there.
