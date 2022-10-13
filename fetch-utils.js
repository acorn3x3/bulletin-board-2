const SUPABASE_URL = 'https://zogrmhjyrojbebzdkecn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvZ3JtaGp5cm9qYmViemRrZWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1OTg5MDMsImV4cCI6MTk4MTE3NDkwM30.HO19U6FT6JOGwXh9xEwuNe9axtokLTkYcMzjS-fruVI';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function createPost(post) {
    return await client.from('posts').insert(post).single();
}

export async function getPosts() {
    let query = client.from('posts').select('*').order('created_at').limit(200);

    return await query;
}
