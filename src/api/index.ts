export const getAllUsers = async () => {
  try {
    const response = await fetch('https://run.mocky.io/v3/f69883b1-d5f3-4b9a-a877-27df73449bd2');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
  