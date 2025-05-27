import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormTextarea,
  CButton,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AddAnnouncementIcon from "../../../assets/images/add_announcement_icon.svg";


const Carousels = () => {
  // State to hold selected file(s) for post announcement
  const [selectedFiles, setSelectedFiles] = useState([])

  // State to hold selected file(s) for edit/save changes
  const [editSelectedFiles, setEditSelectedFiles] = useState([])

  // Search term for filtering messages
  const [searchTerm, setSearchTerm] = useState('')

  // Sample announcements/messages
  const announcements = [
    { id: 1, title: 'Announcement Header Title', description: 'Lorem ipsum dolor sit amet, consectetur', time: '10:00 AM' },
    { id: 2, title: 'Another Announcement', description: 'Sed do eiusmod tempor incididunt ut labore', time: '11:30 AM' },
    { id: 3, title: 'Third Announcement', description: 'Ut enim ad minim veniam, quis nostrud', time: '1:15 PM' },
  ]

  // Handle file selection for post announcement
  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files)
    setSelectedFiles(filesArray)
  }

  // Handle file selection for edit/save changes
  const handleEditFileChange = (event) => {
    const filesArray = Array.from(event.target.files)
    setEditSelectedFiles(filesArray)
  }

  // Handle post announcement submit
  const handlePostAnnouncement = (e) => {
    e.preventDefault()
    console.log('Files to upload:', selectedFiles)
    alert(`You have attached ${selectedFiles.length} file(s).`)
  }

  // Clear edit selected files on cancel
  const resetEditFiles = () => {
    setEditSelectedFiles([])
  }

  // Filter announcements based on search term (case-insensitive)
  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Page Header */}
      <h4 className="mb-3">Announcements</h4>
      <p className="text-body-secondary">
        <Link to="/base/cards" style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}>
          DASHBOARD
        </Link>{' '}
        /{' '}
        <Link to="/base/carousels" style={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}>
          ANNOUNCEMENTS
        </Link>
      </p>

      {/* Announcement Form */}
      <CCard className="mb-4">
        <CCardHeader>Announcement Header Title</CCardHeader>
        <CCardBody>
          <CForm onSubmit={handlePostAnnouncement}>
            <CRow>
              <CCol md={6}>
                <CFormInput type="text" placeholder="Announcement Title" className="mb-3" />
                <CFormTextarea rows="5" placeholder="Announcement Description" className="mb-3" />
              </CCol>
              <CCol md={6} className="text-center">
                <p>Image / Video Attachment:</p>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <CButton
                  color="warning"
                  className="text-white mb-3"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  Choose File
                </CButton>
                <div
                  className="border p-3 text-body-secondary text-start"
                  style={{ minHeight: '80px' }}
                >
                  {selectedFiles.length === 0
                    ? 'No attached files'
                    : selectedFiles.map((file, idx) => (
                        <div key={idx} className="d-flex justify-content-between align-items-center mb-1">
                          <span>
                            {file.name} ({(file.size / 1024).toFixed(2)} KB)
                          </span>
                          <CButton
                            color="danger"
                            size="sm"
                            onClick={() => {
                              const updatedFiles = [...selectedFiles]
                              updatedFiles.splice(idx, 1)
                              setSelectedFiles(updatedFiles)
                            }}
                          >
                            Remove
                          </CButton>
                        </div>
                      ))}
                </div>
              </CCol>
            </CRow>
            <div className="d-flex justify-content-end mt-3">
              <CButton color="secondary" className="me-2" type="reset" onClick={() => setSelectedFiles([])}>
                Cancel
              </CButton>
              <CButton color="warning" className="text-white" type="submit">
                Post Announcement
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>

      {/* Messages and Edit Form */}
      <CRow>
        {/* Messages Section */}
        <CCol md={4}>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilSearch} />
            </CInputGroupText>
            <CFormInput
              placeholder="Search Messages"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <CButton
              className="adaptive-button ms-2"
              onClick={() => alert("Add Announcement Modal Triggered")}
            >
              <img src={AddAnnouncementIcon} alt="Add Announcement" />
            </CButton>
          </CInputGroup>

          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map(({ id, title, description, time }) => (
              <CCard key={id} className="mb-3 border-success">
                <CCardBody>
                  <h6>{title}</h6>
                  <p className="text-body-secondary small">{description}</p>
                  <p className="text-body-secondary small">{time}</p>
                </CCardBody>
              </CCard>
            ))
          ) : (
            <p className="text-body-secondary small">No messages found.</p>
          )}
        </CCol>

        {/* Edit Announcement Section */}
        <CCol md={8}>
          <CCard className="mb-4">
            <CCardBody>
              <CForm>
                <CFormInput type="text" placeholder="Announcement Title" className="mb-3" />
                <CFormTextarea
                  rows="5"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  className="mb-3"
                />

                <p>Image / Video Attachment:</p>

                {/* Hidden file input for edit */}
                <input
                  type="file"
                  id="editFileInput"
                  multiple
                  style={{ display: 'none' }}
                  onChange={handleEditFileChange}
                />
                <CButton
                  color="warning"
                  className="text-white mb-3"
                  onClick={() => document.getElementById('editFileInput').click()}
                >
                  Choose File
                </CButton>

                {/* Display selected edit files */}
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {editSelectedFiles.length === 0 ? (
                    <div className="border p-2 text-center text-body-secondary">No attached files</div>
                  ) : (
                    editSelectedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="border p-2 text-center d-flex align-items-center justify-content-between"
                        style={{ minWidth: '150px' }}
                      >
                        <span>
                          {file.name} ({(file.size / 1024).toFixed(2)} KB)
                        </span>
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => {
                            const updatedFiles = [...editSelectedFiles]
                            updatedFiles.splice(idx, 1)
                            setEditSelectedFiles(updatedFiles)
                          }}
                        >
                          Remove
                        </CButton>
                      </div>
                    ))
                  )}
                </div>

                <div className="d-flex justify-content-end">
                  <CButton color="secondary" className="me-2" onClick={resetEditFiles}>
                    Cancel
                  </CButton>
                  <CButton color="warning" className="text-white">
                    Save Changes
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Carousels
