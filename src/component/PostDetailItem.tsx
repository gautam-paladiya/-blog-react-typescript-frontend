import * as React from "react";
import { IPost } from "../interface";
import { Container } from "./Container";
import CategoryLabel from "./CategoryLabel";

export interface IPostDetailProps {
  post: IPost;
}

export default function PostDetail({ post }: IPostDetailProps) {
  return (
    <>
      <Container className="!pt-0">
        <div className="max-w-screen-md mx-auto ">
          <div className="text-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            {post.title}
          </h1>

          <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <p className="text-gray-800 dark:text-gray-400">{post.author}</p>
              <div className="flex items-center space-x-2 text-sm">
                <time
                  className="text-gray-500 dark:text-gray-400"
                  dateTime={
                    new Date(post.publishedAt).toLocaleString("en-us", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }) ||
                    new Date(post.createdAt).toLocaleString("en-us", {
                      month: "short",
                      year: "numeric",
                    })
                  }
                >
                  {new Date(post.publishedAt).toLocaleString("en-us", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }) ||
                    new Date(post.createdAt).toLocaleString("en-us", {
                      month: "short",
                      year: "numeric",
                    })}
                </time>
                <span>· {post.estReadingTime || "5"} min read</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg ">
        <img
          src={`${import.meta.env.VITE_BASE_URL_STORAGE}/${post.image.src}`}
          alt={post.image.alt || "Thumbnail"}
          placeholder="blur"
          className=" mx-auto"
        />
      </div>

      {/* {post?.mainImage && <MainImage image={post.mainImage} />} */}
      <Container>
        <article className="max-w-screen-md mx-auto ">
          <div className="mx-auto  prose prose-base dark:prose-invert prose-a:text-blue-500">
            {post.body}
          </div>
        </article>
      </Container>
    </>
  );
}
