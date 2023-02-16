
import './index.css'

const PersonDetails =(props)=>{
    const {data} = props 
    const {name, age, phoneNo}= data
    return( 
        <li className='person-list'>
            <div className='person-card'>
                <h4>Name: <span className='span-element'>{name}</span></h4>
                <h4>Age: <span className='span-element'>{age}</span></h4>
                <h4>Phone No: <span className='span-element'>{phoneNo}</span></h4>
            </div>
        </li>
    )
} 

export default PersonDetails