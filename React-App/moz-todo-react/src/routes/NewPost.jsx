import { Link, Form, redirect } from 'react-router-dom';
import './NewPost.module.css'
import Modal from '../components/Modal.jsx'



function NewPost() {
    // const [message, setMessage] = useState(''); //state value and state data array to update that value
    // const [authorName, setAuthor] = useState(''); //state value and state data array to update that value
    //in useState  2 variables we pass in a const array , 
    // 1 is to access the current value of the element/component and 
    //2. a function to update the state of the component or element so the component gets rendered on state change 
    // since function components are stateless , we are using use State hook to keept track of the state of the component 
    //when component state is updated so virtual dom check teh snapshot of teh previous state and current state if any change then it will render the UI 


    return (
        <Modal>
            <div className="postNew" >
                <Form method='post'>
                    <p>
                        <label htmlFor="body">Message
                            <textarea id="body" name="body" required rows={3} ></textarea></label>
                    </p>

                    <p>
                        <label htmlFor="name">Your Name
                            <input type="text" id="name" name="author" required ></input></label>
                    </p>
                    <p>
                        <Link to="/">Cancel</Link>
                        <button>Submit</button>
                    </p>
                </Form>
            </div>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    const response = await fetch('http://localhost:8080/postData', {

        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('this is the response of reuqest' + response);
    return redirect('/');
}
