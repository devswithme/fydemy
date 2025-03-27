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
} from '@/components/ui/sidebar'

export function AppSidebar() {
	const pathname = usePathname()
	const { isMobile, setOpenMobile } = useSidebar() // mengambil state dari SidebarContext

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
				{navItems.map((item) => (
					<SidebarGroup key={item.name}>
						<SidebarGroupLabel>{item.name}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem key={item.url}>
										<SidebarMenuButton
											asChild
											isActive={pathname === item.url}>
											<Link href={item.url}>
												<item.icon />
												{item.title}
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
		</Sidebar>
	)
}
