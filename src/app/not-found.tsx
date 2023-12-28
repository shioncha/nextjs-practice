import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
    <>
        <h1>記事が見つかりませんでした</h1>
        <p>URLが間違っているか、削除されたページです。</p>
        <Link href="/">トップページに戻る</Link>
    </>
    );
}