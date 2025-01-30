'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import React, {
	createContext,
	ReactNode,
	useContext,
	useRef,
	useState,
} from 'react'

export const AppContext = createContext<
	| {
			isLogin: boolean
			setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
	  }
	| undefined
>(undefined)

// Custom hook to access the context
export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error(
			'useAppContext must be used within an AppProvider'
		)
	}
	return context
}

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [isLogin, setIsLogin] = useState(false)
	const pwd = useRef(null)

	return (
		<AppContext.Provider value={{ isLogin, setIsLogin }}>
			{!isLogin ? (
				<Dialog open={true}>
					<DialogContent className='sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>Verification</DialogTitle>
							<DialogDescription>
								Enter the password to access the modules.
							</DialogDescription>
						</DialogHeader>
						<Input
							placeholder='***'
							type='password'
							ref={pwd}
						/>
						<DialogFooter>
							<Button
								type='submit'
								onClick={() => {
									if (
										// @ts-expect-error prop value is exist
										pwd?.current?.value ===
										process.env.NEXT_PUBLIC_PWD
									)
										setIsLogin(true)
								}}>
								Login
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			) : (
				children
			)}
		</AppContext.Provider>
	)
}

export default AppProvider
