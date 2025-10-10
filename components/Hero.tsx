'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ROUTES } from '@/lib/constants'

/**
 * Animation variants for staggered entrance
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

/**
 * Hero section component for the homepage.
 * Features animated entrance with call-to-action buttons.
 *
 * Implements:
 * - Framer Motion staggered animations
 * - Responsive typography
 * - Gradient background effect
 *
 * @example
 * <Hero />
 */
function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-3xl">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight text-text sm:text-6xl"
          >
            Building the future,{' '}
            <span className="text-blue">one commit at a time</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-text-muted"
          >
            I'm Matthew Kerns, a software engineer focused on building scalable, cloud-native applications. I'm passionate about writing clean code that solves real problems and creates great user experiences.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-x-6">
            <Link
              href={ROUTES.PROJECTS}
              className="rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg"
            >
              View Projects
            </Link>
            <Link
              href={ROUTES.CONTACT}
              className="text-sm font-semibold leading-6 text-text transition-colors hover:text-blue"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative h-64 w-64 sm:h-72 sm:w-72">
              <Image
                src="/images/profile-hq.jpg"
                alt="Profile picture"
                fill
                priority
                quality={100}
                sizes="(max-width: 640px) 256px, 288px"
                className="rounded-full object-cover shadow-2xl ring-4 ring-blue/20"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue to-blue-light opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}

export default memo(Hero)