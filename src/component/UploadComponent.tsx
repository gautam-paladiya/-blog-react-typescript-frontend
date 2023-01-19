import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";

export interface IUploadComponentProps {}

export default function UploadComponent(props: IUploadComponentProps) {
  const refTitle = useRef<HTMLInputElement>(null);
  const refAuthor = useRef<HTMLInputElement>(null);
  const refFile = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLTextAreaElement>(null);
  const refCategory = useRef<HTMLSelectElement>(null);
  const refSelectTime = useRef<HTMLSelectElement>(null);
  const [file, setfile] = useState<File | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    console.log("select file call", file);
    setfile(fileList[0]);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    var formdata: any = new FormData();
    formdata.append("file", file, file?.name);
    formdata.append("title", refTitle.current?.value);
    formdata.append("author", refAuthor.current?.value);
    formdata.append("description", refDescription.current?.value);
    formdata.append("time", refSelectTime.current?.value);
    formdata.append(
      "categories",
      Array.from(refCategory.current!.selectedOptions).map(({ value }) => value)
    );
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/post`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status == 201) {
        alert("Blog created successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      resetField();
    }
  };

  const resetField = () => {
    refTitle.current!.value = "";
    refAuthor.current!.value = "";
    refDescription.current!.value = "";
    refFile.current!.value = "";
    setfile(null);
  };

  const removeFile = () => {
    refFile.current!.value = "";
    setfile(null);
  };

  return (
    <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Blog Title
        </label>
        <input
          ref={refTitle}
          type="text"
          id="title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Title"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="author"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Blog author
        </label>
        <input
          ref={refAuthor}
          type="author"
          id="author"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Author name"
          required
        />
      </div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="user_avatar"
      >
        Blog Image
      </label>
      <input
        ref={refFile}
        required
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
        max={1}
        onChange={(e) => onSelectFile(e)}
        accept="image/*"
      />
      {file && (
        <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
          <div className="flex items-center justify-between">
            <span className="truncate pr-3 text-base font-medium text-[#07074D]">
              {file.name}
            </span>
            <button className="text-[#07074D]" onClick={removeFile}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        This picture to show blog image
      </div>
      <label
        className="block mt-5 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="message"
      >
        Blog Description
      </label>

      <textarea
        ref={refDescription}
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>

      <label
        htmlFor="category"
        className="block mt-5 text-sm font-medium text-gray-900 dark:text-white"
      >
        Blog category
      </label>
      <div
        className=" text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        Select multiple category
      </div>
      <select
        multiple
        ref={refCategory}
        id="category"
        defaultValue={["Travel"]}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="Design">Design</option>
        <option value="Travel">Travel</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Personal Growth">Personal Growth</option>
      </select>
      <label
        htmlFor="time"
        className="block mb-2 mt-5
         text-sm font-medium text-gray-900 dark:text-white"
      >
        Blog reading time
      </label>
      <select
        ref={refSelectTime}
        id="time"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        defaultValue={5}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
      <button
        type="submit"
        className="mt-5 mx-auto w-60 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Upload
      </button>
    </form>
  );
}
