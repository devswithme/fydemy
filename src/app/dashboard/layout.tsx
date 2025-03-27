import {
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Toaster } from '@/components/ui/sonner'

// import AppProvider from '../components/provider/appProvider'
import HighlightProvider from '@/components/provider/HighlightProvider'
import Link from 'next/link'
import Image from 'next/image'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut } from 'lucide-react'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Toaster />
			<SidebarProvider>
				<AppSidebar />
				<nav className='fixed top-0 flex justify-between items-center w-full p-6 backdrop-blur-md md:backdrop-blur-none z-50'>
					<div className='flex gap-x-5 md:invisible'>
						<SidebarTrigger />
						<Link href='/'>
							<Image
								src='/logo.svg'
								alt='logo'
								width={90}
								height={90}
							/>
						</Link>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger
							asChild
							className='cursor-pointer'>
							<Avatar>
								<AvatarImage src='https://github.com/shadcn.png' />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>⚡️ 1200 XP</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut /> Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>

				<HighlightProvider>
					<main className='flex-1 overflow-auto px-8 py-32'>
						{children}
					</main>
				</HighlightProvider>
			</SidebarProvider>
		</>
	)
}
