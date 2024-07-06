import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { Link, useNavigate, Form, redirect } from 'react-router-dom';
function NewPost(props) {
    function handleSubmit(e) {
        e.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData)
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json"
            }
        })
    }
    return (
        <Modal>
            <Form method="POST" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label> 
                    <textarea id="body" required rows={3} name='body' maxLength="200"/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name='author' maxLength="20" required />
                </p>
                <p className={classes.actions}>
                    <Link to="..">
                        Cancel
                    </Link>
                    <button type='submit'>
                        Submit
                    </button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;
export async function action({request}) {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)
    await fetch("https://polybotapi.ddns.net/posts/create", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-type": "application/json"
        }
    })
    return redirect("..")
}