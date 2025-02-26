/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect } from "react";
import "./LoadMessage.css"


// eslint-disable-next-line react/prop-types
export function LoadMessage({ handleShow }) {

  useEffect(() => {
    return handleShow()
  }, [])

  return (
    <div className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="110 -5 300 200"
      >
        <g id="circulo">
          <path
            className="st0"
            d="M353.7,93.9c0.2-52-41.9-94.3-93.9-94.5c-52-0.2-94.3,41.9-94.5,93.9s41.9,94.3,93.9,94.5c0.1,0,0.2,0,0.3,0 C311.5,187.9,353.7,145.8,353.7,93.9C353.7,93.9,353.7,93.9,353.7,93.9L353.7,93.9z"
          />
        </g>
        <g id="luna">
          <path
            className="st1"
            d="M218,113c-3.2-6.5-4.8-13.6-4.7-20.9c0.1-15.8,8.1-30.5,21.4-39.2c4.1-2.8,8.8-4.6,13.7-5.3 c0,0-20.8,63.6,52.3,65.7c-7.5,14.9-22.6,24.4-39.2,24.8C243.3,139,226.3,129.2,218,113L218,113z" />
        </g>
      </svg>
    </div>
  )
}