import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import React, { useEffect, useRef } from 'react'

const HeroSection = () => {
    const { t } = useLanguage()
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!backgroundRef.current) return

            const x = e.clientX / window.innerWidth
            const y = e.clientY / window.innerHeight

            backgroundRef.current.style.transform = `translate(${x * -55}px, ${y * -55}px)`
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id={'home'}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-green-900"
        >
            {/* Background Elements */}
            <div
                ref={backgroundRef}
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg-hero.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.6,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full" />
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary transform rotate-45" />
                <div className="absolute top-40 right-40 w-32 h-32 bg-primary-muted" />
                <div className="absolute bottom-28 left-60 w-32 h-32 rounded-full bg-[--header]" />
            </div>
            <div className="container px-4 mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-none bg-secondary">
                        {t('hero.title')}
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        {t('hero.title')}
                    </h1>
                    <p
                        className="text-lg md:text-xl text-white/80 mb-8"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        {t('hero.subtitle')}
                    </p>
                    <div
                        className={
                            'flex justify-center items-center gap-6 relative'
                        }
                    >
                        <motion.div
                            onClick={handleNavClick('aboutUs')}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute bottom-[-100px] left-[47%] transform -translate-x-1/2 cursor-pointer"
                        >
                            <img
                                src="btn.png"
                                alt="Logo"
                                className="h-[60px] w-auto object-contain rotate-90"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
