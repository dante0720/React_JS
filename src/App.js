import './App.css';


import imagen1 from './Imagenes/Recurso 1.png'; 
import imagen2 from './Imagenes/Recurso 2.png';
import imagen3 from './Imagenes/Recurso_3-removebg-preview.png';

function App() {


  return (
    <div className="App" style={{ marginTop: "10px", marginLeft: "20px"}}>

     
      <div className="centrado-container">
      <div className="centrado"></div>
      <div className="centrado2"></div>
      </div>

      <div className="T1">
        <h1 style={{ fontSize: "65px", fontWeight: "Times new roman"}}>SICRP</h1>
      </div>
    
      <div className="T2">
        <p style={{ fontSize: "13px", fontWeight: "Times new roman"}}>
          SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA
        </p>
      </div>
      
      
      <div className="cuadroFondo"></div>
      

      <div className="botonIngresar">
        <button className='boton'>
          Ingresar
        </button>
      </div>

      <div className="App-img1">
        <img src={imagen1}/>
      </div>

      <div className= "App-img2"> 
        <img src={imagen2}/>  
      </div>

      <div className="linea"></div>
      <div className ="linea2"> </div>

      <div className='IdPatrulla'>
          <label >
            <input name="myInput" placeholder="ID PATRULLA"/>
            
          </label>
        </div>
      <div>

      </div>

      <div className='Cuadrante'> 
          <label >
            <input name="myInput" placeholder="CUADRANTE" />
          </label>
      </div>

      
      {/*--------------------------------------Segunda pagina--------------------------------------------*/}
      

      <div className="Pg2-centrado-container">
      <div className="Pg2-centrado"></div>
      <div className="Pg2-centrado2"></div>
      </div>
    
      <div className= "App1-img1"> 
        <img src={imagen1} style ={{width:'510px', height:'auto'}}/>  
      </div>
   
      <div className="cuadroBlanco"></div>
      <div className="cuadroFondo2"></div>


      <div className= "App2-img2"> 
        <img src={imagen2}/>  
      </div>

      <div className= "botonC1-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "botonC2-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "botonC3-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "botonC4-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      
      <div className= "Txt-2-img3">
        <p>REPORTE CUADRANTE</p>
      </div>

      <div className= "Txt-3-img3">
        <p>CUADRANTES</p>
      </div>

      <div className= "Txt-4-img3">
        <p>PATRULLAS</p>
      </div>

      <div className= "Txt-img3">
        <p>INICIO</p>
      </div>



        {/*--------------------------------------Tercera pagina--------------------------------------------*/}





      <div className="Pg3-centrado-container">
      <div className="Pg3-centrado"></div>
      <div className="Pg3-centrado2"></div>
      </div>


      <div className= "App3-img1"> 
        <img src={imagen1} style ={{width:'510px', height:'auto'}}/>  
      </div>
     
      <div className="CuadroBlanco"></div>
      <div className="CuadroFondo2"></div>


      <div className= "App3-img2"> 
        <img src={imagen2}/>  
      </div>

      <div className= "BotonC1-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "BotonC2-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "BotonC3-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "BotonC4-img3"> 
        <img src={imagen3} style ={{width:'40px', height:'auto'}}/>  
      </div>

      <div className= "Txt3-img3">
        <p>INICIO</p>
      </div>

      <div className= "Txt3-2-img3">
        <p>REPORTE CUADRANTE</p>
      </div>

      <div className= "Txt3-3-img3">
        <p>CUADRANTES</p>
      </div>

      <div className= "Txt3-4-img3">
        <p>PATRULLAS</p>
      </div>  
      <div className="marco1"></div>
      <div className= "Tabla">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PATRULLA</th>
            <th>CUADRANTE</th>
            <th>UBICACIÓN</th>
            <th>RECORRIDO</th>
          </tr>
        </thead>
      </table>
      </div>

    </div>  

  );
}

export default App;
