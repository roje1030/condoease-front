import React, { useState } from 'react';
import { CButton, CForm, CFormInput, CFormLabel } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const Spinners = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/base/accordion');
  };

  return (
    <div className="p-3 pb-5 text-body bg-body">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <CButton color="link" className="p-0 m-0 d-flex align-items-center" onClick={() => navigate('/base/accordion')}>
            <img src="src/assets/images/Back.svg" alt="Back" style={{ width: '24px', height: '24px' }} />
          </CButton>
          <h5 className="fw-bold mb-0">Email</h5>
        </div>
      </div>

      <p className="text-secondary mb-4 small">
        Your name will be visible to anyone when they communicate with you through their CondoEase app.
      </p>

      <CForm>
        <div className="mb-4">
          <CFormLabel>Email</CFormLabel>
          <CFormInput
            type="email"
            style={{ borderColor: '#8FAF8B' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <CButton
          color="warning"
          className="text-white w-100 fw-bold rounded-pill shadow"
          onClick={handleSave}
        >
          Save changes
        </CButton>
      </CForm>
    </div>
  );
};

export default Spinners;
