import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CFormInput,
  CContainer
} from '@coreui/react'

const Layout = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  return (
    <CContainer className="vh-100 d-flex flex-column px-4 pt-0">
      {/* Header with back button and centered logo */}
      <div style={{ backgroundColor: '#1D2B57' }}>
        <div className="px-3 pt-3 pb-3 d-flex justify-content-center align-items-center position-relative">
          {/* Back Button */}
          <img
            src="src/assets/images/back.svg" // ✅ File should be in /public/images/
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

          {/* Centered Logo */}
          <img
            src="/src/assets/images/hor_logo_white 1.svg" // ✅ Optional: convert to /images/ path or use import
            alt="CondoEase Logo"
            height="40"
          />
        </div>
      </div>

      {/* Login Title */}
      <h5 className="fw-bold text-center mb-4 mt-4">Login</h5>

      {/* Email Input */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Email</label>
      <CFormInput
        type="email"
        placeholder="tenantemail@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />

      {/* Continue with Email Button */}
      <CButton
        color="warning"
        className="text-white w-100 rounded-pill shadow-sm mb-3 fw-bold"
        style={{ height: '45px' }}
        onClick={() => navigate('/forms/range')} // ✅ Goes to Range.js
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
        Don’t have an account?{' '}
        <span
          className="text-warning fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/forms/floating-labels')} // ✅ Goes to FloatingLabels.js
        >
          Sign Up
        </span>
      </p>
    </CContainer>
  )
}

export default Layout
