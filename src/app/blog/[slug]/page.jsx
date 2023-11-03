import { Header } from "@/components/header";

export default function Article({params}) {
	return (
		<>
			<Header />
			<div>
				<h1>記事の詳細</h1>
				<p>記事のスラッグ: {params.slug}</p>
			</div>
		</>
	);
}