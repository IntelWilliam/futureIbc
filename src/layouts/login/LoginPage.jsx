import React from 'react'
import {FooterLogin} from './FooterLogin'
import {FormLogin} from './FormLogin'
import {NavbarLogin} from './NavbarLogin'
import {SideLogin} from './SideLogin'



export const LoginPage = () => {
  return (
    <div>
      <NavbarLogin/>
      <div>
        <SideLogin/>
        <FormLogin/>
      </div>
      <FooterLogin/>
    </div>
  )
}
