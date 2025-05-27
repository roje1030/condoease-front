import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormInput,
} from '@coreui/react'

const defaultProfilePicture = 'https://via.placeholder.com/150'

const Navs = () => {
  const fileInputRef = useRef(null)
  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture)

  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: '',
    birthday: '1995-06-15',
  })

  const [modalVisible, setModalVisible] = useState(false)
  const [profileModal, setProfileModal] = useState(false)
  const [currentField, setCurrentField] = useState('')
  const [tempValue, setTempValue] = useState('')
  const [tempData, setTempData] = useState({})

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfilePicture(imageUrl)
    }
  }

  const openEditModal = (field) => {
    setCurrentField(field)

    if (field === 'name') {
      setTempData({ firstName: userData.firstName, lastName: userData.lastName })
    } else if (field === 'email') {
      setTempData({ email: userData.email, password: '' })
    } else if (field === 'password') {
      setTempData({ current: '', new: '', confirm: '' })
    } else if (field === 'birthday') {
      const [year, month, day] = userData.birthday.split('-')
      setTempData({ year, month, day, password: '' })
    } else if (field === 'profile') {
      setProfileModal(true)
      return
    }

    setModalVisible(true)
  }

  const saveChanges = () => {
    if (currentField === 'name') {
      setUserData((prev) => ({
        ...prev,
        firstName: tempData.firstName,
        lastName: tempData.lastName,
      }))
    } else if (currentField === 'email') {
      setUserData((prev) => ({
        ...prev,
        email: tempData.email,
      }))
    } else if (currentField === 'password') {
      setUserData((prev) => ({
        ...prev,
        password: '********',
      }))
    } else if (currentField === 'birthday') {
      setUserData((prev) => ({
        ...prev,
        birthday: `${tempData.year}-${tempData.month}-${tempData.day}`,
      }))
    }
    setModalVisible(false)
  }

  return (
    <>
      <h4 className="mb-3">Account Settings</h4>
      <p className="text-body-secondary">
        <Link to="/base/cards" style={{ textDecoration: 'underline', color: '#0d6efd' }}>
          DASHBOARD
        </Link>{' '}
        / ACCOUNT SETTINGS
      </p>

      <CRow className="justify-content-center mb-4">
        <CCol md={8}>
          <CCard className="p-3">
            <CRow className="align-items-center">
              <CCol xs="auto">
                <CAvatar src={profilePicture} size="xl" />
              </CCol>
              <CCol>
                <h5 className="mb-1">{userData.firstName} {userData.lastName}</h5>
                <p className="text-muted mb-0">{userData.email}</p>
              </CCol>
              <CCol xs="auto" className="text-end">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => {
                    handleFileChange(e)
                    setProfileModal(false)
                  }}
                  style={{ display: 'none' }}
                />
                <CButton
                  size="sm"
                  style={{ backgroundColor: '#F28D35', borderColor: '#F28D35', color: 'white' }}
                  onClick={() => openEditModal('profile')}
                >
                  Change Profile Picture
                </CButton>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>

      <CRow className="justify-content-center">
        <CCol md={8}>
          <CCard>
            <CCardHeader className="text-body-secondary">
              <strong>Profile Information</strong>
            </CCardHeader>
            <CCardBody>
              <div className="text-body-secondary mb-3 d-flex justify-content-between align-items-center"
                   onClick={() => openEditModal('name')} style={{ cursor: 'pointer' }}>
                <div><strong>Name:</strong><p className="mb-0">{userData.firstName} {userData.lastName}</p></div>
                <span style={{ fontSize: '1.5rem', color: '#adb5bd' }}>{'›'}</span>
              </div>

              <div className="text-body-secondary mb-3 d-flex justify-content-between align-items-center"
                   onClick={() => openEditModal('email')} style={{ cursor: 'pointer' }}>
                <div><strong>Email:</strong><p className="mb-0">{userData.email}</p></div>
                <span style={{ fontSize: '1.5rem', color: '#adb5bd' }}>{'›'}</span>
              </div>

              <div className="text-body-secondary mb-3 d-flex justify-content-between align-items-center"
                   onClick={() => openEditModal('password')} style={{ cursor: 'pointer' }}>
                <div><strong>Password:</strong><p className="mb-0">********</p></div>
                <span style={{ fontSize: '1.5rem', color: '#adb5bd' }}>{'›'}</span>
              </div>

              <div className="text-body-secondary d-flex justify-content-between align-items-center"
                   onClick={() => openEditModal('birthday')} style={{ cursor: 'pointer' }}>
                <div><strong>Birthday:</strong><p className="mb-0">{userData.birthday}</p></div>
                <span style={{ fontSize: '1.5rem', color: '#adb5bd' }}>{'›'}</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Modal for Editing Info */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Edit {currentField.charAt(0).toUpperCase() + currentField.slice(1)}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {currentField === 'name' && (
            <>
              <label>First Name</label>
              <CFormInput className="mb-2" value={tempData.firstName || ''}
                          onChange={(e) => setTempData({ ...tempData, firstName: e.target.value })} />
              <label>Last Name</label>
              <CFormInput value={tempData.lastName || ''}
                          onChange={(e) => setTempData({ ...tempData, lastName: e.target.value })} />
            </>
          )}
          {currentField === 'email' && (
            <>
              <label>Email</label>
              <CFormInput className="mb-2" value={tempData.email || ''}
                          onChange={(e) => setTempData({ ...tempData, email: e.target.value })} />
              <label>Password (for verification)</label>
              <CFormInput type="password" value={tempData.password || ''}
                          onChange={(e) => setTempData({ ...tempData, password: e.target.value })} />
            </>
          )}
          {currentField === 'password' && (
            <>
              <label>Current password</label>
              <CFormInput className="mb-2" type="password" value={tempData.current || ''}
                          onChange={(e) => setTempData({ ...tempData, current: e.target.value })} />
              <label>New password</label>
              <CFormInput className="mb-2" type="password" value={tempData.new || ''}
                          onChange={(e) => setTempData({ ...tempData, new: e.target.value })} />
              <label>Re-type new password</label>
              <CFormInput type="password" value={tempData.confirm || ''}
                          onChange={(e) => setTempData({ ...tempData, confirm: e.target.value })} />
              <p className="mt-2 text-danger small" style={{ cursor: 'pointer' }}>Forgot password?</p>
            </>
          )}
          {currentField === 'birthday' && (
            <>
              <label>Month</label>
              <CFormInput className="mb-2" value={tempData.month || ''}
                          onChange={(e) => setTempData({ ...tempData, month: e.target.value })} />
              <label>Day</label>
              <CFormInput className="mb-2" value={tempData.day || ''}
                          onChange={(e) => setTempData({ ...tempData, day: e.target.value })} />
              <label>Year</label>
              <CFormInput className="mb-2" value={tempData.year || ''}
                          onChange={(e) => setTempData({ ...tempData, year: e.target.value })} />
              <label>Password (for verification)</label>
              <CFormInput type="password" value={tempData.password || ''}
                          onChange={(e) => setTempData({ ...tempData, password: e.target.value })} />
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>Cancel</CButton>
          <CButton
            style={{ backgroundColor: '#F28D35', borderColor: '#F28D35', color: 'white' }}
            onClick={saveChanges}
          >
            Save Changes
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Modal for Profile Picture Upload */}
      <CModal visible={profileModal} onClose={() => setProfileModal(false)}>
        <CModalHeader>
          <CModalTitle>Profile picture</CModalTitle>
        </CModalHeader>
        <CModalBody className="text-center">
          <p className="text-muted small">
            Your picture will be visible to anyone when they communicate with you through their CondoEase app.
          </p>
          <CAvatar src={profilePicture} size="xxl" className="my-3" />
          <CButton
            className="mb-2 w-100"
            style={{ backgroundColor: '#F28D35', borderColor: '#F28D35', color: 'white' }}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            Choose file
          </CButton>
          <CButton
            color="secondary"
            variant="outline"
            className="w-100"
            onClick={() => setProfileModal(false)}
          >
            Cancel
          </CButton>
        </CModalBody>
      </CModal>
    </>
  )
}

export default Navs
