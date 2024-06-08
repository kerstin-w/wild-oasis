import supabase from './supabase';

/**
 * The `signup` function uses Supabase authentication to sign up a user with their full name, email, and password, and returns the user data if successful.
 * @returns The `signup` function is returning the `data` object if the signup process is successful.
 * If there is an error during the signup process, it will throw an error with the error message.
 */
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

/**
 * This function uses Supabase authentication to sign in a user with their email and password.
 * @returns The `login` function is returning the `data` object if the login operation is successful.
 * If there is an error during the login process, it will throw an error with the error message.
 */
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * This function retrieves the current user's information using Supabase authentication.
 * @returns The `getCurrentUser` function returns the current user data if the user is authenticated, or `null` if the user is not authenticated.
 */
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

/**
 * The `logout` function uses Supabase authentication to sign out the current user and throws an error if there is any issue.
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
