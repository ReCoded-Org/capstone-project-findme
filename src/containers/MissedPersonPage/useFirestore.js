import { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase';
import getDataById from './getDataById';

const useFirestore = (id2) => {
    const [docs, setDocs] = useState({});
    const [state, setState] = useState('Loading...')

    useEffect(() => {
        const unsub = projectFirestore.collection('images')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id });
                })
                setDocs(getDataById(id2, documents));

            });

        setState('')
        return () => unsub();
        // this is a cleanup function that react will run when
        // a component using the hook unmounts
    }, ['images']);

    return { docs, state };
}

export default useFirestore;