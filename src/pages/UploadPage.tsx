import * as React from "react";
import { Container } from "../component/Container";
import Layout from "../component/Layout";
import UploadComponent from "../component/UploadComponent";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface IUploadPageProps {}

export default function UploadPage(props: IUploadPageProps) {
  return (
    <Layout isNavbar={false}>
      <Container>
        <div className="mb-10">
          <Link to="/" replace>
            <FaHome className="w-12 h-12 float-left cursor-pointer" />
          </Link>
          <p className="text-4xl font-bold text-gray-900 dark:text-white self-center text-center">
            Upload Blog
          </p>
        </div>
        <UploadComponent />
      </Container>
    </Layout>
  );
}
