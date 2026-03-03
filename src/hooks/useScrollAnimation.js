import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Function to observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => observer.observe(el))
      return elements
    }

    // Initial observation with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      observeElements()
    }, 100)

    // Also observe immediately in case DOM is already ready
    const elements = observeElements()

    return () => {
      clearTimeout(timeoutId)
      elements.forEach(el => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])
}

export default useScrollAnimation
