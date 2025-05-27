import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormInput,
  CButton,
  CFormSelect,
  CContainer,
  CFormLabel,
} from '@coreui/react'

// Optional: import the Cheque icon
import ChequeIcon from 'src/assets/images/Cheque.svg'

const Tab = () => {
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/dashboard')
  }

  return (
    <CContainer fluid className="p-4">
      {/* Header with Back Button */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <CButton
          color="link"
          className="p-0 m-0 d-flex align-items-center"
          onClick={handleBack}
        >
          <img
            src="src/assets/images/Back.svg"
            alt="Back"
            style={{ width: '24px', height: '24px' }}
          />
        </CButton>
        <h4 className="fw-bold mb-0">Request Transactions</h4>
      </div>

      <CRow>
        {/* Left Panel: Request Form */}
        <CCol md={6}>
          <CCard>
            <CCardBody>
              {/* Header UI Section without avatar */}
              <div className="rounded-2 overflow-hidden mb-4" style={{ backgroundColor: '#1D2B57' }}>
                <div className="p-3">
                  <div className="text-white fw-semibold mb-1">
                    The request will be sent to:
                  </div>
                  <div className="text-white mb-1" style={{ fontSize: '0.9rem' }}>
                    tenantemail@email(dot)com
                  </div>
                  <a
                    href="#"
                    className="small text-warning text-decoration-none"
                    style={{ fontSize: '0.8rem' }}
                  >
                    Wrong email address? Update your profile.
                  </a>
                </div>
              </div>

              <h6 className="fw-bold">Request Transaction History</h6>
              <p className="text-body-secondary mb-4">
                Select the date range to be included in the transaction history.
              </p>

              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>Date Range</CFormLabel>
                  <CFormSelect>
                    <option>Select range</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Custom</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>From</CFormLabel>
                  <CFormInput type="date" />
                </CCol>
                <CCol>
                  <CFormLabel>To</CFormLabel>
                  <CFormInput type="date" />
                </CCol>
              </CRow>

              <p className="text-muted small">
                All transactions are in Philippine time (GMT +8).
              </p>

              <CButton
                color="warning"
                className="w-100 mt-3"
                onClick={() => setSubmitted(true)}
              >
                Submit request
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Right Panel: Confirmation Message */}
        <CCol md={6}>
          {submitted && (
            <CCard className="text-center">
              <CCardBody>
                <img
                  src={ChequeIcon}
                  alt="Request Sent"
                  style={{ width: '64px', height: '64px', marginBottom: '1rem' }}
                />
                <h5 className="fw-bold">Request sent!</h5>
                <p className="text-body-secondary mb-4">
                  The request has been sent successfully! We’ll send the requested transaction history to your email.
                </p>
                <CButton color="warning" onClick={() => setSubmitted(false)}>
                  Return home
                </CButton>
              </CCardBody>
            </CCard>
          )}
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Tab
