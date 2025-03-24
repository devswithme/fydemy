'use client'

import { ReactNode, useEffect } from 'react'
import Prism from 'prismjs'
// import 'prismjs/themes/prism-dark.css'
import { usePathname } from 'next/navigation'

const HighlightProvider = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname()
	useEffect(() => {
		Prism.highlightAll()
	}, [pathname])

	return children
}

export default HighlightProvider
