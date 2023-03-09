//HEADER SECTION

function Description() {
    return (
        <div>
            <p className="learned">
            Another sample webpage that was used to implement React in the 
            development of this site. The entire site was vanilla coded using 
            React which merges the worlds of HTML and JavaScript. This site was 
            used to learn and implement function calls that access database style 
            information to auto populate on-screen elements to alleviate redundant 
            code and excessive user input.
            </p>
        </div>
    )
}

function Header() {
    return (
    <div>
    <nav className="nav">
        <div className="logo-container">
        <img className="logo-pic" src="images/goal.png" />
        <h1 className="CompanyName">Dart Slingers</h1>
    </div>
        <ul className="nav-items">
            <li className="navlink">About</li>
            <li className="navlink">Tournements</li>
            <li className="navlink">Contact</li>
        </ul>
    </nav>
    </div>
)}

//HERO SECTION

function HeroSection() {
    return (
        <div className="HeroContainer">
            <img className="heroPic" src='images/dart_hero_image.jpg'></img>
        </div>  
    )
}

//MAIN CONTENT SECTION

function MainContent() {
    return (
        <div className="MainSection">
        <div className="intro">
            <h2>(Entire page built with React)</h2>
            <img className="reactlogo" src="images/reactlogo.png"></img>
        </div>
        <div>
            <h3 className="bulleted">What are some interesting facts about playing darts?</h3>
        <ul>
            <li className="bulleted">It all began as a way to keep soldiers from going AWOL</li>
            <li className="bulleted">The game used to be illegal</li>
            <li className="bulleted">The first boards were made out of elm</li>
            <li className="bulleted">You can use heavy or light weighted darts</li>
            <li className="bulleted">The numbers are not random</li>
        </ul>
        </div>
        </div>
)}

//REASONS SECTION

function Reasons() {
    return (
    <div className="ReasonsSection">
        <h3>Why should you love playing darts?</h3>
        <ul>
            <li className="bulleted">It increases hand-eye coordination</li>
            <li className="bulleted">It is a fantastic mental exercise</li>
            <li className="bulleted">It helps to decrease stress levels naturally</li>
        </ul>
        </div>
)}

function RankingTitleBar() {
    return (
        <div className="CardTitle">
            <h1 className="CardTitleText">Current Player World Rankings</h1>
        </div>
    )
}

//PLAYER CARD AND RANKINGS SECTION

function Cards(props) {
    return (
        <div className="Cards">
            <div className="CardSection">
            <img className="profilePic" src={props.img}></img>
        <div className="ProfileInfo">
        <p className="name">{props.name}</p>
            </div>
        <div className="Ranking">
        <img className="ratingPic" src="images/award.png"></img>
            <p className="CurrentRankText">World Ranking:</p>
            
        </div>
        <p className="CurrentRankPosition">{props.ranking}</p>
        </div></div>
    )
}

//FOOTER SECTION

function Footer() {
    return (
     <div className="footer">
     <small>2023 THT-Developer - All rights reserved</small>
     </div>
 )}

//OUTPUT FUNCTIONS TO LOAD HTML

function PlayerCards() {
    return (
    <div className="PlayerDiv">
    <Cards img="images/fallon_sherrock.jpg"
            name="Fallon Sherrock"
            ranking="31st"/>
    <Cards img="images/johnny_clayton.jpg"
            name="Johnny Clayton"
            ranking="56th"/>
    <Cards img="images/kyle_anderson.jpg"
            name="Kyle Anderson"
            ranking="13th"/>
    <Cards img="images/nathan_aspinall.jpg"
            name="Nathan Aspinall"
            ranking="28th"/>
    <Cards img="images/peter_wright.jpg"
            name="Peter Wright"
            ranking="2nd"/>
    <Cards img="images/phil_taylor.jpg"
            name="Phil Taylor"
            ranking="18th"/>
    <Cards img="images/william_oconnor.jpg"
            name="William Oconnor"
            ranking="4th"/>
    </div>)
}

function MainPage() {
    return (
    <div className="WholeBody">
    <Description />
    <Header />
    <HeroSection />
    <MainContent />
    <Reasons />
    <RankingTitleBar />
    </div>)
}

function MainFooter() {
    return (
    <div className="FooterDiv">
    <Footer />
    </div>)
}

ReactDOM.createRoot(document.getElementById("WholePage")).render(<MainPage />)
ReactDOM.createRoot(document.getElementById("PlayerSection")).render(<PlayerCards />)
ReactDOM.createRoot(document.getElementById("FooterSection")).render(<MainFooter />)
