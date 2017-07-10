// import Link from 'next/link'

// const Index = () => (
// 	<div>
// 		<Link href='/about' >
// 			<button>Go to About Page</button>
// 		</Link>
// 		<p> Hello Next.js </p>
// 	</div>
// )

// export default Index


// import Layout from '../components/Mylayout.js'

// export default() => (
// 	<Layout>
// 		<p>Hello Next.js</p>
// 	</Layout>
// )


import Layout from '../components/Mylayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)