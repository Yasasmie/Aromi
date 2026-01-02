const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();

app.use(cors());
app.use(express.json());

// List users with Firestore profiles
app.get('/users', async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers(1000);
    const users = listUsersResult.users;

    // Fetch all user profiles from Firestore
    const profilesSnapshot = await db.collection('userProfiles').get();
    const profilesMap = {};
    profilesSnapshot.forEach(doc => {
      profilesMap[doc.id] = doc.data();
    });

    const usersWithAccepted = users.map(user => {
      const profile = profilesMap[user.uid] || {};
      return {
        uid: user.uid,
        email: user.email,
        accepted: user.customClaims?.accepted || false,
        username: profile.username || "",
        whatsapp: profile.whatsapp || ""
      };
    });

    res.json(usersWithAccepted);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send(error.message);
  }
});

// Delete user and profile
app.delete('/users/:uid', async (req, res) => {
  try {
    await db.collection('userProfiles').doc(req.params.uid).delete().catch(() => {});
    await admin.auth().deleteUser(req.params.uid);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send(error.message);
  }
});

// Update user email or disabled status
app.put('/users/:uid', async (req, res) => {
  try {
    const { email, disabled } = req.body;
    const updateParams = {};
    if (email) updateParams.email = email;
    if (typeof disabled === 'boolean') updateParams.disabled = disabled;

    const userRecord = await admin.auth().updateUser(req.params.uid, updateParams);
    res.json(userRecord);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(error.message);
  }
});

// Accept user
app.post('/users/accept/:uid', async (req, res) => {
  try {
    const uid = req.params.uid;
    await admin.auth().setCustomUserClaims(uid, { accepted: true });
    res.sendStatus(200);
  } catch (error) {
    console.error("Error accepting user:", error);
    res.status(500).send(error.message);
  }
});

// Save user profile
app.post('/users/profile', async (req, res) => {
  try {
    const { uid, username, whatsapp } = req.body;
    if (!uid || !username || !whatsapp) {
      res.status(400).send("Missing uid, username, or whatsapp");
      return;
    }
    await db.collection('userProfiles').doc(uid).set({ username, whatsapp });
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving user profile:", error);
    res.status(500).send(error.message);
  }
});


// Get all advertisements
app.get('/advertisements', async (req, res) => {
  try {
    const adsSnapshot = await db.collection('advertisements').orderBy('createdAt', 'desc').get();
    const ads = [];
    adsSnapshot.forEach(doc => {
      ads.push({ id: doc.id, ...doc.data() });
    });
    res.json(ads);
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add new advertisement
app.post('/advertisements', async (req, res) => {
  try {
    const { title, content, link, poster } = req.body;
    if (!title || !content || !poster) {
      res.status(400).json({ error: 'Missing title, content or poster URL' });
      return;
    }
    const newAd = {
      title,
      content,
      link: link || '',
      poster,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const docRef = await db.collection('advertisements').add(newAd);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error('Error adding advertisement:', error);
    res.status(500).json({ error: error.message });
  }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Admin API listening on port ${PORT}`));