import firebase from '../../firebase'
import 'firebase/auth';

// The signInWithGoogle pop-up window should show available google accounts,
//  from which I select one and it continues, and register that user in firebase authentication user.
//  But the pop-up does not show any available google account (there are two logged in accounts in my browser),
//  and the pop-up disappears automatically after about 5 sec

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

