import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL = "http://accounts.spotify.com/authorize?client_id=0f63f51cf1cf439d8522e9c2b331dadb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-top-read%20user-modify-playback-state";
export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" 
        style={{minHeight: "100vh"}}>
            <h1>Login</h1>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
        </Container>
    );
}