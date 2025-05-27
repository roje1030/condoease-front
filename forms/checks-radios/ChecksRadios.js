import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton, CContainer } from '@coreui/react'

const ChecksRadios = () => {
  const navigate = useNavigate()

  return (
    <CContainer className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      {/* LOGO SECTION */}
      {/* Replace the src with your actual logo path or import */}
      <img
        src="src/assets/images/logo_color 1.svg" // ← Replace with correct path if needed
        alt="CondoEase Logo"
        style={{ width: '160px', marginBottom: '20px' }}
      />

      {/* Placeholder text */}
      <p className="text-muted mb-4">Lorem ipsum dolor sit amet</p>

      {/* LOGIN BUTTON */}
      <CButton
        color="warning"
        className="text-white fw-bold px-5 py-2 mb-3"
        style={{ borderRadius: '25px' }}
        onClick={() => navigate('/login')} // ← Route to Layout.js
      >
        Login
      </CButton>

      {/* SIGNUP LINK */}
      <p className="small">
        Don’t have an account?{' '}
        <span
          className="text-warning fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/signup')} // ← You can update this route as needed
        >
          Sign Up
        </span>
      </p>
    </CContainer>
  )
}

export default ChecksRadios
