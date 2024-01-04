import { Feed } from 'feed';
import { getBlogList } from './microcms';

export const generateRssFeed = async (): Promise<string> => {
  //環境変数など任意のリンクをbaseUrlに入れる。
    const baseUrl ='localhost:3000'
    const feed = new Feed({
        title: 'mixne',
        description: 'ガジェットやテックを中心に、しおんの思ったこと・感じたこと',
        id:baseUrl,
        link:baseUrl,
        language: 'ja',
        copyright: '© 2024 mixne',
        generator:baseUrl,
    });

 //データをとってくる。API経由やファイル経由を想定
    const posts = await getBlogList();
//各記事をフィードに追加
    posts.map((post) => {
        feed.addItem({
            title: post.title,
            description: post.content,
            image: post.eyecatch?.url,
            date: new Date(post.createdAt),
            id: `${baseUrl}/blog/${post.id}`,
            link: `${baseUrl}/blog/${post.id}`,
        });
    });

// Output: RSS 2.0
    return feed.rss2();

//今回はxmlの生成ですが、atomやjsonファイルでの生成も可能です。
//feed.atom1()でatomファイル生成
//feed.json1()でjsonのファイル生成
};