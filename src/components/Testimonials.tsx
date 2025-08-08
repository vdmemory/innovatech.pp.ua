import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import React from 'react'

const Testimonials = () => {
    const { t } = useLanguage()

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: t('testimonial.sarah.role'),
            company: 'TechCorp',
            content: t('testimonial.sarah.content'),
            avatar: 'SJ',
        },
        {
            name: 'Michael Chen',
            role: t('testimonial.michael.role'),
            company: 'StartupXYZ',
            content: t('testimonial.michael.content'),
            avatar: 'MC',
        },
        {
            name: 'Emily Rodriguez',
            role: t('testimonial.emily.role'),
            company: 'Global Inc',
            content: t('testimonial.emily.content'),
            avatar: 'ER',
        },
    ]
    return (
        <section className="py-20 bg-red-100 border-t-4 border-primary relative overflow-hidden">
            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('hero4.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-card border border-border animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role} at{' '}
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                <blockquote className="text-foreground italic">
                                    "{testimonial.content}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
