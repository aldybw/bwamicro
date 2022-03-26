import Head from "next/head";
import Link from "next/link";

function Courses({ todos }) {
  return (
    <>
      <Head>Micro | Courses</Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-3xl">Fetching Random Words</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="border border-indigo-700 p-4">
                {todo?.title ?? "-"}{" "}
                <Link href="/courses/[id]" as={`/courses/${todo.id}`}>
                  <a>Launch</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

Courses.getInitialProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);
    return { todos: res };
  } catch (error) {}
};

export default Courses;
