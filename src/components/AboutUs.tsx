import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import React from 'react'

const AboutUs = () => {
    const { t } = useLanguage()

    const teamMembers = [
        {
            name: 'Alex Thompson',
            role: t('about.team.member1.role'),
            bio: t('about.team.member1.bio'),
            initials: 'AT',
        },
        {
            name: 'Maria Garcia',
            role: t('about.team.member2.role'),
            bio: t('about.team.member2.bio'),
            initials: 'MG',
        },
        {
            name: 'David Kim',
            role: t('about.team.member3.role'),
            bio: t('about.team.member3.bio'),
            initials: 'DK',
        },
    ]
    return (
        <section
            id={'aboutUs'}
            className="py-20 bg-green-100 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div
                className="absolute inset-[-45px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('hero2.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.6,
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('about.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('about.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="animate-fade-in-up">
                        <h3 className="text-3xl font-bold text-foreground mb-6">
                            {t('about.story.title')}
                        </h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('about.story.p1')}</p>
                            <p>{t('about.story.p2')}</p>
                            <p>{t('about.story.p3')}</p>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-2 gap-6 animate-fade-in-up"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <Card className="text-center p-6 border-2 border-green-600 bg-white">
                            <CardContent className="p-0">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    150+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {t('about.stats.projects')}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 border-2 border-green-600 bg-white">
                            <CardContent className="p-0">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    98%
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {t('about.stats.satisfaction')}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 border-2 border-green-600 bg-white">
                            <CardContent className="p-0">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    10+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {t('about.stats.experience')}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 border-2 border-green-600 bg-white">
                            <CardContent className="p-0">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    24/7
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {t('about.stats.support')}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-foreground text-center mb-12">
                        {t('about.team.title')}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="text-center animate-fade-in-up border-2 border-green-600 bg-white"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <CardContent className="p-6">
                                    <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                        {member.initials}
                                    </div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        {member.name}
                                    </h4>
                                    <p className="text-green-600 font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {member.bio}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
