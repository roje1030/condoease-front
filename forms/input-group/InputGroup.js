import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CFormInput,
  CContainer
} from '@coreui/react'

const InputGroup = () => {
  const navigate = useNavigate()
  const [code, setCode] = useState('')

  return (
    <CContainer className="vh-100 d-flex flex-column px-4 pt-0">
      {/* Header with back button and title */}
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

      {/* Step Progress Bar */}
      <div className="d-flex justify-content-between align-items-center mb-5 mt-3 px-4">
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#F28D35' }}></div>
        <div style={{ flex: 1, height: 2, backgroundColor: '#F28D35', margin: '0 4px' }}></div>
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#F28D35' }}></div>
        <div style={{ flex: 1, height: 2, backgroundColor: '#F28D35', margin: '0 4px' }}></div>
        <div style={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#F28D35' }}></div>
      </div>

      {/* Title & Instruction */}
      <h5 className="fw-bold mb-2">Verify your email</h5>
      <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
        An email has been sent to <br />
        <strong>t********l@gmail.com</strong> with a confirmation code.
      </p>

      {/* Code Input */}
      <CFormInput
        type="text"
        placeholder="Enter confirmation code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="mb-4"
      />

      {/* Verify Button */}
      <CButton
        color="warning"
        className="text-white w-100 rounded-pill shadow-sm mb-3 fw-bold"
        style={{ height: '45px' }}
        onClick={() => navigate('/login')} // ✅ Adjust target route after verification
      >
        Verify Email
      </CButton>

      {/* Resend Code */}
      <p className="text-center">
        <span
          className="text-warning fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => alert('Code resent!')}
        >
          Resend Code
        </span>
      </p>
    </CContainer>
  )
}

export default InputGroup
