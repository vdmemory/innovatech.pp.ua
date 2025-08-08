import React from 'react'
import SocialLinks from '@/components/SocialLinks.tsx'
import { configCompany } from '@/lib/configCompany.ts'
import { useLanguage } from '@/contexts/LanguageContext.tsx'

const Footer = () => {
    const { t, language } = useLanguage()

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const renderInfo = () => {
        if (language === 'en') {
            return configCompany.infoEng + ' ' + configCompany.addressEng
        }
        return configCompany.info + ' ' + configCompany.address
    }

    const firstLinks = [
        {
            title: t('footer.menu1.link1'),
            onClick: handleNavClick('blog'),
        },
        {
            title: t('footer.menu1.link2'),
            onClick: handleNavClick('ourWork'),
        },
        {
            title: t('footer.menu1.link3'),
            onClick: handleNavClick('ourWork'),
        },
        {
            title: t('footer.menu1.link5'),
            onClick: handleNavClick('ourWork'),
        },
    ]

    const lastLinks = [
        {
            title: t('footer.menu2.link2'),
            onClick: handleNavClick('blog'),
        },
        {
            title: t('footer.menu2.link3'),
            onClick: handleNavClick('aboutUs'),
        },
        {
            title: t('footer.menu2.link4'),
            onClick: handleNavClick('faq'),
        },
        {
            title: t('footer.menu2.link5'),
            onClick: handleNavClick('contacts'),
        },
    ]

    return (
        <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg-f.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.6,
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    <div className="md:col-span-2 space-y-6">
                        <div className="relative flex items-center space-x-2 py-1 gap-2">
                            <img
                                src="logo.png"
                                alt="Logo"
                                className="h-[60px] w-auto object-contain"
                            />

                            <h1 className="font-bold lg:leading-[1.7] md:leading-[1.7] text-[black]">
                                {configCompany.name}
                            </h1>
                        </div>
                        <p className="text-[black] max-w-xs ">{renderInfo()}</p>
                        <div className="flex items-center gap-4">
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            {t('footer.description')}
                        </h4>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            {t('footer.menu1.title')}
                        </h4>
                        <ul className="space-y-3">
                            {firstLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        onClick={link.onClick}
                                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground">
                            {t('footer.menu2.title')}
                        </h4>
                        <ul className="space-y-3">
                            {lastLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        onClick={link.onClick}
                                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-lg text-foreground"></h4>
                        <ul className="space-y-3"></ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
                    <div>
                        © 2025 {configCompany.name}.{' '}
                        {language === 'en'
                            ? 'All rights reserved.'
                            : 'Все права защищены.'}
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
