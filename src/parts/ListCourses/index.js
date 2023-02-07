import React from "react";
import Link from "next/link";
import RenderItem from "./RenderItem";

export const data = [
  {
    id: 1,
    thumbnail: "/images/courses-graphic-designer-101.jpg",
    name: "Graphic Designer 101",
    level: "All Levels",
    chapters: [
      {
        id: 4,
        course_id: 1,
        lessons: [
          {
            chapter_id: 4,
            id: 1,
            name: "Introduction",
            video: "MiiANxRHSv4",
          },
        ],
        name: "Getting Started",
      },
    ],
    total_student: 15,
    total_videos: 1456,
    certificate: 1,
  },
  {
    id: 2,
    thumbnail: "/images/courses-start-vlogging.jpg",
    name: "Start Vlogging",
    level: "Beginner",
    chapters: [
      {
        id: 4,
        course_id: 1,
        lessons: [
          {
            chapter_id: 4,
            id: 1,
            name: "Introduction",
            video: "MiiANxRHSv4",
          },
        ],
        name: "Getting Started",
      },
    ],
    total_student: 15,
    total_videos: 1456,
    certificate: 1,
  },
  {
    id: 3,
    thumbnail: "/images/courses-graphic-designer-101.jpg",
    name: "Graphic Designer 101",
    level: "All Levels",
    chapters: [
      {
        id: 4,
        course_id: 1,
        lessons: [
          {
            chapter_id: 4,
            id: 1,
            name: "Introduction",
            video: "MiiANxRHSv4",
          },
        ],
        name: "Getting Started",
      },
    ],
    total_student: 15,
    total_videos: 1456,
    certificate: 1,
  },
  {
    id: 4,
    thumbnail: "/images/courses-start-vlogging.jpg",
    name: "Start Vlogging",
    level: "Beginner",
    chapters: [
      {
        id: 4,
        course_id: 1,
        lessons: [
          {
            chapter_id: 4,
            id: 1,
            name: "Introduction",
            video: "MiiANxRHSv4",
          },
        ],
        name: "Getting Started",
      },
    ],
    total_student: 15,
    total_videos: 1456,
    certificate: 1,
  },
];

export default function ListCourses() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">New Classes</h2>
          <h3 className="text-lg text-gray-900">
            Summer <span className="text-teal-400">Productive</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-sm">
              View All Courses
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center py-12">No Items Found</div>
        )}
      </div>
    </>
  );
}
