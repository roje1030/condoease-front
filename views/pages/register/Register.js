import React from 'react'
import { CButton, CContainer, CForm, CFormInput, CRow, CCol } from '@coreui/react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

const Register = () => {
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
            {/* Email form */}
            <CForm>
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
              />
              <div className="d-grid mb-3">
                <CButton
                  color="warning"
                  className="text-white fw-bold"
                  style={{ borderRadius: 24, fontSize: 20, padding: '10px 0' }}
                >
                  Continue with Email
                </CButton>
              </div>
              {/* Divider */}
              <div className="d-flex align-items-center mb-3">
                <div style={{ flex: 1, height: 1, background: '#A3C49A' }} />
                <span className="mx-2 text-body-secondary">Or</span>
                <div style={{ flex: 1, height: 1, background: '#A3C49A' }} />
              </div>
              {/* Social buttons */}
              <div className="d-grid mb-2">
                <CButton
                  variant="outline"
                  color="light"
                  className="fw-semibold mb-2"
                  style={{ borderColor: '#A3C49A', borderRadius: 24, fontSize: 18, color: '#222' }}
                >
                  <FaGoogle style={{ marginRight: 8 }} />
                  Continue with Google
                </CButton>
                <CButton
                  variant="outline"
                  color="light"
                  className="fw-semibold"
                  style={{ borderColor: '#A3C49A', borderRadius: 24, fontSize: 18, color: '#222' }}
                >
                  <FaFacebookF style={{ marginRight: 8 }} />
                  Continue with Facebook
                </CButton>
              </div>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
