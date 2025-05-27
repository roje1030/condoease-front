import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CFormInput,
  CContainer,
  CRow,
  CCol
} from '@coreui/react'

const FormControl = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  return (
    <CContainer className="vh-100 d-flex flex-column px-4 pt-0">
      {/* Header */}
      <div style={{ backgroundColor: '#1D2B57' }}>
        <div className="px-3 pt-3 pb-3 d-flex justify-content-center align-items-center position-relative">
          <img
            src="src/assets/images/back.svg" // ✅ Must be in public/images
            alt="Back"
            onClick={() => navigate('/forms/floating-labels')} // ✅ Go back to FloatingLabels
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

      {/* Step Progress Indicator */}
      <div className="d-flex justify-content-between align-items-center mb-4 mt-3 px-4">
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#F28D35' }}></div>
        <div style={{ flex: 1, height: 2, backgroundColor: '#F28D35', margin: '0 4px' }}></div>
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#F28D35' }}></div>
        <div style={{ flex: 1, height: 2, backgroundColor: '#D9D9D9', margin: '0 4px' }}></div>
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#D9D9D9' }}></div>
      </div>

      {/* Email */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Email</label>
      <CFormInput
        type="email"
        placeholder="tenantemail@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3"
      />

      {/* First & Last Name */}
      <CRow className="mb-3">
        <CCol>
          <CFormInput
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </CCol>
        <CCol>
          <CFormInput
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </CCol>
      </CRow>

      {/* Password */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Enter Password</label>
      <div className="position-relative mb-3">
        <CFormInput
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter Password"
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

      {/* Re-enter Password */}
      <label className="mb-1 fw-semibold" style={{ fontSize: '14px' }}>Re-Enter Password</label>
      <div className="position-relative mb-4">
        <CFormInput
          type={showRePassword ? 'text' : 'password'}
          placeholder="Re-Enter Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <i
          className="bi bi-eye"
          onClick={() => setShowRePassword(!showRePassword)}
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

      {/* Create Account Button */}
      <CButton
        color="warning"
        className="text-white w-100 rounded-pill shadow-sm mb-3 fw-bold"
        style={{ height: '45px' }}
        onClick={() => console.log('Creating account...')}
      >
        Create Account
      </CButton>
    </CContainer>
  )
}

export default FormControl
