import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

const FormControl = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Get email from navigation state, fallback to empty string if not present
  const emailFromState = location.state?.email || ''

  // Initialize form values including email
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: emailFromState,
    password: '',
    rePassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  // Update formValues.email if location.state.email changes (optional)
  useEffect(() => {
    if (emailFromState) setFormValues(prev => ({ ...prev, email: emailFromState }))
  }, [emailFromState])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.password !== formValues.rePassword) {
      alert('Passwords do not match!')
      return
    }
    try {
      const res = await fetch('http://localhost:3001/api/formcontrol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
        }),
      })
      const data = await res.json()
      if (data.success) {
        alert('Registration successful!')
        navigate('/login')
      } else {
        alert(data.error || 'Registration failed')
      }
    } catch (err) {
      alert('Server error')
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* Top nav bar */}
      <div
        style={{
          background: '#1D2B57',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 50px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/src/assets/images/logo_white.png"
            alt="CondoEase Logo"
            style={{ height: 64, marginRight: 12 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          <span style={{ color: 'white', fontSize: 20 }}>Already have an account?</span>
          <CButton
            color="warning"
            className="text-white fw-bold px-4"
            style={{ borderRadius: 20, fontSize: 20 }}
            onClick={() => navigate('/login')}
          >
            Log in
          </CButton>
        </div>
      </div>

      {/* Main content */}
      <CContainer className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <CRow className="justify-content-center w-100">
          <CCol xs={12} md={7} lg={5} xl={4}>
            {/* Progress bar */}
            <div className="d-flex justify-content-center align-items-center mb-5 mt-3" style={{ gap: 0 }}>
              <div
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                  background: '#F7941D',
                  border: '3px solid #B86C29',
                }}
              />
              <div style={{ flex: 1, height: 2, background: '#B86C29' }} />
              <div
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                  background: '#F7941D',
                  border: '3px solid #B86C29',
                }}
              />
              <div style={{ flex: 1, height: 2, background: '#333333' }} />
              <div
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                  background: '#6B6B6B',
                  border: '3px solid #333333',
                }}
              />
            </div>
            {/* Title */}
            <div className="text-center mb-3">
              <h2 className="fw-bold mb-4 text-start" style={{ fontSize: 32 }}>
                Create Account
              </h2>
            </div>
            {/* Form */}
            <CForm onSubmit={handleSubmit}>
              <CRow className="mb-3">
                <CCol>
                  <div className="fw-semibold text-start mb-1">First Name</div>
                  <CFormInput
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    style={{
                      borderColor: '#A3C49A',
                      borderRadius: 10,
                      fontSize: 16,
                      padding: '16px 16px',
                    }}
                  />
                </CCol>
                <CCol>
                  <div className="fw-semibold text-start mb-1">Last Name</div>
                  <CFormInput
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    style={{
                      borderColor: '#A3C49A',
                      borderRadius: 10,
                      fontSize: 16,
                      padding: '16px 16px',
                    }}
                  />
                </CCol>
              </CRow>
              <div className="mb-2 fw-semibold text-start">Email</div>
              <CFormInput
                placeholder="email@gmail.com"
                name="email"
                className="mb-3"
                style={{
                  borderColor: '#A3C49A',
                  borderRadius: 10,
                  fontSize: 16,
                  padding: '16px 16px',
                }}
                value={formValues.email}
                onChange={handleInputChange}
              />
              <div className="mb-2 fw-semibold text-start">Enter Password</div>
              <CInputGroup className="mb-3">
                <CFormInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  style={{
                    borderColor: '#A3C49A',
                    borderRadius: 10,
                    fontSize: 16,
                    padding: '16px 16px',
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
                  name="rePassword"
                  value={formValues.rePassword}
                  onChange={handleInputChange}
                  style={{
                    borderColor: '#A3C49A',
                    borderRadius: 10,
                    fontSize: 16,
                    padding: '16px 16px',
                  }}
                />
                <CInputGroupText
                  style={{ background: 'transparent', cursor: 'pointer', borderColor: '#A3C49A' }}
                  onClick={() => setShowRePassword((v) => !v)}
                >
                  <FaEye color="#A3C49A" />
                </CInputGroupText>
              </CInputGroup>
              <div className="d-grid mb-4">
                <CButton
                  color="warning"
                  className="text-white fw-bold"
                  style={{
                    borderRadius: 50,
                    fontSize: 25,
                    padding: '13px 0',
                    width: '90%',
                    margin: '0 auto',
                  }}
                  type="submit"
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

export default FormControl
