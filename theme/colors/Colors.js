import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CAvatar,
} from '@coreui/react'

const Balance = () => {
  const navigate = useNavigate()

  const transactions = [
    {
      date: 'MM DD, YYYY',
      entries: [
        { time: 'HH:MM TT', type: 'Receipt', amount: '-12,345.67', color: 'text-danger' },
        { time: 'HH:MM TT', type: 'Receipt', amount: '-12,345.67', color: 'text-danger' },
        { time: 'HH:MM TT', type: 'Check', amount: '+12,345.67', color: 'text-success' },
      ],
    },
    {
      date: 'MM DD, YYYY',
      entries: [{ time: 'HH:MM TT', type: 'Receipt', amount: '-12,345.67', color: 'text-danger' }],
    },
    {
      date: 'MM DD, YYYY',
      entries: [
        { time: 'HH:MM TT', type: 'Receipt', amount: '-12,345.67', color: 'text-danger' },
        { time: 'HH:MM TT', type: 'Receipt', amount: '-12,345.67', color: 'text-danger' },
      ],
    },
  ]

  return (
    <div className="p-3 pb-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold mb-0">Payment and Billing</h6>
        <CButton color="light" shape="rounded-circle" className="p-2">
          <i className="cil-reload" style={{ color: '#F28D35' }}></i>
        </CButton>
      </div>

      {/* Tabs */}
      <CNav variant="tabs" className="mb-3">
        <CNavItem className="w-50 text-center">
          <CNavLink
            active
            style={{
              backgroundColor: '#F28D35',
              color: '#333333',
              borderBottom: '3px solid #F28D35',
              fontWeight: 'bold',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', // <-- this adds the shadow
              borderTopLeftRadius: '0.375rem',
              borderTopRightRadius: '0.375rem',
            }}
          >
            Balance
          </CNavLink>
        </CNavItem>
        <CNavItem className="w-50 text-center">
          <CNavLink
            onClick={() => navigate('/typography')}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000',
            }}
          >
            Dues
          </CNavLink>
        </CNavItem>
      </CNav>

      {/* Balance Card */}
      <CCard className="mb-4 border-success" style={{ borderRadius: '12px' }}>
        <CCardBody className="text-center">
          <div className="text-muted small mb-1">Balance as of MM/DD/YYYY</div>
          <h3 className="text-danger fw-bold">-123,456.78</h3>
        </CCardBody>
      </CCard>

      {/* Transaction List */}
      {transactions.map((section, index) => (
        <div key={index} className="mb-3">
          <div className="text-muted mb-2">{section.date}</div>
          {section.entries.map((entry, idx) => (
            <div
              key={idx}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <div>
                <div className="small text-muted">{entry.time}</div>
                <div>{entry.type}</div>
              </div>
              <div className={`fw-bold ${entry.color}`}>{entry.amount}</div>
            </div>
          ))}
        </div>
      ))}

      {/* Bottom Action */}
      <div className="text-center mt-4">
        <div className="d-flex align-items-center justify-content-center mb-2">
          <CAvatar
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            size="md"
            className="me-2"
          />
          <small className="text-muted">Submit a request to view more transactions</small>
        </div>
        <CButton color="warning" className="text-white w-100 fw-bold rounded-pill">
          Request transaction history
        </CButton>
      </div>
    </div>
  )
}

export default Balance
