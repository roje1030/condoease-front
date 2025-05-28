import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton, CContainer } from '@coreui/react'

const ChecksRadios = () => {
  const navigate = useNavigate()

  return (
    <CContainer className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      {/* LOGO SECTION */}
      <img
        src="src/assets/images/logo_color 1.svg"
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
        onClick={() => navigate('/login')}
      >
        Login
      </CButton>

      {/* SIGNUP LINK */}
      <p className="small">
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

export default ChecksRadios
