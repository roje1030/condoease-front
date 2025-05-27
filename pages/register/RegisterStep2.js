import React, { useState } from 'react'
import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CCol,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { FaEye } from 'react-icons/fa'

const RegisterStep2 = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* Top nav bar */}
          <div
        style={{
          background: '#1D2B57',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/src/assets/images/logo_white.png"
            alt="CondoEase Logo"
            style={{ height: 32, marginRight: 12 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: 'white', fontSize: 16 }}>Already have an account?</span>
          <CButton color="warning" className="text-white fw-bold px-4" style={{ borderRadius: 20 }}>
            Log in
          </CButton>
        </div>
      </div>

      {/* Main content */}
      <CContainer className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <CRow className="justify-content-center w-100">
          <CCol xs={12} md={7} lg={5} xl={4}>
            {/* Progress bar */}
            <div
              className="d-flex justify-content-center align-items-center mb-4 mt-5"
              style={{ gap: 32 }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#F7941D',
                  border: '2px solid #F7941D',
                }}
              />
              <div style={{ flex: 1, height: 2, background: '#F7941D' }} />
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#F7941D',
                  border: '2px solid #F7941D',
                }}
              />
              <div style={{ flex: 1, height: 2, background: '#BDBDBD' }} />
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#BDBDBD',
                  border: '2px solid #BDBDBD',
                }}
              />
            </div>
            {/* Title */}
            <div className="text-center mb-3">
              <h2 className="fw-bold mb-2" style={{ fontSize: 32 }}>
                Create Account
              </h2>
            </div>
            {/* Form */}
            <CForm>
              <CRow className="mb-3">
                <CCol>
                  <div className="fw-semibold text-start mb-1">First Name</div>
                  <CFormInput
                    type="text"
                    placeholder="First Name"
                    style={{
                      borderColor: '#A3C49A',
                      borderRadius: 8,
                      fontSize: 16,
                      padding: '14px 16px',
                    }}
                  />
                </CCol>
                <CCol>
                  <div className="fw-semibold text-start mb-1">Last Name</div>
                  <CFormInput
                    type="text"
                    placeholder="Last Name"
                    style={{
                      borderColor: '#A3C49A',
                      borderRadius: 8,
                      fontSize: 16,
                      padding: '14px 16px',
                    }}
                  />
                </CCol>
              </CRow>
              <div className="mb-2 fw-semibold text-start">Email</div>
              <CFormInput
                type="email"
                placeholder="email@gmail.com"
                className="mb-3"
                style={{
                  borderColor: '#A3C49A',
                  borderRadius: 8,
                  fontSize: 16,
                  padding: '14px 16px',
                }}
               //  value=""
               //  readOnly
              />
              <div className="mb-2 fw-semibold text-start">Enter Password</div>
              <CInputGroup className="mb-3">
                <CFormInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  style={{
                    borderColor: '#A3C49A',
                    borderRadius: 8,
                    fontSize: 16,
                    padding: '14px 16px',
                  }}
                />
                <CInputGroupText
                  style={{ background: 'transparent', cursor: 'pointer', borderColor: '#A3C49A' }}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <FaEye color="#A3C49A" />
                </CInputGroupText>
              </CInputGroup>
              <div className="mb-2 fw-semibold text-start">Re-Enter Password</div>
              <CInputGroup className="mb-4">
                <CFormInput
                  type={showRePassword ? 'text' : 'password'}
                  placeholder="Re-Enter Password"
                  style={{
                    borderColor: '#A3C49A',
                    borderRadius: 8,
                    fontSize: 16,
                    padding: '14px 16px',
                  }}
                />
                <CInputGroupText
                  style={{ background: 'transparent', cursor: 'pointer', borderColor: '#A3C49A' }}
                  onClick={() => setShowRePassword((v) => !v)}
                >
                  <FaEye color="#A3C49A" />
                </CInputGroupText>
              </CInputGroup>
              <div className="d-grid mb-2">
                <CButton
                  color="warning"
                  className="text-white fw-bold"
                  style={{ borderRadius: 24, fontSize: 20, padding: '10px 0' }}
                >
                  Create Account
                </CButton>
              </div>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default RegisterStep2
