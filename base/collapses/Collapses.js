import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CFormTextarea,
  CButton,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Collapses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRequest, setSelectedRequest] = useState(null)
  
  const [typeFilter, setTypeFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  const [appliedTypeFilter, setAppliedTypeFilter] = useState('')
  const [appliedCategoryFilter, setAppliedCategoryFilter] = useState('')

  const [sortedAsc, setSortedAsc] = useState(true)

  const maintenanceRequests = [
    { id: 1, tenantName: 'John Doe', type: 'Repairs & Fixes', category: 'HVAC Repairs', description: 'Air conditioning not working properly', time: '09:30 AM' },
    { id: 2, tenantName: 'Jane Smith', type: 'Cleaning', category: 'Window Cleaning', description: 'Windows need thorough cleaning', time: '10:45 AM' },
    { id: 3, tenantName: 'Michael Lee', type: 'Electrical', category: 'Lighting Issue', description: 'Lobby lights are flickering', time: '02:15 PM' },
  ]

  const filteredRequests = maintenanceRequests
    .filter(
      (request) =>
        request.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (appliedTypeFilter ? request.type === appliedTypeFilter : true) &&
        (appliedCategoryFilter ? request.category === appliedCategoryFilter : true)
    )
    .sort((a, b) => {
      if (sortedAsc) return a.type.localeCompare(b.type)
      else return b.type.localeCompare(a.type)
    })

  const uniqueTypes = [...new Set(maintenanceRequests.map((req) => req.type))]
  const uniqueCategories = [...new Set(maintenanceRequests.map((req) => req.category))]

  const handleSortClick = () => {
    setAppliedTypeFilter(typeFilter)
    setAppliedCategoryFilter(categoryFilter)
    setSortedAsc(!sortedAsc)
  }

  return (
    <>
      {/* Page Header and Breadcrumb */}
      <h4 className="mb-3">Maintenance Tracking</h4>
      <p className="text-body-secondary">
        <Link
          to="/base/cards"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
        >
          DASHBOARD
        </Link>{' '}
        /{' '}
        <Link
          to="/base/collapses"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
        >
          MAINTENANCE TRACKING
        </Link>
      </p>

      <CRow>
        <CCol md={4}>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilSearch} />
            </CInputGroupText>
            <CFormInput
              placeholder="Search Request"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </CInputGroup>

          <div className="d-flex gap-2 mb-2">
            <CFormSelect
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="" disabled hidden></option>
              {uniqueTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </CFormSelect>

            <CFormSelect
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="" disabled hidden></option>
              {uniqueCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </CFormSelect>
          </div>

          <div className="mb-3">
            <CButton
              color="warning"
              className="text-white w-100"
              onClick={handleSortClick}
            >
              Sort
            </CButton>
          </div>

          <CListGroup>
            {filteredRequests.map((request) => (
              <CListGroupItem
                key={request.id}
                action
                onClick={() => setSelectedRequest(request)}
              >
                <div><strong>{request.type}</strong> - {request.category}</div>
                <div className="text-muted small">{request.time}</div>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCol>

        <CCol md={8}>
          {selectedRequest ? (
            <CCard>
              <CCardHeader>
                <div>
                  <strong>{selectedRequest.tenantName}</strong>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  {selectedRequest.type} - {selectedRequest.category}
                </div>
              </CCardHeader>
              <CCardBody>
                <p><strong>Description:</strong> {selectedRequest.description}</p>
                <p><strong>Images & Videos:</strong></p>
                <div className="d-flex gap-2 mb-3">
                  <div className="border p-3" style={{ width: '100px', height: '80px' }}></div>
                  <div className="border p-3" style={{ width: '100px', height: '80px' }}></div>
                  <div className="border p-3" style={{ width: '100px', height: '80px' }}></div>
                </div>

                <CFormSelect className="mb-3">
                  <option>Approve</option>
                  <option>In Progress</option>
                  <option>Rejected</option>
                </CFormSelect>

                <CFormTextarea rows="3" placeholder="Add a comment..."></CFormTextarea>

                <div className="d-flex justify-content-end mt-3">
                  <CButton color="secondary" className="me-2">Cancel</CButton>
                  <CButton color="warning" className="text-white">Send Decision</CButton>
                </div>
              </CCardBody>
            </CCard>
          ) : (
            <p className="text-muted">Select a maintenance request to view details.</p>
          )}
        </CCol>
      </CRow>
    </>
  )
}

export default Collapses
