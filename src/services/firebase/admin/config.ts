import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'
import { AdminConfig } from './types'

const adminConfig: AdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  storageBucket: process.env.FIREBASE_ADMIN_STORAGE_BUCKET
}

// Initialize Firebase Admin only if no apps exist
if (getApps().length === 0) {
  initializeApp(adminConfig)
}

export const adminAuth = getAuth()
export const adminDb = getFirestore()
export const adminStorage = getStorage()