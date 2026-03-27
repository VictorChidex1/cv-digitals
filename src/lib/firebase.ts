import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase App
export const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize App Check (reCAPTCHA v3 Anti-Spam Framework)
// Guard against node execution environments; strictly client-side instantiation
if (typeof window !== "undefined" && import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
      // Automatically refresh tracking tokens internally blocking UI interference
      isTokenAutoRefreshEnabled: true
    });
  } catch (err) {
    console.error("Firebase App Check failed to map to structural keys", err);
  }
}

// Initialize Firestore Database (crucial for Lead Capture as per ProjectOverview)
export const db: Firestore = getFirestore(app);

// Initialize Analytics (wrapped in isSupported to prevent ad-blocker crashes)
export let analytics: Analytics | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});
