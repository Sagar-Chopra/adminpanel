import Link from 'next/link'
import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

const StaticNavigation = () => {
  return (
    <div>
        <Navbar static={true}/>
        <div id="layoutSidenav">
            <Sidebar static={true}/>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Static Navigation</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Static Navigation</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                <p className="mb-0">
                                    This page is an example of using static navigation. By removing the
                                    <code>.sb-nav-fixed</code>
                                    className from the
                                    <code>body</code>
                                    , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example.
                                </p>
                            </div>
                        </div>
                        <div style={{height: "100vh"}}></div>
                        <div className="card mb-4"><div className="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div>
                    </div>
                </main>
               <Footer />
            </div>
        </div>
    </div>
  )
}

export default StaticNavigation