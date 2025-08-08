import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const BlogPosts = () => {
    const { t } = useLanguage()

    const posts = [
        {
            id: 1,
            title: t('blog.post1.title'),
            description: t('blog.post1.description'),
            category: t('blog.post1.category'),
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            title: t('blog.post2.title'),
            description: t('blog.post2.description'),
            category: t('blog.post2.category'),
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 3,
            title: t('blog.post3.title'),
            description: t('blog.post3.description'),
            category: t('blog.post3.category'),
            image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 4,
            title: t('blog.post4.title'),
            description: t('blog.post4.description'),
            category: t('blog.post4.category'),
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 5,
            title: t('blog.post5.title'),
            description: t('blog.post5.description'),
            category: t('blog.post5.category'),
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            title: t('blog.post6.title'),
            description: t('blog.post6.description'),
            category: t('blog.post6.category'),
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 7,
            title: t('blog.post7.title'),
            description: t('blog.post7.description'),
            category: t('blog.post7.category'),
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 8,
            title: t('blog.post8.title'),
            description: t('blog.post8.description'),
            category: t('blog.post8.category'),
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 9,
            title: t('blog.post9.title'),
            description: t('blog.post9.description'),
            category: t('blog.post9.category'),
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredPosts = posts.filter(
        (post) =>
            selectedCategory === 'All' || post.category === selectedCategory,
    )

    return (
        <section
            id={'blog'}
            className="py-20 bg-cyan-100 border-t-4 border-[#2196f3]"
        >
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-center mb-12 gap-3">
                    <h2 className="text-3xl font-bold text-secondary-dark uppercase">
                        {t('blog.title')}
                    </h2>
                    <p className="text-black/80 max-w-2xl mx-auto">
                        {t('blog.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="group border-2 border-[#2196f3] flex flex-col"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-0 left-0 bg-primary-muted px-3 py-1">
                                    <span className="text-white text-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 bg-white flex-1">
                                <h3 className="text-xl font-bold text-secondary-dark mb-2 uppercase group-hover:text-[#2196f3]">
                                    {post.title}
                                </h3>
                                <p className="text-secondary-dark/80">
                                    {post.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogPosts
