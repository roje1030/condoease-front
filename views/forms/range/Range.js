import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CFormInput,
  CContainer
} from '@coreui/react'

const Range = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

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
              filter: 'invert(1)'  // ✅ hi try lang
            }}
          />
          <img
            src="/src/assets/images/hor_logo_white 1.svg"
            alt="CondoEase Logo"
            height="40"
          />
        </div>
      </div>

      {/* Login Title */}
      <h5 className="fw-bold text-center mb-4 mt-4">Login</h5>

      {/* Email */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Email</label>
      <CFormInput
        type="email"
        placeholder="tenantemail@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3"
      />

      {/* Password */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Password</label>
      <div className="position-relative mb-2">
        <CFormInput
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i
          className="bi bi-eye"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: '#6c757d'
          }}
        ></i>
      </div>

      {/* Forgot Password */}
      <div className="text-end mb-3">
        <span
          className="text-warning fw-bold small"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/forgot-password')}
        >
          Forgot password?
        </span>
      </div>

      {/* Login Button */}
      <CButton
        color="warning"
        className="text-white w-100 rounded-pill shadow-sm mb-4 fw-bold"
        style={{ height: '45px' }}
        onClick={() => console.log('Login attempt')}
      >
        Login
      </CButton>

      {/* Footer */}
      <p className="text-center text-muted small">
        Don’t have an account?{' '}
        <span
          className="text-warning fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/forms/floating-labels')}
        >
          Sign Up
        </span>
      </p>
    </CContainer>
  )
}

export default Range
