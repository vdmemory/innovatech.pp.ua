import React from 'react'
import { motion } from 'framer-motion'
import { configCompany } from '@/lib/configCompany.ts'

const SocialLinks = ({ isHeader = false }: { isHeader?: boolean }) => {
    const socialLinks = [
        {
            icon: 'facebook.png',
            href: configCompany.facebook,
            color: '#A01F5D',
        },
        {
            icon: 'insta.png',
            href: configCompany.instagram,
            color: '#FBB216',
        },
        {
            icon: 'linkedin.png',
            href: configCompany.linkedin,
            color: '#64B232',
        },
        {
            icon: 'prom.png',
            href: configCompany.prom,
            color: '#FBB216',
        },
    ]

    const links = isHeader ? socialLinks.slice(0, 3) : socialLinks

    return (
        <div className="flex space-x-4 px-3">
            {links.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 flex items-center justify-center transition-all duration-300 bg-white`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img
                        src={social.icon}
                        className={`w-full h-full transition-all duration-300`}
                        alt="social"
                    />
                </motion.a>
            ))}
        </div>
    )
}

export default SocialLinks
