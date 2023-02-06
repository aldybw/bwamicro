import Head from "next/head";
import Link from "next/link";

import axios from "configs/axios";

import Circle from "../../public/images/circle-accent-1.svg";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Clients from "parts/Clients";
import ListCourses from "parts/ListCourses";
import ListCategories from "parts/ListCategories";
import Footer from "parts/Footer";

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
          <ListCourses></ListCourses>
        </section>
        <section className="container mx-auto pt-24">
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
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
