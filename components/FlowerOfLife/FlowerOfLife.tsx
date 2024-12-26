import React from 'react'
import styles from './FlowerOfLife.module.css'

interface CirclePosition {
  cx: number
  cy: number
}

const FlowerOfLife: React.FC = () => {
  const radius = 50 // Radius of each circle
  const numberOfRings = 4 // Number of layers around the center
  const sqrt3 = Math.sqrt(3) // Square root of 3 for hexagonal geometry

  // Generate the positions of the circles
  const generateCirclePositions = (): CirclePosition[] => {
    const positions: CirclePosition[] = [{ cx: 0, cy: 0 }] // Start with the center circle
    for (let layer = 1; layer <= numberOfRings; layer++) {
      // Generate circles around the current layer
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < layer; j++) {
          const angle = (Math.PI / 3) * i // Angle for hexagonal placement
          const cx =
            (layer - j) * radius * Math.cos(angle) + j * radius * Math.cos(angle + Math.PI / 3)
          const cy =
            (layer - j) * radius * Math.sin(angle) + j * radius * Math.sin(angle + Math.PI / 3)
          positions.push({ cx, cy })
        }
      }
    }
    return positions
  }

  const positions = generateCirclePositions()

  return (
    <div className={styles.container}>
      <svg
        className={styles.flower}
        viewBox={`-${(numberOfRings + 1) * radius} -${
          (numberOfRings + 1) * radius
        } ${(numberOfRings + 1) * radius * 2} ${(numberOfRings + 1) * radius * 2}`}
      >
        {positions.map((position, index) => (
          <circle
            key={index}
            cx={position.cx}
            cy={position.cy}
            r={0} // Start with 0 for animation
            className={styles.circle}
            style={{
              animationDelay: `${index * 0.05}s`, // Staggered animation
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default FlowerOfLife
