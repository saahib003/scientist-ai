import { useEffect, useRef } from 'react'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let mouse = { x: 0, y: 0 }
    let animationId

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.hue = Math.random() > 0.5 ? 165 : 258
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          this.x += dx * 0.002
          this.y += dy * 0.002
        }

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light'
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        
        if (isLightTheme) {
          ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.15})`
        } else {
          ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`
        }
        
        ctx.fill()
      }
    }

    const particleCount = Math.min(80, Math.floor(window.innerWidth / 15))
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function drawConnections() {
      const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light'
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            const baseOpacity = (1 - dist / 150)
            
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            
            if (isLightTheme) {
              ctx.strokeStyle = `rgba(0, 0, 0, ${baseOpacity * 0.08})`
            } else {
              ctx.strokeStyle = `rgba(0, 245, 212, ${baseOpacity * 0.15})`
            }
            
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas id="particleCanvas" ref={canvasRef}></canvas>
}

export default ParticleCanvas
