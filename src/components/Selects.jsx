import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Keywest from '../assets/keywest.jpg';
import Selectcard from './Selectcard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <Selectcard image={BoraBora} text='Bora Bora'/>
        <Selectcard image={BoraBora2} text='Bora Bora '/>
        <Selectcard image={Maldives} text='Maldives'/>
        <Selectcard image={Maldives2} text='Maldives'/>
        <Selectcard image={Keywest} text='Key West'/>
        <Selectcard image={Keywest} text='Key West'/>
    </div>
  )
}

export default Selects;