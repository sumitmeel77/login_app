import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

async function loginUser(credentials) {
    // request made to server
    const output = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }
    ).then((res) => res.json())

    if (output.status === 'ok') {
        window.location.href = "/Home"
        localStorage.setItem('token', JSON.stringify(credentials))


    } else {
        alert(output.error)
    }
}
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function checkCookie(value) {
        let username = getCookie(value);
        if (username !== "") {
            return ("true")
        } else {
            return ("false")
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();

        await loginUser({
            email,
            password
        });

        if (checkCookie("email") !== "true") {
            document.cookie = `email=${email}`
            var arr = []
            var json_str = JSON.stringify(arr);
            document.cookie = `${email} = ${json_str}`
        }
    }

    return (
        <div className="center">
            <h1>LOGIN</h1>
            <Form onSubmit={handleSubmit} id="login" >
                <div className="txt_field">
                    <Form.Group size="lg" controlId="email">
                        <Form.Control
                            autoFocus
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className="txt_field">
                    <Form.Group size="lg" controlId="password">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>

        </div>


    );
}
