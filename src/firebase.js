import firebase from 'firebase/app'
import "firebase/auth" 
import firebaseConfig from './firebaseKey'



const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export default app