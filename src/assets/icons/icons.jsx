/* eslint-disable react/prop-types */



export function Logo({ width = 60, height = 42 }) {
  return (
    <a href="/" >
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 67.312"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
          .cls-1 {
            fill: #00c2ff;
            fill-rule: evenodd;
          }
        `}
          </style>
        </defs>
        <path
          className="cls-1"
          d="M422.1,83.842l6.376-5.926h-4.406l-7.127,6.6V68.062H413.86v26.2h3.081v-5.65l2.826-2.63,6.021,8.279h3.9l-7.6-10.422Zm-39.182-6.248a8.181,8.181,0,0,0-4.836,1.892V77.915H375V94.267h3.08V85.484a4.836,4.836,0,1,1,9.671,0v8.783h3.08V85.484A7.815,7.815,0,0,0,382.916,77.594Zm19.09-.036a8.551,8.551,0,1,0,0,17.1A8.551,8.551,0,1,0,402.006,77.558Zm0,14.031a5.48,5.48,0,1,1,5.516-5.5A5.509,5.509,0,0,1,402.006,91.589Zm36.353-.25a2.612,2.612,0,0,1-2.436-2.57V80.843h5.051V77.915h-5.051V71.6h-3.08v6.319h-2.435v2.927h2.435v8a5.411,5.411,0,0,0,5.444,5.427h3.618l-0.788-2.928h-2.758Zm13.36-13.781a8.551,8.551,0,1,0,0,17.1A8.551,8.551,0,1,0,451.719,77.558Zm0,14.031a5.48,5.48,0,1,1,5.515-5.5A5.509,5.509,0,0,1,451.719,91.589Zm22.528-4.641a4.493,4.493,0,0,0-1.719-1.392,22.555,22.555,0,0,0-3.8-1.107c-2.185-.464-3.044-1.035-3.044-2.106a1.955,1.955,0,0,1,1.182-1.642,3.952,3.952,0,0,1,1.755-.357,6.074,6.074,0,0,1,3.689,1.428L474.1,79.7a9.46,9.46,0,0,0-4.406-1.963c-0.394-.036-0.824-0.071-1.218-0.071a6.7,6.7,0,0,0-2.829.607,4.936,4.936,0,0,0-2.042,1.571,4.493,4.493,0,0,0-.788,2.5,4.222,4.222,0,0,0,2.292,3.82,19.3,19.3,0,0,0,3.833,1.107c2.221,0.393,3.188,1.071,3.188,2.178a2.039,2.039,0,0,1-1.289,1.856,4.748,4.748,0,0,1-1.9.393,7.011,7.011,0,0,1-4.513-1.928L462.5,91.874a10.823,10.823,0,0,0,4.907,2.356,8.985,8.985,0,0,0,1.683.179,7.2,7.2,0,0,0,2.938-.607,5.225,5.225,0,0,0,2.184-1.785A4.359,4.359,0,0,0,475,89.447,4.286,4.286,0,0,0,474.247,86.948Zm-28.5-40.829A18.84,18.84,0,1,0,426.909,64.9,18.809,18.809,0,0,0,445.749,46.119Zm-27.143,3.827a9.159,9.159,0,0,1-.938-4.171,9.414,9.414,0,0,1,4.271-7.834,6.175,6.175,0,0,1,2.737-1.051s-4.158,12.717,10.464,13.146a9,9,0,0,1-7.845,4.957A9.319,9.319,0,0,1,418.606,49.946Z"
          transform="translate(-375 -27.344)"
        />
      </svg>
    </a>
  )
}

export function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--blue-500)" viewBox="0 0 16 16">
      <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="var(--blue-950)" {...props} style={{ cursor: "pointer" }}> <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" /></svg >
  )
}

export function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
  )
}
