import React from 'react'
import Button from '@material-ui/core/Button';
import logo from './../../assets/logo.svg';
import './Header.css';
import Modal from 'react-modal';
import { Tabs, Tab,  } from '@material-ui/core';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div>
            {value === index && (
                <h1>{children}</h1>
            )}

        </div>
    );
}







function Header() {

    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className='heading'>

            <img className='center' src={logo} alt='logo' id='logo-properties' />
            <Button className='login' variant='contained' color='default' onClick={openModal} >login</Button>
            <Button className='book' variant='contained' color='primary' >Book Show</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Login" />
                    <Tab label="Register" />

                
                </Tabs>
                <TabPanel value={value} index={0}>
                    <LoginForm />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RegisterForm />
                </TabPanel>
                






            </Modal>




        </div>
    )
}


export default Header;




