import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CButton,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'

// ✅ Properly import the SVG from /src folder
import Back from '../../assets/images/Back.svg' // Adjust path if needed

const Charts = () => {
  const navigate = useNavigate()

  return (
    <div className="p-3 pb-5">
      {/* Header with Back Button */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <CButton
          color="link"
          className="p-0 m-0 d-flex align-items-center"
          onClick={() => navigate('/dashboard')}
        >
          <img src={Back} alt="Back" style={{ width: '24px', height: '24px' }} />
        </CButton>
        <h6 className="fw-bold mb-0">Maintenance Information</h6>
      </div>

      {/* Maintenance Status */}
      <section className="mb-4 border-top pt-3">
        <h6 className="fw-bold mb-3">Maintenance Status</h6>
        {[
          '3 Ongoing maintenance request',
          '2 Pending maintenance request',
          'Cancelled maintenance request',
        ].map((text, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom"
            style={{ borderColor: '#28a745' }}
          >
            <span>{text}</span>
            <i className="cil-chevron-right text-success"></i>
          </div>
        ))}
      </section>

      {/* Request Maintenance */}
      <section className="mb-4 border-top pt-3">
        <div className="d-flex align-items-center gap-2 mb-3">
          <CButton
            color="link"
            className="p-0 m-0 d-flex align-items-center"
            onClick={() => navigate('/dashboard')}
          >
            <img src={Back} alt="Back" style={{ width: '24px', height: '24px' }} />
          </CButton>
          <h6 className="fw-bold mb-0">Request Maintenance</h6>
        </div>

        <CForm>
          {/* Type of Maintenance */}
          <div className="mb-3">
            <CFormLabel className="fw-semibold">Type of Maintenance:</CFormLabel>
            <CFormSelect
              style={{
                border: '1px solid #28a745',
                borderRadius: '6px',
                height: '42px',
              }}
              defaultValue="Emergency Maintenance"
            >
              <option>Emergency Maintenance</option>
              <option>Regular Maintenance</option>
            </CFormSelect>
          </div>

          {/* Category */}
          <div className="mb-3">
            <CFormLabel className="fw-semibold">Category:</CFormLabel>
            <CFormSelect
              style={{
                border: '1px solid #28a745',
                borderRadius: '6px',
                height: '42px',
              }}
              defaultValue="Water Leaks / Flooding"
            >
              <option>Water Leaks / Flooding</option>
              <option>Electrical</option>
              <option>Others</option>
            </CFormSelect>
          </div>

          {/* Description */}
          <div className="mb-3">
            <CFormLabel className="fw-semibold">Description:</CFormLabel>
            <CFormTextarea
              rows={3}
              placeholder="Enter a detailed description"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              style={{
                border: '1px solid #28a745',
                borderRadius: '6px',
              }}
            />
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <CFormLabel className="fw-semibold">Image / Video Attachment:</CFormLabel>
            <div className="mb-2">
              <CButton color="warning" className="text-white small px-3 py-1">
                Choose File
              </CButton>
            </div>
            <div className="text-center text-muted border rounded p-3">
              <i className="cil-file" style={{ fontSize: '2rem' }}></i>
              <p className="small mb-0">No attached files</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <CButton
              color="warning"
              className="text-white w-100 fw-bold rounded-pill shadow"
            >
              Send Request
            </CButton>
          </div>
        </CForm>
      </section>
    </div>
  )
}

export default Charts
