import React from 'react'
import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CFormInput,
  CButton,
  CFormSelect,
  CBadge,
  CAvatar,
  CContainer,
} from '@coreui/react'
import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

const Tables = () => {
  const units = [
    { id: 1, status: 'Vacant', color: 'success' },
    { id: 2, status: 'Vacant', color: 'success' },
    { id: 3, status: 'Occupied', color: 'danger' },
  ]

  return (
    <CContainer fluid className="p-4">
      <h4 className="mb-3">Unit Management</h4>
      <p className="text-body-secondary">
        <Link
          to="/base/cards"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
        >
          DASHBOARD
        </Link>{' '}
        /{' '}
        <Link
          to="/base/tables"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
        >
          UNIT MANAGEMENT
        </Link>
      </p>

      <CRow>
        {/* Left Panel */}
        <CCol md={4}>
          <CCard className="mb-3">
            <CCardBody>
              {/* Search and Add */}
              <div className="d-flex mb-3">
                <CFormInput type="text" placeholder="Search Unit" className="me-2" />
                <CButton color="warning">
                  <CIcon icon={cilPlus} />
                </CButton>
              </div>

              {/* Filters */}
              <CRow className="mb-3">
                <CCol>
                  <CFormSelect>
                    <option>Building</option>
                  </CFormSelect>
                </CCol>
                <CCol>
                  <CFormSelect>
                    <option>Room Type</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              {/* Sort Button */}
              <CButton color="warning" className="w-100 mb-3">
                Sort
              </CButton>

              {/* Unit List */}
              {units.map((unit, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <CAvatar color="warning" className="me-3">
                    U
                  </CAvatar>
                  <div className="flex-grow-1">
                    <strong>Unit</strong>
                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                      Building Name, Room Type
                    </div>
                  </div>
                  <CBadge color={unit.color} className="px-3 py-1">
                    {unit.status.toUpperCase()}
                  </CBadge>
                </div>
              ))}
            </CCardBody>
          </CCard>
        </CCol>

        {/* Right Panel */}
        <CCol md={8}>
          <CCard>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <CAvatar color="warning" className="me-3">
                  U
                </CAvatar>
                <div>
                  <strong>Unit</strong>
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                    Building Name, Room Type
                  </div>
                </div>
              </div>
              <CBadge color="danger" className="px-3 py-1">
                OCCUPIED
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Tables
