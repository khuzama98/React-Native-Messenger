import * as firebase from 'firebase'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBX7MbfpDcODNxB-39_TPK0wypeg7kXvA8",
    authDomain: "messenger-60338.firebaseapp.com",
    databaseURL: "https://messenger-60338.firebaseio.com",
    projectId: "messenger-60338",
    storageBucket: "messenger-60338.appspot.com",
    messagingSenderId: "373695051394",
    appId: "1:373695051394:web:5718d8de763be497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

function login(token) {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase.auth().signInWithCredential(credential)
        .then((res) => {
            // console.log('res ==>', res.user)
            const { displayName, uid, photoURL } = res.user
            const obj = { displayName, photoURL, uid }
            db.collection('users').doc(uid).set(obj)
                .then((success) => {
                    return success
                })
                .catch((e) => console.log(e))
        })
        .catch((e) => console.log(e))

}

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        let users = []
        db.collection('users').get()
            .then(snap => {
                snap.forEach(item => {
                    if (item.data().uid !== firebase.auth().currentUser.uid)
                        return users.push(item.data())
                })
                resolve(users)
                // return users
            })
            .catch((e) => {
                reject({ message: e.message })
                // return e
            })
    })

}

const createChatRoom = (friendId) => {
    const userId = firebase.auth().currentUser.uid
    let chatExist = false;
    return new Promise((resolve, reject) => {

        db.collection('chatrooms')
            .where('users.' + userId, '==', true)
            .where('users.' + friendId, '==', true).get().then(snap => {

                snap.forEach(item => {
                    chatExist = { data: item.data(), roomId: item.id }
                })

                if (!chatExist) {
                    const obj = {
                        createdAt: Date.now(),
                        users: {
                            [friendId]: true,
                            [firebase.auth().currentUser.uid]: true
                        }
                    }

                    db.collection('chatrooms').add(obj).then(snap => {
                        resolve({ data: obj, roomId: snap.id })
                    })
                }
                else {
                    resolve(chatExist)
                }
            })
            .catch((e) => {
                reject({ message: e.message })
            })
    })

}

const sendMessageToDb = (roomId, message) => {
    console.log('roomID ==>', roomId)
    console.log('message ==>', message)

    const obj = {
        message,
        userId: firebase.auth().currentUser.uid,
        timestamp: Date.now()
    }

    return db.collection('chatrooms').doc(roomId).collection('messages').add(obj)
}

const addStory = async (user, image) => {
    const response = await fetch(image);
    console.log('response ==>', response)
    const blob = await response.blob();
    console.log('blob ==>', blob)
    let storyName = image.split(/[\\/]/g).pop().split('.')[0];
    console.log('storyName ==>', storyName)
    var ref = storage.ref('stories').child(storyName);
    console.log('ref ==>', ref)

    return ref.put(blob);

}

const getAllStories = async () => {
    return new Promise((resolve, reject) => {

        db.collection('stories').onSnapshot(snapshot => {
            const stories = [];
            snapshot.forEach(doc => {
                // console.log(doc.data())
                stories.push({ data: doc.data(), id: doc.id })
            })
            resolve(stories)
        })
    })

}

export {
    db,
    auth,
    storage,
    addStory,
    login,
    getAllUsers,
    createChatRoom,
    sendMessageToDb,
    getAllStories
}