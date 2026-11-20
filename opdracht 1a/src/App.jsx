import './App.scss'

const loremIpsum =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi tempora voluptates eos maxime inventore suscipit ipsum reiciendis, quidem quia at accusantium aliquid nihil placeat doloremque cupiditate esse ab odio?'

function Card() {
  return (
    <div className="card">
      <div className="card-header">Lorem ipsum dolor sit amet</div>
      <div className="card-body">{loremIpsum}</div>
    </div>
  )
}

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
