
{/* <div>
    <div id="child1">
        <h1>Hellow child</h1>
    </div>
    <div id="child2">
        <h1>Hello child2</h1>
    </div>
</div> */}


const parent = React.createElement('div',{'id':'parent'},
[React.createElement('div',{id:'child1'},
React.createElement('h2',{},"Child2 h1")
),React.createElement('div',{id:'child2'},React.createElement('h2',{},'Child from cihid2 h2'))])

const hearder = React.createElement('h1',{},'hello world from react this is working fine')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)