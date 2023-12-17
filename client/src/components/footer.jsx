import React from 'react'

export const Footer = () => {
  return (
      <div style={{
          color: 'white',
          backgroundColor: '#262323',
          fontSize:'16px'
      }}>
          <h4>Team Members:</h4>
          <ul style={{
              justifyContent: 'space-evenly',
              fontFamily:'Lucida Handwriting,Cursive',
              display: 'flex',
            }}>
              <li>Namasivaayam L (202009027)</li>
              <li>Jegan V G (202009027)</li>
              {/* <li>Davis Joshi A (202009009)</li> */}
              <li>Sujit M (202009042)</li>
          </ul>
          <ul style={{
              justifyContent: 'space-evenly',
              display: 'flex',
              fontFamily:'Lucida Handwriting,Cursive',
          }}>
              <li>Aritificial Intelligence Laboratory</li>
              {/* <li>Data Analytics Laboratory</li> */}
          </ul>
    </div>
  )
}
