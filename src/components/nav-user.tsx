'use client'

import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from './ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
	ChevronsUpDown,
	Coins,
	LogOut,
	Sparkles,
	Users,
} from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { logout } from '@/hooks/useCookies'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const NavUser = ({
	user,
}: {
	user: {
		name: string
		email: string
		avatar: string
		isPremium: boolean
	}
}) => {
	const { isMobile } = useSidebar()
	const router = useRouter()

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size='lg'
							className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
							<Avatar
								className={`h-6 w-6 ${
									user.isPremium &&
									'ring-2 ring-blue-700 ring-offset-1'
								}`}>
								<AvatarImage
									src={user.avatar}
									alt={user.name}
								/>
								<AvatarFallback>
									{user.name
										.split(' ')
										.map((word) => word[0])
										.slice(0, 2)
										.join('')
										.toUpperCase()}
								</AvatarFallback>
							</Avatar>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-semibold'>
									{user.name}
								</span>
								<span className='truncate text-xs'>{user.email}</span>
							</div>
							<ChevronsUpDown className='ml-auto size-4' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
						side={isMobile ? 'bottom' : 'right'}
						align='end'
						sideOffset={4}>
						<DropdownMenuLabel className='p-0 font-normal'>
							<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
								<Avatar className='h-8 w-8'>
									<AvatarImage
										src={user.avatar}
										alt={user.name}
									/>
									<AvatarFallback>
										{user.name
											.split(' ')
											.map((word) => word[0])
											.slice(0, 2)
											.join('')
											.toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div className='grid flex-1 text-left text-sm leading-tight'>
									<span className='truncate font-semibold'>
										{user.name}
									</span>
									<span className='truncate text-xs'>
										{user.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						{user.isPremium && (
							<>
								<DropdownMenuGroup>
									<DropdownMenuItem
										disabled
										className='!opacity-100'>
										<Coins />
										1200 XP
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
							</>
						)}
						<DropdownMenuGroup>
							{!user.isPremium && (
								<DropdownMenuItem asChild>
									<Link href='https://academy.fysite.id'>
										<Sparkles />
										Upgrade to Pro
									</Link>
								</DropdownMenuItem>
							)}
							<DropdownMenuItem>
								<Users />
								Community
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								logout()
								router.refresh()
							}}>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}

export default NavUser
