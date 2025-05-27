import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CFormInput,
  CContainer
} from '@coreui/react'

const FloatingLabels = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  return (
    <CContainer className="vh-100 d-flex flex-column px-4 pt-0">
      {/* Header */}
      <div style={{ backgroundColor: '#1D2B57' }}>
        <div className="px-3 pt-3 pb-3 d-flex justify-content-center align-items-center position-relative">
          <img
            src="src/assets/images/back.svg"
            alt="Back"
            onClick={() => navigate(-1)}
            style={{
              position: 'absolute',
              left: '16px',
              cursor: 'pointer',
              height: '20px',
              width: '20px',
              filter: 'invert(1)'
            }}
          />
          <h6 className="text-white fw-bold m-0">Create Account</h6>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="d-flex justify-content-between align-items-center mb-4 mt-3 px-4">
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#F28D35' }}></div>
        <div style={{ flex: 1, height: 2, backgroundColor: '#D9D9D9', margin: '0 4px' }}></div>
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#D9D9D9' }}></div>
        <div style={{ flex: 1, height: 2, backgroundColor: '#D9D9D9', margin: '0 4px' }}></div>
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#D9D9D9' }}></div>
      </div>

      {/* Email Input */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Email</label>
      <CFormInput
        type="email"
        placeholder="tenantemail@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />

      {/* Continue Button */}
      <CButton
        color="warning"
        className="text-white w-100 rounded-pill shadow-sm mb-3 fw-bold"
        style={{ height: '45px' }}
        onClick={() => navigate('/register/step2')}
      >
        Continue with Email
      </CButton>

      {/* Divider */}
      <div className="d-flex align-items-center my-3">
        <div className="flex-grow-1 border-top" />
        <span className="mx-2 text-muted">Or</span>
        <div className="flex-grow-1 border-top" />
      </div>

      {/* Social Login Buttons */}
      <CButton color="light" className="w-100 mb-2 d-flex align-items-center justify-content-center border rounded-pill">
        <img src="/src/assets/images/google.svg" alt="Google" height="20" className="me-2" />
        Continue with Google
      </CButton>
      <CButton color="light" className="w-100 mb-4 d-flex align-items-center justify-content-center border rounded-pill">
        <img src="/src/assets/images/facebook.svg" alt="Facebook" height="20" className="me-2" />
        Continue with Facebook
      </CButton>

      {/* Footer */}
      <p className="text-center text-muted small">
        Already have an account?{' '}
        <span
          className="text-warning fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
    </CContainer>
  )
}

export default FloatingLabels
