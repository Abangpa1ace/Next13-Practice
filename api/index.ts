export const getPostsData = async (): Promise<{
  userId: number;
  id: number;
  title: string;
  body: string;
}[]> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  return data.json();
}

export const getPostData = async (id: number) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return data.json();
}