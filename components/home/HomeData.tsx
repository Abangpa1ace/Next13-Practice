'use client'

import { useEffect, useState } from "react";
import { getPostData, getPostsData } from "../../api";

const HomeData = () => {
  const [data, setData] = useState<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const list = await getPostsData();
      setData(list);
    }

    fetchData();
  }, [])

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default HomeData;