'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navItems } from '@/constants'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	useSidebar,
	SidebarFooter,
} from '@/components/ui/sidebar'
import { auth } from '@/config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { checkPremiumStatus } from '@/config/firebase/auth'
import NavUser from './nav-user'
import { AuthContext } from './provider/AuthProvider'

export function AppSidebar() {
	const pathname = usePathname()
	const { isMobile, setOpenMobile } = useSidebar()
	const [isPremium, setIsPremium] = React.useState<boolean>(false)

	const userAuth = React.useContext(AuthContext)

	// Cek status premium saat user login/logout
	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const premiumStatus = await checkPremiumStatus(user.uid)
				setIsPremium(premiumStatus)
			} else {
				setIsPremium(false)
			}
		})
		return () => unsubscribe()
	}, [])

	// Tutup sidebar saat navigasi berubah (hanya di mobile)
	React.useEffect(() => {
		if (isMobile) {
			setOpenMobile(false)
		}
	}, [pathname, isMobile])

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size='lg'
							asChild>
							<Link href='/dashboard'>
								<Image
									src='/logo.svg'
									alt='logo'
									width={90}
									height={90}
								/>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				{navItems.map((section) => (
					<SidebarGroup key={section.name}>
						<SidebarGroupLabel>{section.name}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{section.items.map((item) => (
									<SidebarMenuItem key={item.url}>
										{item.premium && !isPremium ? (
											<span className='block px-4 py-2 opacity-50 cursor-not-allowed'>
												🔒 {item.title}
											</span>
										) : (
											<SidebarMenuButton
												asChild
												isActive={pathname === item.url}>
												<Link href={item.url}>
													<item.icon />
													{item.title}
												</Link>
											</SidebarMenuButton>
										)}
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter>
				<NavUser
					user={{
						name: userAuth?.user?.name || '',
						email: userAuth?.user?.email || '',
						avatar: userAuth?.user?.avatar || '',
						isPremium,
					}}
				/>
			</SidebarFooter>
		</Sidebar>
	)
}
