import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Clock, Mail, Phone } from 'lucide-react'
import { configCompany } from '@/lib/configCompany.ts'
import { Textarea } from '@/components/ui/textarea.tsx'

const CalendarEmbed = () => {
    const { t } = useLanguage()

    const actionEmail = `https://formsubmit.co/${configCompany.email}`

    return (
        <section
            id={'contacts'}
            className="py-20 bg-green-100 border-t-4 border-green-700 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('bg-c-2.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                }}
            ></div>

            <div className="z-10 container px-4 mx-auto text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-secondary-dark mb-4 uppercase">
                        {t('calendar.title')}
                    </h2>
                    <p className="text-secondary-dark/80 mb-8 max-w-2xl mx-auto">
                        {t('calendar.subtitle')}
                    </p>

                    <div className="max-w-3xl mx-auto bg-white border-2 border-green-600 p-6 md:p-8">
                        <form
                            action={actionEmail}
                            method="POST"
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="text-left">
                                        <Label
                                            htmlFor="name"
                                            className="text-secondary-dark uppercase"
                                        >
                                            {t('form.name')}
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            className="mt-1 border-2 border-green-600 focus:border-green-300"
                                            placeholder={t(
                                                'form.name.placeholder',
                                            )}
                                        />
                                    </div>

                                    <div className="text-left">
                                        <Label
                                            htmlFor="email"
                                            className="text-secondary-dark uppercase"
                                        >
                                            {t('form.email')}
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            className="mt-1 border-2 border-green-600 focus:border-green-300"
                                            placeholder={t(
                                                'form.email.placeholder',
                                            )}
                                        />
                                    </div>

                                    <div className="text-left">
                                        <Label
                                            htmlFor="subject"
                                            className="text-secondary-dark uppercase"
                                        >
                                            {t('form.subject')}
                                        </Label>
                                        <Input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            required
                                            className="mt-1 border-2 border-green-600 focus:border-green-300"
                                            placeholder={t(
                                                'form.subject.placeholder',
                                            )}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <Label
                                            htmlFor="message"
                                            className="text-secondary-dark uppercase"
                                        >
                                            {t('form.message')}
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            className="mt-1 border-2 border-green-600 focus:border-green-300"
                                            placeholder={t(
                                                'form.message.placeholder',
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <Label className="text-left mb-3 text-secondary-dark uppercase">
                                        {t('social.title')}
                                    </Label>

                                    <div
                                        className={'border-2 border-green-600'}
                                    >
                                        <div className="rounded-none px-4 py-2 mt-3 flex items-center gap-4">
                                            <Phone className="h-5 w-5" />
                                            <span className="text-black">
                                                {configCompany.phone}
                                            </span>
                                        </div>
                                        <div className="rounded-none px-4 py-2 mt-3 flex items-center gap-4">
                                            <Mail className="h-5 w-5" />
                                            <span className="text-black">
                                                {configCompany.email}
                                            </span>
                                        </div>
                                        <div className="rounded-none px-4 py-2 mt-3 flex items-center gap-4">
                                            <Clock className="h-5 w-5" />
                                            <span className="text-black">
                                                {t('social.clock')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 px-8 py-3 bg-green-700 text-white hover:bg-green-600/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                            >
                                {t('form.submit')}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CalendarEmbed
