import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Logo.css'

function Logo() {
  const logoRef = useRef(null)
  const leftEyeRef = useRef(null)
  const rightEyeRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    const leftEye = leftEyeRef.current
    const rightEye = rightEyeRef.current

    if (!logo || !leftEye || !rightEye) return

    const handleMouseMove = (e) => {
      // Always track based on the logo position in the viewport
      const rect = logo.getBoundingClientRect()
      const logoCenterX = rect.left + rect.width / 2
      const logoCenterY = rect.top + rect.height / 2

      // Mouse position relative to logo center
      const mouseX = e.clientX - logoCenterX
      const mouseY = e.clientY - logoCenterY

      // Distance from center
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY)
      
      // Allow a bit more movement so it's visible even far away
      const maxDistance = 6
      const moveDistance = Math.min(distance / 15, maxDistance)
      
      // Calculate angle
      const angle = Math.atan2(mouseY, mouseX)
      
      // Calculate new eye positions
      const leftEyeX = Math.cos(angle) * moveDistance
      const leftEyeY = Math.sin(angle) * moveDistance
      const rightEyeX = Math.cos(angle) * moveDistance
      const rightEyeY = Math.sin(angle) * moveDistance

      // Animate eyes smoothly
      gsap.to(leftEye, {
        x: leftEyeX,
        y: leftEyeY,
        duration: 0.2,
        ease: 'power2.out'
      })

      gsap.to(rightEye, {
        x: rightEyeX,
        y: rightEyeY,
        duration: 0.2,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      // Return eyes to center
      gsap.to([leftEye, rightEye], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    // Track mouse anywhere on the page
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="logo-container" ref={logoRef}>
      <svg
        id="main-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.58 66.97"
        className="main-logo"
      >
        <defs>
          <style>
            {`
              .cls-1 {
                fill: #6a040f;
              }
              .cls-2 {
                fill: #e85d04;
              }
            `}
          </style>
        </defs>
        <g id="Layer_3" data-name="Layer 3">
          <g>
            <g>
              <circle className="cls-2" cx="25.74" cy="46.81" r="17.78" />
              <circle className="cls-2" cx="101.83" cy="46.81" r="17.78" />
            </g>
            <path
              className="cls-1"
              d="M82.66,5.21c10.92,0,19.78,8.85,19.78,19.78s-8.85,19.78-19.78,19.78c-8.85,0-16.35-5.82-18.87-13.84-2.52,8.02-10.01,13.84-18.87,13.84-10.92,0-19.78-8.85-19.78-19.78S34,5.21,44.92,5.21c8.85,0,16.35,5.82,18.87,13.84,2.52-8.02,10.01-13.84,18.87-13.84M82.66,0c-7.44,0-14.24,3.23-18.87,8.57C59.16,3.23,52.36,0,44.92,0c-13.78,0-24.99,11.21-24.99,24.99s11.21,24.99,24.99,24.99c7.44,0,14.24-3.23,18.87-8.57,4.63,5.34,11.43,8.57,18.87,8.57,13.78,0,24.99-11.21,24.99-24.99S96.44,0,82.66,0h0Z"
            />
            <g className="eyes-container">
              <circle
                ref={leftEyeRef}
                className="cls-1 eye"
                cx="52.85"
                cy="29.03"
                r="4.9"
                style={{ transformOrigin: '52.85px 29.03px' }}
              />
              <circle
                ref={rightEyeRef}
                className="cls-1 eye"
                cx="74.73"
                cy="29.03"
                r="4.9"
                style={{ transformOrigin: '74.73px 29.03px' }}
              />
            </g>
            <path
              className="cls-1"
              d="M122.45,21.41c-3.24-2.85-7.82-4.47-13.3-4.75.61,1.95,1.01,4,1.18,6.11,7.01.8,11.24,4.53,11.24,10.14,0,3.34-1.53,6.75-4.2,9.34-2.11,2.05-5.87,4.49-11.8,4.56h-3.67c0,5.06-6.91,8.32-11.04,9.81-7.18,2.6-17.27,4.09-27.69,4.09-21.73,0-38.12-5.98-38.12-13.9h-2.97c-9.95-.07-16.1-7.24-16.1-13.9,0-1.95.54-4.75,3.09-6.99,1.94-1.71,4.73-2.77,8.15-3.15.17-2.11.56-4.16,1.18-6.11-5.48.28-10.06,1.9-13.3,4.75-3.31,2.91-5.13,6.99-5.13,11.5,0,9.12,7.72,18.93,20.34,19.83,1.86,3.42,5.76,7,13.4,9.8,7.79,2.85,18.25,4.43,29.45,4.43,18.88,0,37.91-4.43,43.4-14.18,13-.61,20.98-10.6,20.98-19.88,0-4.51-1.82-8.59-5.12-11.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Logo
