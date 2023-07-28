import { getAuth } from "firebase-admin/auth";
import { getFirestore  } from "firebase-admin/firestore";
import { FB_PROJECT_ID, FB_CLIENT_EMAIL, FB_PRIVATE_KEY } from "$env/static/private";
import pkg from "firebase-admin";

try {
  console.log('FB_PRIVATE_KEY=',FB_PRIVATE_KEY)
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
} catch (err:any) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase admin initialization error", err.stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();