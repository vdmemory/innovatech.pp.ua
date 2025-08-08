import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/contexts/LanguageContext'
import React from 'react'

const FAQ = () => {
    const { t } = useLanguage()

    const faqs = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1'),
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2'),
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3'),
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4'),
        },
        {
            question: t('faq.q5'),
            answer: t('faq.a5'),
        },
        {
            question: t('faq.q6'),
            answer: t('faq.a6'),
        },
    ]
    return (
        <section
            id={'faq'}
            className="py-20 bg-muted/30 bg-blue-100 border-t-4 border-[#2196f3] relative overflow-hidden"
        >
            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('hero3.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-[#2196f3]"
                            >
                                <AccordionTrigger className="text-left text-foreground hover:text-[#2196f3]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQ
