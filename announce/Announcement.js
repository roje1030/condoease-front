import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const Announcement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const announcements = [
    { id: 1, title: 'Maintenance Update', description: 'Elevator maintenance on 3rd floor', time: '10:00 AM' },
    { id: 2, title: 'New Pool Schedule', description: 'Pool hours updated to 8 AM - 9 PM', time: '9:30 AM' },
  ];

  const handlePost = () => {
    console.log({
      title,
      description,
      attachment,
    });
  };

  const handleAttachment = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSelectAnnouncement = (announcement) => {
    setSelectedAnnouncement(announcement);
    setTitle(announcement.title);
    setDescription(announcement.description);
  };

  return (
    <div className="container-fluid p-4">
      <h2>Announcements</h2>

      {/* Tabs Navigation */}
      <CNav variant="tabs" className="mb-3">
        <CNavItem>
          <CNavLink active={activeTab === 'All'} onClick={() => setActiveTab('All')} style={{ cursor: 'pointer' }}>
            All Announcements
          </CNavLink>
        </CNavItem>
        {/*<CNavItem>
          <CNavLink active={activeTab === 'My Announcements'} onClick={() => setActiveTab('My Announcements')} style={{ cursor: 'pointer' }}>
            My Announcements
          </CNavLink>
        </CNavItem>*/}
      </CNav>

      <div className="d-flex">
        {/* Left Panel */}
        <div className="me-3" style={{ width: '25%' }}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="🔍 Search Messages"
          />
          <CListGroup>
            {announcements.map((announcement) => (
              <CListGroupItem
                key={announcement.id}
                className="d-flex justify-content-between align-items-center"
                onClick={() => handleSelectAnnouncement(announcement)}
                style={{ cursor: 'pointer' }}
              >
                {announcement.title}
                <span className="text-muted">{announcement.time}</span>
              </CListGroupItem>
            ))}
          </CListGroup>
        </div>

        {/* Right Panel */}
        <div style={{ width: '75%' }}>
          <CCard>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol md={8}>
                    <CFormLabel>Announcement Title</CFormLabel>
                    <CFormInput
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter announcement title"
                    />
                    <CFormLabel className="mt-3">Announcement Description</CFormLabel>
                    <CFormTextarea
                      rows="5"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter announcement description"
                    />
                  </CCol>
                  <CCol md={4} className="text-center">
                    <CFormLabel>Image / Video Attachment:</CFormLabel>
                    <CButton color="warning" className="text-white mb-3">
                      Choose File
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleAttachment}
                      />
                    </CButton>
                    <div>
                      {attachment ? (
                        <p>{attachment.name}</p>
                      ) : (
                        <p className="text-muted">No attached files</p>
                      )}
                    </div>
                  </CCol>
                </CRow>
                <div className="d-flex justify-content-end mt-4">
                  <CButton color="secondary" className="me-2">
                    Cancel
                  </CButton>
                  <CButton color="warning" className="text-white" onClick={handlePost}>
                    Post Announcement
                  </CButton>
                  <CButton color="info" className="text-white ms-2">
                    Save Changes
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

