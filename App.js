/*
    Copyright © 2025 - Ahmad Daniar & Muhammad Cahyo Nugroho.
    under the MIT License
    
   # This App.js document just for web development purposes
   # And it's just Have fun web application that i maked it.
   # Thank you very much for exploring this file😁🙏
*/

function MyApp() {
  var elements = React.useRef([]);
  
   var [count, setCount] = React.useState(0);
   
   React.useEffect(() => {
     document.body.style.backgroundColor = count < 0 ? 'red' : count > 0 ? 'lightblue' : 'white';
     document.body.style.backgroundImage = 'url("react.png")';
     document.body.style.backgroundRepeat = 'no-repeat';
     document.body.style.backgroundPosition = "center";
     document.body.style.width = "100vw";
     document.body.style.height = "100vh";
     document.body.style.margin = "0";
    
   }, [count]);
   
   React.useEffect(() => {
     elements.current.forEach((el) => {
     el.style.fontWeight = "bolder";
     el.style.color = count < 0 ? 'white' : 'black';
     })
   }, [count]);
   
   function handleClick(type) {
     if (type === "add") {
       setCount(() => count + 1);
     } else {
       setCount(() => count - 1);
     }
   }
   
   function Addition(props) {
     return (
       <center>
       <p className="copyright">Copyright © {props.nama} - 2025</p>
       <p className="cp-words">{props.pesan}</p>
       </center>
     );
   }
    return (
        <>
         <center>
          <h2 className="judul" ref={(el) => (elements.current[0] = el)}>Halo ReactJS!</h2>
          <p className="intro" ref={(el) => (elements.current[1] = el)}>Ini adalah contoh website yang menggunakan react.js</p>
          <button className="add" onClick={() => handleClick("add")}>Tambah</button>
          <button className="sub" onClick={() => handleClick("sub")}>Kurang</button>
          <p id="info" ref={(el) => (elements.current[2] = el)}>{
            count < 0 ? "Klik kamu telah mencapai batas :)" : count > 0 ? `Kamu telah mengklik: ${count} kali.` : "Silahkan klik tombol tambah/kurang☝️"
          }
          </p>
          </center>
          <Addition nama="FoltyzTheRobloxDev" pesan="All rights reserved."/>
        </>
      );
    }
    
  function App() {
     return (
       <MyApp />
    );
  }
  
ReactDOM.render(<App />, document .getElementById("root"));
