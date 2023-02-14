import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignIn from './SignIn';

function Login() {
    return (
        <>


            <SignIn />

            {/* <Form style={{ margin: 20 }} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Login ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Id" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password Here" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
        </>
    );
}

export default Login;