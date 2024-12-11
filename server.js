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

app.post('product/add', async (req, res) => { 
    try { 
     const data = req.body;     
     const docRef = await db.collection('products').add(data);     
     res.status(200).send({ id: docRef.id }); 
    } catch (error) { 
      res.status(500).send(error.message); 
    } 
});

app.get('/get', async (req, res) => {
    try {
      const snapshot = await db.collection('products').get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(items);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.put('product/update/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
  
    try {
      await db.collection('products').doc(id).update(data);
      res.status(200).send('Product updated successfully.');
    } catch (error) {
      res.status(500).send(`Error updating product: ${error.message}`);
    }
  });
  
  app.delete('product/delete/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await db.collection('products').doc(id).delete();
      res.status(200).send('Product deleted successfully.');
    } catch (error) {
      res.status(500).send(`Error deleting product: ${error.message}`);
    }
  });
