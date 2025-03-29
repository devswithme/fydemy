'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

// Definisi tipe untuk user
interface AuthUser {
	uid: string
	name: string | null
	email: string | null
	avatar: string | null
}

// Definisi tipe untuk context
interface AuthContextType {
	user: AuthUser | null
	setUser: (user: AuthUser | null) => void
}

// Membuat Context dengan nilai default
export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
)

export const AuthProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const [user, setUser] = useState<AuthUser | null>(() => {
		const savedUser = localStorage.getItem('user')
		return savedUser ? JSON.parse(savedUser) : null
	})

	useEffect(() => {
		const auth = getAuth()

		const unsubscribe = onAuthStateChanged(
			auth,
			(firebaseUser: User | null) => {
				if (firebaseUser) {
					const userData: AuthUser = {
						uid: firebaseUser.uid,
						name: firebaseUser.displayName,
						email: firebaseUser.email,
						avatar: firebaseUser.photoURL,
					}
					setUser(userData)
					localStorage.setItem('user', JSON.stringify(userData))
				} else {
					setUser(null)
					localStorage.removeItem('user')
				}
			}
		)

		return () => unsubscribe()
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
