import Dropdown from './components/Dropdown'

function App() {
    return (
        <>
            <h1>House Builder</h1>
            <Dropdown options={['one', 'two', 'three']} label="numbers" id="num"></Dropdown>
        </>
    )
}

export default App
