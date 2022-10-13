export function renderPost(post) {
    const li = document.createElement('li');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.content;

    const h2 = document.createElement('h2');
    h2.textContent = post.contact;

    li.append(h2, p, h3);

    return li;
}
