import React, { useContext, useReducer } from "react";
import PostItem from "../component/PostItem";
import Layout from "../component/Layout";
import { Container } from "../component/Container";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getFindPosts } from "../services/post.service";
import { SettingsContext } from "../provider/SettingContextProvider";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IPost } from "../interface";

export interface IIndexPageProps {}

export default function IndexPage(props: IIndexPageProps) {
  const limit = import.meta.env.VITE_PAGINATION_LIMIT;
  const [currentPage, setCurrentPage] = useState(1);
  const { settings, saveSettings } = useContext(SettingsContext);
  const forceUpdate = useReducer((x) => x + 1, 0)[1];

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getAllPosts(currentPage, settings.search),
    enabled: false,
    keepPreviousData: true,
    staleTime: Infinity,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    refetch();
  }, [currentPage, settings.search]);

  const hanleRemoveSearch = () => {
    saveSettings({ search: "" });
    setCurrentPage(1);
  };

  const handlePageNext = () => {
    console.log({ currentPage, limit });
    if (currentPage * limit < data?.total) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePagePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(`${JSON.stringify(data)}`);

  return (
    <Layout loading={isLoading} isNavbar={true}>
      {settings.search && (
        <div
          className="text-center text-xl inline-flex items-center gap-1 justify-center w-full cursor-pointer"
          onClick={hanleRemoveSearch}
        >
          Result for{" "}
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">
            {settings.search}
          </span>
          <FaTrashAlt className="text-red-500" />
        </div>
      )}
      <Container>
        <div className="flex flex-col ">
          <div className="grid gap-5 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {data?.posts.length == 0 && (
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                No result found
              </p>
            )}
            {data?.posts.map((post: any, index: number) => (
              <PostItem aspect="landscape" post={post} key={index} />
            ))}
          </div>
        </div>
      </Container>
      <nav className="text-center my-8">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              onClick={handlePagePrevious}
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {data?.total &&
            [...Array(Math.ceil(data?.total / limit))].map((i, index) => (
              <li>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`${
                    index + 1 == currentPage
                      ? "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

          <li>
            <button
              onClick={handlePageNext}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}
