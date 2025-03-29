'use client'

import { ReactNode, useEffect, useState } from 'react'
import Prism from 'prismjs'
// import 'prismjs/themes/prism-dark.css'
import { usePathname } from 'next/navigation'

const HighlightProvider = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname()
	const [mounted, setMoumted] = useState(false)
	useEffect(() => {
		Prism.highlightAll()
		setMoumted(true)
	}, [pathname, mounted])

	return mounted ? children : ''
}

export default HighlightProvider
