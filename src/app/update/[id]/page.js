"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(props) {
  const params = useParams();
  const id = params.id;
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${id}`)
      .then((res) => {
        return res.json(); //json->object
      })
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, [id]);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }), //object->json
    };
    fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${id}`, options)
      .then((res) => res.json()) //결과를 객체형식으로 바꿔줌
      .then((result) => {
        console.log(result);
        router.push(`/read/${result.id}`);
        router.refresh();
      });
    console.log(props.params);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
          />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="content"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
      <hr />
    </div>
  );
}
