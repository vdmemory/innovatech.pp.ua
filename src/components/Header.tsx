import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import SocialLinks from '@/components/SocialLinks.tsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.tsx'
import { configCompany } from '@/lib/configCompany.ts'
import { useLanguage } from '@/contexts/LanguageContext.tsx'

const Header = () => {
    const [activePage, setActivePage] = useState('features')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isDarkMode] = useState(true) // Default to light mode

    const { language } = useLanguage()

    const ukTitles = {
        aboutUs: 'Про Нас',
        blog: 'Блог',
        ourWork: 'Робота',
        faq: 'Питання',
        contacts: 'Контакти',
    }

    const engTitles = {
        aboutUs: 'About Us',
        blog: 'Blog',
        ourWork: 'Our Work',
        faq: 'FAQ',
        contacts: 'Contacts',
    }

    useEffect(() => {
        // Apply the theme to the document when it changes
        if (isDarkMode) {
            document.documentElement.classList.remove('light-mode')
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
            document.documentElement.classList.add('light-mode')
        }
    }, [isDarkMode])

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        setActivePage(page)
        const element = document.getElementById(page)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const titles = language === 'uk' ? ukTitles : engTitles

    return (
        <div className="sticky top-0 z-50 pt-0 px-4">
            <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
                <div
                    onClick={handleNavClick('home')}
                    className="w-auto md:w-auto relative flex items-center space-x-2 px-6 py-1 backdrop-blur-md gap-2 bg-[--header] cursor-pointer"
                >
                    <img
                        src="logo.png"
                        alt="Logo"
                        className="h-[60px] w-auto object-contain"
                    />

                    <h1 className="font-bold lg:leading-[1.7] md:leading-[1.7] text-[white]">
                        {configCompany.name}
                    </h1>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-3 bg-[--header] text-muted-foreground hover:text-foreground"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? (
                        <X size={24} className={'text-[white]'} />
                    ) : (
                        <Menu size={24} className={'text-[white]'} />
                    )}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center absolute left-2/3 transform -translate-x-1/2">
                    <div className=" px-1 py-1 backdrop-blur-md bg-[--header] text-[white]">
                        <ToggleGroup
                            type="single"
                            value={activePage}
                            onValueChange={(value) =>
                                value && setActivePage(value)
                            }
                        >
                            {Object.keys(titles).map((key) => (
                                <ToggleGroupItem
                                    key={key}
                                    value={key}
                                    className={cn(
                                        'px-0 py-2 transition-colors relative w-[93px] uppercase',
                                        activePage === key
                                            ? 'text-accent-foreground bg-accent'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                                    )}
                                    onClick={handleNavClick(key)}
                                >
                                    {titles[key as keyof typeof titles]}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>
                    </div>
                    <span className="mx-4 text-muted-foreground"></span>
                    <SocialLinks isHeader />
                    <span className="mx-4 text-muted-foreground"></span>
                    <LanguageSwitcher />
                </nav>

                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-24 left-4 right-4 bg-[--header] backdrop-blur-md py-0 px-0 z-50">
                        <div className="flex flex-col">
                            {Object.keys(titles).map((key) => (
                                <a
                                    key={key}
                                    href={`#${key}`}
                                    className={`px-8 py-4 text-lg transition-colors text-[white] hover:text-[white] hover:bg-green-600`}
                                    onClick={handleNavClick(key)}
                                >
                                    {titles[key as keyof typeof titles]}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
