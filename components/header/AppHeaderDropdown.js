import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout, cilSettings } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>

      <CDropdownMenu className="pt-0" placement="bottom-end" style={{ minWidth: '250px' }}>
        <div className="text-center p-3 border-bottom">
          <CAvatar src={avatar8} size="xl" className="mb-2" />
          <div className="fw-semibold">Property Manager Name</div>
          <div className="text-muted small">PropertyManager@email.com</div>
        </div>

        {/* ✅ Use navigate instead of Link for better reliability in dropdowns */}
        <CDropdownItem onClick={() => navigate('/base/navs')}>
          <CIcon icon={cilSettings} className="me-2" />
          Account Settings
        </CDropdownItem>

        <CDropdownDivider />

        <CDropdownItem onClick={() => navigate('/logout')}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
