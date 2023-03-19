import Head from "next/head";

import Circle from "../../public/images/circle-accent-1.svg";

import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import ListCategories from "parts/ListCategories";
import ListCourses from "parts/ListCourses";

import courses from "constants/api/courses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
      </Head>

      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="container px-4 mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <Clients></Clients>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          {/* <ListCourses></ListCourses> */}
          <ListCourses data={data}></ListCourses>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <ListCategories></ListCategories>
        </section>
        <section className="mt-24 bg-indigo-1000 py-12">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
