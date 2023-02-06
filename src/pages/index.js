import Head from "next/head";
import Link from "next/link";

import axios from "configs/axios";

import Circle from "public/images/circle-accent-1.svg";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Clients from "parts/Clients";
import ListCourses from "parts/ListCourses";

function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
