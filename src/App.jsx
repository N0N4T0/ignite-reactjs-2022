import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://avatars.githubusercontent.com/u/39486464?v=4',
			name: 'Lúcio Nonato',
			role: 'FrontEnd Developer'
		}, 
		content: [
			{type: 'paragraph', content: 'Fala galeraa 👋'},
			{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			{type: 'link', content: 'jane.design/doctorcare'},
		],
		publishedAt: new Date('2022-06-04 20:00')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
			name: 'Maik Brito',
			role: 'Educator @Rocketseat'
		}, 
		content: [
			{type: 'paragraph', content: 'Fala galeraa 👋'},
			{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			{type: 'link', content: 'jane.design/doctorcare'},
		],
		publishedAt: new Date('2022-06-05 00:00')
	},
	{
		id: 3,
		author: {
			avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
			name: 'Diego Fernandes',
			role: 'CTO @Rocketseat'
		}, 
		content: [
			{type: 'paragraph', content: 'Fala galeraa 👋'},
			{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			{type: 'link', content: 'jane.design/doctorcare'},
		],
		publishedAt: new Date('2022-06-04 22:00')
	}
]

export function App() {

	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar/>

				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</>
	)
}