import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./init";
import bcrypt from "bcrypt";
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(user: {
  fullname: string;
  email: string;
  password: string;
  role: string;
}) {
  const q = query(collection(db, "users"), where("email", "==", user.email));
  const querysnapshot = await getDocs(q);
  const data = querysnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    return { status: false, statusCode: 400, message: "User already exists" };
  } else {
    user.role = "member";
    user.password = await bcrypt.hash(user.password, 10);
    try {
      await addDoc(collection(db, "users"), user);
      return { status: true, statusCode: 200, message: "Success" };
    } catch (error) {
      return { status: false, statusCode: 400, message: "Failed" };
    }
  }
}

export async function Login(data: { email: string }) {
  const q = query(collection(db, "users"), where("email", "==", data.email));
  const querysnapshot = await getDocs(q);
  const user: any = querysnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    return user[0];
  } else {
    return null;
  }
}
