import './globals.css'
import { Inter } from 'next/font/google'
import {
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import AppProvider from './provider'
import { Toaster } from '@/components/ui/sonner'
import HighlightProvider from './highlightprovider'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	icons: {
		icon: '/fav.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<Toaster />
				<AppProvider>
					<SidebarProvider>
						<AppSidebar />
						<nav className='sm:hidden fixed top-0 flex justify-between items-center w-full px-8 py-6 backdrop-blur-md'>
							<Link href='/'>
								<Image
									src='/logo.svg'
									alt='logo'
									width={90}
									height={90}
								/>
							</Link>
							<SidebarTrigger />
						</nav>

						<HighlightProvider>
							<main className='flex-1 overflow-auto px-8 py-32'>
								{children}
							</main>
						</HighlightProvider>
					</SidebarProvider>
				</AppProvider>
			</body>
		</html>
	)
}
