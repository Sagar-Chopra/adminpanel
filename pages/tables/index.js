import React, { useEffect } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { DataTable } from "simple-datatables";
import "datatables.net-dt/css/jquery.dataTables.css";
import Link from "next/link";
import Table from "../../js/Table";

const Tables = () => {
  useEffect(() => {
    const datatablesSimple = document.getElementById("datatablesSimple");
    if (datatablesSimple) {
      new DataTable(datatablesSimple);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <Link href="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Tables</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  DataTables is a third party plugin that is used to generate
                  the demo table below. For more information about DataTables,
                  please visit the
                  <a target="_blank" href="https://datatables.net/">
                    official DataTables documentation
                  </a>
                  .
                </div>
              </div>
              <Table />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tables;
