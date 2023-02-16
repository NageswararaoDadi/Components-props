
import PersonDetails from './component/PersonDetails'
import './App.css';

let personData = [
      {
        id:1,
        name: 'Cherry',
        age: 22 ,
        phoneNo: 9876543210
      },
      {
        id:2,
        name: 'Nagesh',
        age : 25,
        phoneNo: 9876543211
      },
      {
        id:3,
        name: 'Mohan' ,
        age: 27,
        phoneNo: 9876543212
      },
      {
        id:4, 
        name: 'Surya', 
        age : 35,
        phoneNo: 9876543213
      }
    ]

function App() {
  return (
    <>
     <h1 className='Head'>Persons Information</h1>
    <div className="App">
      
      <ul>
        {personData.map((eachData) =>
          <PersonDetails key={eachData.id} data={eachData} />
        )}
      </ul>
    </div>
    </>
   
  );
}

export default App;
