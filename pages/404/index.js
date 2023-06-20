import Link from "next/link";
import Image from 'next/image'
import React from "react";
import Footer from "../footer";
import ErrorImage from "../../public/img/error-404-monochrome.svg";

const ErrorTwo = () => {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <Image
                    src={ErrorImage}
                    alt="Image"
                    width={300}
                    height={300}
                    objectFit={"cover"}
                    layout={"fixed"}
                  />
                  <p className="lead">
                    This requested URL was not found on this server.
                  </p>
                  <Link href="/">
                    <i className="fas fa-arrow-left me-1"></i>
                    Return to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorTwo;
