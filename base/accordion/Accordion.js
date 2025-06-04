import React from 'react';
import { CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

const Accordion = () => {
  const customBorder = { borderBottom: '1px solid var(--custom-border-color, #8FAF8B)' };

  return (
    <div className="p-3 pb-5 text-body bg-body">
      {/* Header with back button */}
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <CButton
            color="link"
            className="p-0 m-0 d-flex align-items-center"
            onClick={() => window.history.back()}
          >
            <img
              src="src/assets/images/Back.svg"
              alt="Back"
              style={{ width: '24px', height: '24px' }}
            />
          </CButton>
          <h5 className="fw-bold mb-0">Unit Information</h5>
        </div>
      </header>

      {/* Tenant Details */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="fw-bold mb-0">Tenant Details</h6>
        </div>

        <div style={{ borderTop: '1px solid var(--custom-border-color, #8FAF8B)' }}>
          {/* Name */}
          <Link to="/base/progress" className="text-decoration-none text-body">
            <div
              className="d-flex justify-content-between align-items-center px-3 py-3 bg-body"
              style={customBorder}
            >
              <span className="fw-semibold">Name</span>
              <div className="d-flex align-items-center gap-2">
                <span className="text-end">Jose R. Dela Cruz</span>
                <img
                  src="src/assets/images/Forward.svg"
                  alt="Arrow"
                  style={{ width: '16px', height: '16px' }}
                />
              </div>
            </div>
          </Link>

          {/* Email */}
          <Link to="/base/spinners" className="text-decoration-none text-body">
            <div
              className="d-flex justify-content-between align-items-center px-3 py-3 bg-body"
              style={customBorder}
            >
              <span className="fw-semibold">Email</span>
              <div className="d-flex align-items-center gap-2">
                <span className="text-end">tenantemail@email(dot)com</span>
                <img
                  src="src/assets/images/Forward.svg"
                  alt="Arrow"
                  style={{ width: '16px', height: '16px' }}
                />
              </div>
            </div>
          </Link>

          {/* Static Fields */}
          {[
            { label: 'Birthday', value: 'MM/DD/YYYY' },
            { label: 'Contact Details', value: '0912 345 6789' },
            { label: 'Tenant ID', value: 'Pending' },
            { label: 'Emergency Contact', value: 'Maria R. Dela Cruz' },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center px-3 py-3 bg-body text-body"
              style={customBorder}
            >
              <span className="fw-semibold">{item.label}</span>
              <span className="text-end">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Drop Shadow Divider */}
      <div
        className="mx-3 my-3"
        style={{
          height: '1px',
          backgroundColor: '#00000000'
          // boxShadow: '0 4px 6px #00000040',
          // borderRadius: '4px'
        }}
      ></div>

      {/* Lease & Unit Details */}
      <section className="mb-4">
        <h6 className="fw-bold mb-3">Lease & Unit Details</h6>

        <div style={{ borderTop: '1px solid var(--custom-border-color, #8FAF8B)' }}>
          {[
            { label: 'Unit Number', value: '1234' },
            { label: 'Unit Type', value: 'Standard Room' },
            { label: 'Lease Start Date', value: 'MM/DD/YYYY' },
            { label: 'Lease End Date', value: 'MM/DD/YYYY' },
            { label: 'Payment Method', value: 'PDC' },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center px-3 py-3 bg-body text-body"
              style={customBorder}
            >
              <span className="fw-semibold">{item.label}</span>
              <span className="text-end">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}                                        
      <div className="text-center mb-4">
        <p className="text-body-secondary small">
          Contact your Property Manager for changes. 
        </p>
      </div>
    </div>
  );
};

export default Accordion;
