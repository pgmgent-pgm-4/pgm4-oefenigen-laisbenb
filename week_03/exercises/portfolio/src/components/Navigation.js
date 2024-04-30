import React from 'react'
import { ROUTES } from '../routes/routes'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <NavLink to={ROUTES.home.path}>HOME</NavLink>
        <NavLink to={ROUTES.about.path}>ABOUT</NavLink>
        <NavLink to={ROUTES.projects.path}>PROJECTS</NavLink>
        <NavLink to={ROUTES.contact.path}>CONTACT</NavLink>
        <NavLink to={ROUTES.resume.path}>RESUME</NavLink>
    </div>
  )
}