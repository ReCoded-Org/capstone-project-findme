import { doc } from 'prettier';
import firebase from '../../firebase'
import useFirestore from '../../hooks/useFirestore'

const searchResult = [];
//const ref = firebase.firestore().collection('images');
//const [d,setD]=useFirestore('images', searchInfo);
export const getSearchInfo = (searchInfo) => {
    console.log(searchInfo);
    // = docs && docs.map((item, index) => item.values.fristName === 'Sondos')

    return searchInfo;
};