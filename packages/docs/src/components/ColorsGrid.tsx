import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, value]) => (
    <div key={name} style={{ backgroundColor: value, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(value, 'white') > 4.5 ? 'white' : 'black',
        }}
      >
        <strong>{name}</strong>
        <span>{value}</span>
      </div>
    </div>
  ))
}
