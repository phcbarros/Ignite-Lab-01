import {gql, useQuery} from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
  const {data} = useQuery(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <div className="App">
      <h1 className="text-5xl font-bold">Hello World</h1>
    </div>
  )
}

export default App
