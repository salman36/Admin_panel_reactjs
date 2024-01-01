import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2 sidebar">
             <Sidebar />
            </div>
            <div className="col-md-10 main-content">
                {children}
            </div>
        </div>
    </div>
    <div className='row'>
        <Footer />
    </div>
    </>
  )
}

export default Layout
