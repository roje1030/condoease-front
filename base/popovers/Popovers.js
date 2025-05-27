import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormTextarea
} from '@coreui/react';

const Popovers = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [view, setView] = useState('list');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [files, setFiles] = useState([
    'imagefilename.jpg',
    'imagefilename.png',
    'videofilename.mp4',
    'videofilename.mov'
  ]);

  const requests = [
    { type: 'Emergency Maintenance', category: 'Water Leaks / Flooding' },
    { type: 'General Repair', category: 'Electrical' }
  ];

  const openDetail = (request) => {
    setSelectedRequest(request);
    setView('detail');
  };

  const removeFile = (filename) => {
    setFiles(files.filter(file => file !== filename));
  };

  const goBack = () => {
    if (view === 'detail') {
      setView('list');
      setSelectedRequest(null);
    } else {
      navigate('/dashboard');
    }
  };

  const handleDelete = () => alert('Delete action clicked');

  const handleFileClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map(f => f.name);
    setFiles([...files, ...newFiles]);
  };

  return (
    <div className="p-3 pb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <CButton color="link" className="p-0 m-0 d-flex align-items-center" onClick={goBack}>
            <img src="src/assets/images/Back.svg" alt="Back" style={{ width: '24px', height: '24px' }} />
          </CButton>
          <h5 className="fw-bold mb-0">Cancelled Request</h5>
        </div>

        {view === 'detail' && (
          <CButton color="link" className="p-0 m-0" onClick={handleDelete}>
            <img src="src/assets/images/Delete.svg" alt="Delete" style={{ width: '22px', height: '22px' }} />
          </CButton>
        )}
      </div>

      {view === 'list' && (
        <>
          {requests.map((req, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center px-3 py-3 mb-3 rounded"
              style={{ border: '1px solid #8FAF8B', cursor: 'pointer' }}
              onClick={() => openDetail(req)}
            >
              <div>
                <div className="fw-bold text-body">{req.type}</div>
                <div className="text-secondary small">{req.category}</div>
              </div>
              <i className="cil-chevron-right text-success"></i>
            </div>
          ))}
        </>
      )}

      {view === 'detail' && (
        <CForm>
          <div className="mb-3">
            <CFormLabel className="fw-semibold">Type of Maintenance:</CFormLabel>
            <CFormSelect style={{ borderColor: '#8FAF8B' }} defaultValue={selectedRequest?.type}>
              <option>Emergency Maintenance</option>
              <option>General Repair</option>
              <option>Cleaning</option>
            </CFormSelect>
          </div>

          <div className="mb-3">
            <CFormLabel className="fw-semibold">Category:</CFormLabel>
            <CFormSelect style={{ borderColor: '#8FAF8B' }} defaultValue={selectedRequest?.category}>
              <option>Water Leaks / Flooding</option>
              <option>Electrical</option>
              <option>Others</option>
            </CFormSelect>
          </div>

          <div className="mb-3">
            <CFormLabel className="fw-semibold">Description:</CFormLabel>
            <CFormTextarea
              rows={3}
              style={{ borderColor: '#8FAF8B' }}
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <div className="mb-3">
            <CFormLabel className="fw-semibold">Image / Video Attachment:</CFormLabel>

            <input
              type="file"
              multiple
              ref={fileInputRef}
              className="d-none"
              onChange={handleFileChange}
            />

            <CButton
              onClick={handleFileClick}
              className="text-white small mb-3 px-3 py-1"
              color="warning"
              style={{ borderRadius: '999px' }}
            >
              Choose File
            </CButton>

            <div className="rounded p-2" style={{ backgroundColor: 'var(--cui-body-bg)', border: '1px solid #8FAF8B' }}>
              {files.map((file, idx) => (
                <div key={idx} className="d-flex justify-content-between align-items-center border-bottom py-2">
                  <div>
                    <i className="cil-media-play me-2 text-success"></i>
                    <span className="small text-body">{file}</span>
                  </div>
                  <CButton size="sm" color="link" className="text-danger p-0" onClick={() => removeFile(file)}>
                    <i className="cil-x"></i>
                  </CButton>
                </div>
              ))}
            </div>
          </div>

          <CButton color="warning" className="text-white w-100 fw-bold rounded-pill shadow mt-4">
            Re-submit request
          </CButton>
        </CForm>
      )}
    </div>
  );
};

export default Popovers;