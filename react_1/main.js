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

function MainContent() {
    return (
        <div className="MainSection">
        <div className="intro">
            <h2>Basic static page created with React</h2>
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

function Footer() {
   return (
    <div className="footer">
    <small>2023 THT-Developer - All rights reserved</small>
    </div>
)}

function Page() {
    return (
    <div className="WholeBody">
    <Header />
    <MainContent />
    <Reasons />
    <Footer />
    </div>)
}

ReactDOM.createRoot(document.getElementById("WholePage")).render(<Page />)
