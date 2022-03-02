import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'


const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_KEY,
  authDomain: process.env.NUXT_ENV_AUTHDOMAIN,
  projectId: process.env.NUXT_ENV_PROJECTID,
  storageBucket: process.env.NUXT_ENV_STORAGEBUCKET,
  messsagingSenderId: process.env.NUXT_ENV_MESSAGING,
  appId: process.env.NUXT_ENV_APPID,
  measumerementId: process.env.NUXT_ENV_MEASUREMENT,
}

const app = initializeApp(firebaseConfig)
const fireAnalytics = getAnalytics(app)
const fireAuth = getAuth(app)
const fireDataBase = getFirestore(app)
const fireStore = getStorage(app)
const fireFunctions = getFunctions(app)

export {
  app,
  fireAnalytics,
  fireAuth,
  fireDataBase,
  fireStore,
  fireFunctions
}