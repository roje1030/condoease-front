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
import AddMaleUserGroup from "../../../assets/images/Add Male User Group.svg";

const ListGroups = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const [typeFilter, setTypeFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const [appliedTypeFilter, setAppliedTypeFilter] = useState('')
  const [appliedStatusFilter, setAppliedStatusFilter] = useState('')

  const [sortedAsc, setSortedAsc] = useState(true)

  const tenantTransactions = [
    { id: 1, tenantName: 'John Doe', type: 'Rent Payment', status: 'Paid', description: 'April rent payment', time: '09:30 AM' },
    { id: 2, tenantName: 'Jane Smith', type: 'Security Deposit', status: 'Pending', description: 'Initial deposit for unit 101', time: '10:45 AM' },
    { id: 3, tenantName: 'Michael Lee', type: 'Utility Bill', status: 'Overdue', description: 'Electricity bill for March', time: '02:15 PM' },
  ]

  const filteredTransactions = tenantTransactions
    .filter(
      (transaction) =>
        transaction.tenantName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (appliedTypeFilter ? transaction.type === appliedTypeFilter : true) &&
        (appliedStatusFilter ? transaction.status === appliedStatusFilter : true)
    )
    .sort((a, b) => {
      if (sortedAsc) return a.type.localeCompare(b.type)
      else return b.type.localeCompare(a.type)
    })

  const uniqueTypes = [...new Set(tenantTransactions.map((tx) => tx.type))]
  const uniqueStatuses = [...new Set(tenantTransactions.map((tx) => tx.status))]

  const handleSortClick = () => {
    setAppliedTypeFilter(typeFilter)
    setAppliedStatusFilter(statusFilter)
    setSortedAsc(!sortedAsc)
  }

  return (
    <>
      <h4 className="mb-3">Tenant Transactions</h4>
      <p className="text-body-secondary">
        <Link
          to="/base/cards"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
        >
          DASHBOARD
        </Link>{' '}
        /{' '}
        <Link
          to="/base/tenant-transactions"
          style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
        >
          TENANT TRANSACTIONS
        </Link>
      </p>

      <CRow>
        <CCol md={4}>
          <CInputGroup className="mb-3">
            <CInputGroupText><CIcon icon={cilSearch} /></CInputGroupText>
            <CFormInput
              placeholder="Search Tenant"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Button beside search input */}
            <CButton
              color="primary"
              type="button"
              onClick={() => console.log('Search clicked')}
              className="adaptive-button ms-2"
            >
              <img src={AddMaleUserGroup} alt="Search Icon" />
            </CButton>
          </CInputGroup>

          <div className="d-flex gap-2 mb-2">
            <CFormSelect
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="" disabled hidden>Filter Type</option>
              {uniqueTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </CFormSelect>

            <CFormSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="" disabled hidden>Filter Status</option>
              {uniqueStatuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
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
            {filteredTransactions.map((transaction) => (
              <CListGroupItem
                key={transaction.id}
                action
                onClick={() => setSelectedTransaction(transaction)}
              >
                <div><strong>{transaction.type}</strong> - {transaction.status}</div>
                <div className="text-muted small">{transaction.time}</div>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCol>

        <CCol md={8}>
          {selectedTransaction ? (
            <CCard>
              <CCardHeader>
                <div>
                  <strong>{selectedTransaction.tenantName}</strong>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  {selectedTransaction.type} - {selectedTransaction.status}
                </div>
              </CCardHeader>
              <CCardBody>
                <p><strong>Description:</strong> {selectedTransaction.description}</p>
                <p><strong>Proof of Transaction:</strong></p>
                <div className="d-flex gap-2 mb-3">
                  <div className="border p-3" style={{ width: '100px', height: '80px' }}></div>
                  <div className="border p-3" style={{ width: '100px', height: '80px' }}></div>
                  <div className="border p-3" style={{ width: '100px', height: '80px' }}></div>
                </div>

                <CFormSelect className="mb-3">
                  <option>Confirmed</option>
                  <option>Pending</option>
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
            <p className="text-muted">Select a transaction to view details.</p>
          )}
        </CCol>
      </CRow>
    </>
  )
}

export default ListGroups
