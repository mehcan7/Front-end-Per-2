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
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-primary w-100">Primary color is #9b59b6</button>
        </div>
        <div className="col">
          <button className="btn btn-secondary w-100">Secondary color is #1abc9c</button>
        </div>
      </div>
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
