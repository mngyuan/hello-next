import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello Next.js" />
        <PostLink id="Learn Next.js" />
        <PostLink id="Deploy apps with Next.js" />
      </ul>
      <p>Hello Next.js</p>
    </Layout>
  );
}
