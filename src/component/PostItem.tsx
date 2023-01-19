import * as React from "react";
import { cx } from "../util/all";
import { IPost } from "../interface";
import { Link } from "react-router-dom";
import CategoryLabel from "./CategoryLabel";

export interface IPostItemProps {
  aspect: string;
  post: IPost;
}

export default function PostItem({ aspect, post }: IPostItemProps) {
  return (
    <div className="cursor-pointer group ">
      <div
        className={cx(
          "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
          aspect === "landscape" ? "aspect-video " : "aspect-square"
        )}
      >
        <Link to={`/post/${post.slug}`}>
          {post.image ? (
            <img
              src={`${import.meta.env.VITE_BASE_URL_STORAGE}/${post.image.src}`}
              alt={post.image.alt || "Thumbnail"}
              placeholder="blur"
              className="transition-all object-cover"
            />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {/* <PhotographIcon /> */}
            </span>
          )}
        </Link>
      </div>
      <CategoryLabel categories={post.categories} />
      <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
        <Link to={`/post/${post.slug}`}>
          <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
            {post.title}
          </span>
        </Link>
      </h2>

      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3 flex-shrink ">
          <span className="text-sm">{post.author}</span>
        </div>
        <span className="text-xs text-gray-300 dark:text-gray-600">&bull;</span>
        <time
          className="text-sm flex-grow "
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
      </div>
    </div>
  );
}
