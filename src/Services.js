export async function getPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Gagal mengambil data post.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
