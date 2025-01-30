'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
} from '@/components/ui/sidebar'
import Image from 'next/image'
import {
	Atom,
	Box,
	Code2,
	Download,
	FastForward,
	FileQuestion,
	Frame,
	Printer,
	SquareTerminal,
	Workflow,
} from 'lucide-react'

const navItems = [
	{
		name: 'Front-End',
		items: [
			{
				title: 'Introduction',
				url: '/frontend/introduction',
				icon: Frame,
			},
			{
				title: 'Syntax',
				url: '/frontend/syntax',
				icon: SquareTerminal,
			},
			{
				title: 'Quiz',
				url: '/frontend/quiz',
				icon: FileQuestion,
			},
			{
				title: 'Projects',
				url: '/frontend/projects',
				icon: Workflow,
			},
		],
	},
	{
		name: 'UI/UX Design',
		items: [
			{
				title: 'Introduction',
				url: '/uiux/introduction',
				icon: Frame,
			},
			{
				title: 'Frontend',
				url: '/uiux/frontend',
				icon: Code2,
			},
			{
				title: 'Quiz',
				url: '/uiux/quiz',
				icon: FileQuestion,
			},
		],
	},
	{
		name: 'Back-End',
		items: [
			{
				title: 'Introduction',
				url: '/backend/introduction',
				icon: Frame,
			},
			{
				title: 'Syntax',
				url: '/backend/syntax',
				icon: SquareTerminal,
			},
			{
				title: 'Implementation',
				url: '/backend/implementation',
				icon: FastForward,
			},
			{
				title: 'Quiz',
				url: '/backend/quiz',
				icon: FileQuestion,
			},
			{
				title: 'Projects',
				url: '/backend/projects',
				icon: Workflow,
			},
		],
	},
	{
		name: 'Full-stack',
		items: [
			{
				title: 'React.js',
				url: '/fullstack/reactjs',
				icon: Atom,
			},
			{
				title: 'Instalasi',
				url: '/fullstack/instalasi',
				icon: Download,
			},
			{
				title: 'Hello World',
				url: '/fullstack/hello-world',
				icon: Printer,
			},
			{
				title: 'Components',
				url: '/fullstack/components',
				icon: Box,
			},
		],
	},
]

export function AppSidebar() {
	const pathname = usePathname()

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size='lg'
							asChild>
							<Link href='/'>
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
