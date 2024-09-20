import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    // to ensure 'q' is a valid query array of "length 3"
    if (q && Array.isArray(q) && q.length === 3) {
      try {
        ref = query(ref, where(...q));
      } catch (err) {
        setError('Invalid query format or Firestore error');
        console.error(err);
      }
    } else if (q) {
      setError('Query must be an array of length 3');
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
      setError(null);
    }, (err) => {
      setError('Failed to get documents');
      console.error(err);
    });

    return () => unsub();
  }, [c, q]);

  return { documents, error }; // return error for debugging
};