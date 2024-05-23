import supabase from './supabase';

/**
 * This JavaScript function uses Supabase to fetch all data from the 'cabins' table asynchronously.
 * @returns The `getCabins` function is returning the data retrieved from the 'cabins' table in the Supabase database.
 */
export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

/**
 * The function `createCabin` inserts a new cabin record into a database table and returns the inserted data or throws an error if unsuccessful.
 * @param newCabin - The `newCabin` parameter is an object that represents a new cabin to be created. It contains properties such as `name`, `location`, `description`, `price`, etc., which will be inserted into the `cabins` table in the database.
 * @returns The `createCabin` function is returning the `data` from the insert operation on the 'cabins' table in the Supabase database.
 */
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }
  return data;
}

/**
 * This JavaScript function uses Supabase to delete a cabin from a database based on its ID.
 * @param id - The `id` parameter in the `deleteCabin` function represents the unique identifier of the cabin that you want to delete from the database. This identifier is used to specify which cabin record should be deleted from the 'cabins' table in the database.
 * @returns The `deleteCabin` function is returning the data of the deleted cabin if the deletion is successful. If there is an error during the deletion process, an error message is logged and an error is thrown with the message 'Cabins could not be deleted'.
 */
export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }
  return data;
}
