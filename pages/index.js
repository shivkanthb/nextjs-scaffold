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
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index