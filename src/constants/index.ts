import {
	Atom,
	Box,
	Code2,
	Download,
	FastForward,
	FileQuestion,
	Forward,
	Frame,
	LogIn,
	Printer,
	Rocket,
	SquareTerminal,
	Wand,
	Waypoints,
	Workflow,
} from 'lucide-react'

export const navItems = [
	{
		name: 'UI/UX Design',
		items: [
			{
				title: 'Warm up',
				url: '/dashboard/uiux/warm-up',
				icon: LogIn,
			},
			{
				title: 'Introduction',
				url: '/dashboard/uiux/introduction',
				icon: Frame,
			},
			{
				title: 'Frontend',
				url: '/dashboard/uiux/frontend',
				icon: Code2,
			},
			{
				title: 'Quiz',
				url: '/dashboard/uiux/quiz',
				icon: FileQuestion,
			},
			{
				title: 'Projects',
				url: '/dashboard/uiux/projects',
				icon: Workflow,
			},
		],
	},
	{
		name: 'Front-End',
		items: [
			{
				title: 'Introduction',
				url: '/dashboard/frontend/introduction',
				icon: Frame,
			},
			{
				title: 'Syntax',
				url: '/dashboard/frontend/syntax',
				icon: SquareTerminal,
			},
			{
				title: 'Quiz',
				url: '/dashboard/frontend/quiz',
				icon: FileQuestion,
			},
			{
				title: 'Projects',
				url: '/dashboard/frontend/projects',
				icon: Workflow,
			},
		],
	},
	{
		name: 'Back-End',
		items: [
			{
				title: 'Introduction',
				url: '/dashboard/backend/introduction',
				icon: Frame,
			},
			{
				title: 'Syntax',
				url: '/dashboard/backend/syntax',
				icon: SquareTerminal,
			},
			{
				title: 'Implementation',
				url: '/dashboard/backend/implementation',
				icon: FastForward,
			},
			{
				title: 'Quiz',
				url: '/dashboard/backend/quiz',
				icon: FileQuestion,
			},
			{
				title: 'Projects',
				url: '/dashboard/backend/projects',
				icon: Workflow,
			},
		],
	},
	{
		name: 'Full-Stack',
		items: [
			{
				title: 'React.js',
				url: '/dashboard/fullstack/reactjs',
				icon: Atom,
			},
			{
				title: 'Instalasi',
				url: '/dashboard/fullstack/instalasi',
				icon: Download,
			},
			{
				title: 'Hello World',
				url: '/dashboard/fullstack/hello-world',
				icon: Printer,
			},
			{
				title: 'Components',
				url: '/dashboard/fullstack/components',
				icon: Box,
			},
			{
				title: 'Props',
				url: '/dashboard/fullstack/props',
				icon: Forward,
			},
			{
				title: 'Props Quiz',
				url: '/dashboard/fullstack/quiz-props',
				icon: FileQuestion,
			},
			{
				title: 'Hooks',
				url: '/dashboard/fullstack/hooks',
				icon: Wand,
			},
			{
				title: 'Hooks Quiz',
				url: '/dashboard/fullstack/quiz-hooks',
				icon: FileQuestion,
			},
			{
				title: 'API',
				url: '/dashboard/fullstack/api',
				icon: Waypoints,
			},
			{
				title: 'API Quiz',
				url: '/dashboard/fullstack/quiz-api',
				icon: FileQuestion,
			},
			{
				title: 'TVMaze',
				url: '/dashboard/fullstack/projects',
				icon: Workflow,
			},
			{
				title: 'Deploy',
				url: '/dashboard/fullstack/deploy',
				icon: Rocket,
			},
		],
	},
]
