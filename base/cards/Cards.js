import React from 'react'
import { Link } from 'react-router-dom'
import { CCard, CCardBody, CCardTitle, CCardText, CCol, CRow } from '@coreui/react'

const Cards = () => {
  return (
    <div>
      <h2 className="mb-4">Welcome, [User]!</h2>

      {/* Announcements Section */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Announcements</h5>
          <Link to="/announce" className="text-decoration-none text-warning"></Link>
          {/* CHANGE THE PATH */}
        </div>
        <CRow>
          <CCol xs={6}>
            <Link to="/base/carousels" style={{ textDecoration: 'none' }}>
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>Send an Announcement</CCardTitle>
                  <CCardText>
                    Announcement description: Lorem ipsum dolor sit amet, consectetur
                  </CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
          <CCol xs={6}>
            <Link to="/announce" style={{ textDecoration: 'none' }}>
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>View Announcements</CCardTitle>
                  <CCardText>
                    Announcement description: Lorem ipsum dolor sit amet, consectetur
                  </CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
        </CRow>
      </section>

      {/* Maintenance Information Section */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Maintenance Information</h5>
          <Link to="/base/collapses" className="text-decoration-none text-warning"></Link>
        </div>
        <CRow>
          <CCol xs={6}>
            <Link to="/base/collapses" style={{ textDecoration: 'none' }}>
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>View Maintenance Requests</CCardTitle>
                  <CCardText>View maintenance request forms</CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
          <CCol xs={6}>
            <Link to="/base/collapses" style={{ textDecoration: 'none' }}>
              {/* CHANGE THE PATH */}
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>Maintenance Status</CCardTitle>
                  <CCardText>10 ongoing maintenance requests</CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
        </CRow>
      </section>

      {/* Tenant Transactions Section */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Tenant Transactions</h5>
          <Link to="/base/listgroups" className="text-decoration-none text-warning"></Link>
        </div>
        <CRow>
          <CCol xs={6}>
            <Link to="/base/tables" style={{ textDecoration: 'none' }}>
              {/* CHANGE THE PATH */}
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>View Tenants</CCardTitle>
                  <CCardText>View Tenant Details</CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
          <CCol xs={6}>
            <Link to="/base/list-groups" style={{ textDecoration: 'none' }}>
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>Tenant Transactions</CCardTitle>
                  <CCardText>View all tenant payment history</CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
        </CRow>
      </section>

      {/* Unit Management Section */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Unit Management</h5>
          <Link to="/base/tables" className="text-decoration-none text-warning"></Link>
        </div>
        <CRow>
          <CCol xs={6}>
            <Link to="/base/tables" style={{ textDecoration: 'none' }}>
              <CCard className="mb-3 border-success">
                <CCardBody>
                  <CCardTitle>View Units</CCardTitle>
                  <CCardText>View Current Units</CCardText>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
        </CRow>
      </section>   
    </div>
  )
}

export default Cards
