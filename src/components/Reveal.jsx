import { useReveal } from '../hooks/useReveal'
import './Reveal.css'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
