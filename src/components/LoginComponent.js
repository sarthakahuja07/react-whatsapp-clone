import React from 'react'
import '../css/loginComponent.css'
import { Button } from '@material-ui/core';
import db, { auth, provider } from '../firebase';

function Login() {
    function signInWithGoogle() {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                var dbUsers = db.collection("users");
                dbUsers.where("email", "==", user.email)
                    .get()
                    .then((querySnapshot) => {
                        
                        if((querySnapshot.size)===0){
                            
                            db.collection("users").add({
                                name: user.displayName,
                                email: user.email,
                                picture: user.photoURL
                            })
                                .then((docRef) => {
                                    console.log("Document written with ID: ", docRef.id);
                                })
                                .catch((error) => {
                                    console.error("Error adding document: ", error);
                                });            
                        }else{
                            alert("already exists")
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });

                
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode+ " : " +errorMessage)
            });
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div className="login-text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signInWithGoogle}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
