import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/post.service";
import { useLocation } from "react-router-dom";
import Layout from "../component/Layout";
import PostDetail from "../component/PostDetailItem";
import { useEffect } from "react";

export interface IPostPageProps {}

export default function PostPage(props: IPostPageProps) {
  const location = useLocation();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["post"],
    queryFn: async () =>
      getPost(location.pathname.substring(location.pathname.lastIndexOf("/"))),
    initialData: {
      post: {},
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout isNavbar={false} loading={isLoading}>
      {Object.keys(data.post).length > 0 && <PostDetail post={data.post} />}
    </Layout>
  );
}
