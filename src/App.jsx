function App() {
    return (
        <div>
            <div>
                <h1> Jacob Byerline</h1>
            </div>
            <div>
                <img width={"300"} height={"300"} src="./outdoor_photo.jpeg"/>
            </div>
            <div>
                <h2>Introduction:</h2>
            </div>
            <div id="bio_div">
                <p> I am a graduate student at S.D.S.U. pursuing my masters degree in CS. I am a full time software
                    engineer for DirecTV. I mainly program in React JS and Golang. I genuinely enjoy web programming
                    and I look forward to learning some new skills in this class! </p>
            </div>
            <div>
                <a href="https://github.com/jbyerline">
                    <button>Click here to go to my GitHub</button>
                </a>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

