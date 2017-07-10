import Layout from '../components/Mylayout.js'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
)


/* 
The following will not work however 

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default () => (
    <Layout>
       <Content />
    </Layout>
)


Reason:
url `prop` is only exposed to the page's main component. That's not exposed for other components used in the page.

But, if you need, you can pass it like this:
	export default (props) => (
	    <Layout>
	       <Content url={props.url} />
	    </Layout>
	)

*/