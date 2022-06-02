import { Header } from "./components/Header";

import styles from './App.module.css'
import './global.css'
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

export function App() {

	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar/>

				<main>
					<Post
						author="Lúcio"
						content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima et laudantium omnis aut rem beatae maxime tempora vel totam eos ea est ratione voluptas, hic, officiis ipsam dolores enim consequuntur"
					/>
				</main>
			</div>
		</>
	)
}