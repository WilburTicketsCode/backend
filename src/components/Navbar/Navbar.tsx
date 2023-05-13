import Search from '../Search';
import Container from './Container'
import Logo from './Logo'
import ProfileMenu from './ProfileMenu';
import Select from './SelectContainer';

const Navbar = () => {
    return(
        <div className='w-full fixed bg-white z-10 shadow-sm rounded-b-lg'>
             <div className='py-4 border-b-[2px] rounded-b-lg'>
                <Container>
                    <Select/>
                </Container>
             </div>
        </div>
    )
}

export default Navbar;
