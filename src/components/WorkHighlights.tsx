import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const WorkHighlights = () => {
    const { t } = useLanguage()

    const projects = [
        {
            id: 1,
            title: t('work.project1.title'),
            description: t('work.project1.description'),
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            title: t('work.project2.title'),
            description: t('work.project2.description'),
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 3,
            title: t('work.project3.title'),
            description: t('work.project3.description'),
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 4,
            title: t('work.project4.title'),
            description: t('work.project4.description'),
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 5,
            title: t('work.project5.title'),
            description: t('work.project5.description'),
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            title: t('work.project6.title'),
            description: t('work.project6.description'),
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
        },
    ]

    return (
        <section
            id={'ourWork'}
            className="py-20 bg-yellow-100 border-t-4 border-yellow-600"
        >
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-black mb-4 uppercase">
                        {t('work.title')}
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto">
                        {t('work.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >
                            <a className="block group bg-white border-2 border-primary overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute top-0 right-0 bg-primary p-2">
                                        <ExternalLink
                                            size={18}
                                            className="text-white"
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-secondary-dark mb-2 uppercase group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary-dark/80 mb-4">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WorkHighlights
