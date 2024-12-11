# Build and Test RESTful APIs with Node.js, Firebase Firestore, and Postman
![Nodes js tutorial](https://github.com/user-attachments/assets/e6b94f08-286e-484a-83c0-8e1a3dd4eeac)

## Introduction

Welcome to the tutorial on building a RESTful API using Node.js and Firebase Firestore. This guide is designed for beginners and experienced developers alike, covering everything from setting up your environment to creating, managing, and testing API endpoints.

---

## **Table of Contents**

1. [Setup](#setup)
2. [Building the RESTful API with Node.js and Firestore](#building-the-restful-api)
3. [Testing with Postman](#testing-with-postman)
4. [Conclusion](#conclusion)

---

## **Setup**

### Prerequisites:

1. **Node.js and npm**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Firebase Project Setup**:
   - Sign up or log in to Firebase.
   - Create a new Firebase project through the Firebase Console.
   - Enable Firestore in the Cloud Firestore section.
   - Download the Firebase service account key (JSON file) from Project Settings > Service Accounts.
   
3. **Postman**:
   - Download and install Postman from [postman.com](https://www.postman.com/).

---

## **Building the RESTful API with Node.js and Firestore**

1. **Initialize Your Project**:
   ```bash
   mkdir my-api-project
   cd my-api-project
   npm init -y
   
Install the required dependencies:
   'npm install express firebase-admin dotenv cors'
   
2. **Set Up Firebase Firestore**:
Log into Firebase using the CLI and initialize your project:
   ```bash
   firebase login
   firebase init

Place the Firebase service account key in your project directory and add its path to your .env file:
   ```bash
FIREBASE_KEY_PATH=./serviceAccountKey.json


Create a new file named server.js and initialize Firebase in it:
```javascript
   const express = require('express'); 
const cors = require('cors'); 
require('dotenv').config(); 
const admin = require('firebase-admin'); 
const serviceAccount = require(process.env.FIREBASE_KEY_PATH);
  
admin.initializeApp({ 
     credential: admin.credential.cert(serviceAccount), 
}); 

const db = admin.firestore();  

const app = express(); 
app.use(cors()); 
app.use(express.json());
  
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




   

   

