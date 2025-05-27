import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CAvatar,
} from '@coreui/react'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="p-3">
      <h5 className="mb-4 fw-bold">Welcome, [User]!</h5>

      {/* Announcements Section */}
      <section className="mb-4">
        <h6 className="fw-bold">Announcements</h6>
        <CCard className="mb-3 border rounded shadow-sm" onClick={() => navigate('/announce')} style={{ cursor: 'pointer' }}>
          <CCardBody>
            <CCardTitle className="fw-bold">!! Announcement Header !!</CCardTitle>
            <CCardText className="text-muted small">
              Announcement description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </CCardText>
          </CCardBody>
        </CCard>
      </section>

      {/* Payment and Billing */}
      <section className="mb-4">
        <h6 className="fw-bold">Payment and Billing</h6>

        <CCard className="mb-3 border rounded shadow-sm" onClick={() => navigate('/colors')} style={{ cursor: 'pointer' }}>
          <CCardBody>
            <CCardTitle>Balance</CCardTitle>
            <CCardText className="small text-muted">as of MM/DD/YYYY</CCardText>
            <h4 className="text-danger">-123,456.78</h4>
          </CCardBody>
        </CCard>

        <CCard className="mb-3 border rounded shadow-sm" onClick={() => navigate('/typography')} style={{ cursor: 'pointer' }}>
          <CCardBody>
            <CCardTitle>Dues</CCardTitle>
            <CCardText className="small text-muted">as of MM/DD/YYYY</CCardText>
            <h4 className="text-success">6,543.21</h4>
          </CCardBody>
        </CCard>
      </section>

      {/* Maintenance Information */}
      <section className="mb-4">
        <h6 className="fw-bold">Maintenance Information</h6>

        <CCard className="mb-3 border rounded shadow-sm" onClick={() => navigate('/charts')} style={{ cursor: 'pointer' }}>
          <CCardBody>
            <CCardTitle>Request Maintenance</CCardTitle>
            <CCardText className="small text-muted">Submit a maintenance request form</CCardText>
          </CCardBody>
        </CCard>

        <CCard className="mb-3 border rounded shadow-sm">
          <CCardBody>
            <CCardTitle>Maintenance Status</CCardTitle>
            <CCardText className="small text-muted">No ongoing maintenance request</CCardText>
          </CCardBody>
        </CCard>
      </section>

      {/* Unit Information */}
      <section className="mb-4">
        <h6 className="fw-bold">Unit Information</h6>

        <CCard className="mb-3 border rounded shadow-sm">
          <CCardBody className="d-flex align-items-center">
            <CAvatar
              color="primary"
              textColor="white"
              size="md"
              className="me-3"
            >
              A
            </CAvatar>
            <div>
              <CCardTitle>Tenant Details</CCardTitle>
              <CCardText className="small text-muted">ID, Documents</CCardText>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-3 border rounded shadow-sm">
          <CCardBody>
            <CCardTitle>Lease & Unit Details</CCardTitle>
            <CCardText className="small text-muted">
              Lease Type, Start & End Date, Amenities
            </CCardText>
          </CCardBody>
        </CCard>
      </section>
    </div>
  )
}

export default Dashboard
