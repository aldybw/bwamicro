import Head from "next/head";
import Link from "next/link";

function Todo({ todo }) {
  return (
    <>
      <Head>Micro | Courses | {todo.title}</Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-3xl">{todo.title}</h1>
        <p>Please complete your task!</p>
        <Link href="/courses">Bring me to courses page!</Link>
      </main>
    </>
  );
}

Todo.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return { todo: res };
  } catch (error) {}
};

export default Todo;
