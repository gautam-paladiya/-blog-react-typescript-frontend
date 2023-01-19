import axios from "axios";

export const getAllPosts = async (page:number,search:string="") => {
   const config = {
    params: { page: page,limit:import.meta.env.VITE_PAGINATION_LIMIT,search: search },
  };
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/post`,config);
  return res.data;
};

export const getPost = async (slug:string) => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/post/${slug}`);
    console.log(res.data)
  return {post:res.data};
};

export const getFindPosts = async (search = "") => {
  const config = {
    params: { search: search },
  };
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/post`,config);
  return res.data;
};

