/* imports */

import { createPost } from '../fetch-utils.js';

const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');
const postSubmitButton = document.getElementById('post-submit-button');

let error = null;

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);
    const post = {
        category: formData.get('post-category'),
        title: formData.get('post-title'),
        content: formData.get('post-content'),
        contact: formData.get('post-contact'),
    };

    const response = await createPost(post);
    error = response.error;
    postSubmitButton.disabled = false;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});

function displayError() {
    if (error) {
        //eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
