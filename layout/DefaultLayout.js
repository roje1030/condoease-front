import React from 'react'
import { useLocation } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const location = useLocation()

  // Routes where you want to hide the AppHeader
  const hideHeaderRoutes = [
    '/forms/checks-radios',
    '/forms/layout',
    '/forms/range',
    '/forms/floating-labels',
    '/forms/form-control',
    '/forms/input-group',
  ]

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname)

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        {!shouldHideHeader && <AppHeader />}
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout