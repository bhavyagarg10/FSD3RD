console.log("heelo");
const parent=document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);

// const h1=React.createElement("h1",{style:{color:'cyan'}},"ABES ENGINEERING COLLEGE");
// const l1=React.createElement("li",{},"Apple");
// const l2=React.createElement("li",{},"mango");
// const ul=React.createElement("ul",{style:{backgroundColor:'red'}},l1,l2);
// root.render(h1);
// root.render(ul);

//now using babel
const element = <h1>Hello, world!</h1>;
const l1=<li>apple</li>;
const l2=<li>mango</li>;
const ul=<ul>{l1}{l2}</ul>;

const container=(
    <div style={{backgroundColor:'cyan'}}>
        <div>{element}</div>
        <div>{ul}</div>
    </div>
)
root.render(container);





