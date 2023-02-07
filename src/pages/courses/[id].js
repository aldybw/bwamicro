import courses from "constants/api/courses";
import Head from "next/head";
import Youtube from "react-youtube";
import Header from "parts/Header";
import { data } from "parts/ListCourses";

// public image files
import Nametag from "../../../public/images/icon-nametag.svg";
import Playback from "../../../public/images/icon-playback.svg";
import Certificate from "../../../public/images/icon-certificate.svg";

import Feature from "parts/Details/Feature";
function DetailCourse({ data, res }) {
  return (
    <>
      <Head>Micro</Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {res?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <Youtube
              videoId={res?.chapters?.[0]?.lessons?.[0]?.video}
              id={res?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></Youtube>
          </div>
        )}

        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Kelas Online: </h3>
            <h4 className="text-6xl text-teal-500 font-semibold">
              {res?.name ?? "Nama Kelas"}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <Feature
                data={{
                  icon: <Nametag className="fill-teal-500" />,
                  meta: "STUDENT",
                  value: res?.total_student ?? 0,
                }}
              ></Feature>
              <Feature
                data={{
                  icon: <Playback className="fill-teal-500" />,
                  meta: "VIDEO",
                  value: res?.total_videos ?? 0,
                }}
              ></Feature>
              <Feature
                data={{
                  icon: <Certificate className="fill-teal-500" />,
                  meta: "CERTIFICATE",
                  value: res?.certificate === 1 ? "Tersedia" : "",
                }}
              ></Feature>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

DetailCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    // const data = await courses.details(id);
    // return { data };
    const res = data[id - 1];
    return { res };
  } catch (error) {}
};

export default DetailCourse;
