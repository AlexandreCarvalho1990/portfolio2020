import React from 'react';
import Title from './../title/Title';
import withCustomScroll from './../../hoc/withCustomScroll';

const ContactItem = ({ title, body }) => (
    <li className="d-flex flex-column mb-3">
        <span className="o-font-md mb-2 o-text-purple">{title}</span>
        <span className="o-font-md">{body}</span>
    </li>
);

class ContactSide extends React.Component {

    state = {
        fullName: '',
        email: '',
        message: '',
        ContactItems: [
            {id: 1, title: 'E-mail', body: 'alexcarvalho100@gmail.com'},
            {id: 2, title: 'Address', body: 'Lisbon'},
            {id: 3, title: 'Phone', body: '+351 93 7047101'},
            {id: 4, title: 'Freelance', body: 'Available'},
        ]
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({fullName: '', email: '', message: ''});
    }

render(){
    return(
        <>
            <Title>Contact Me</Title>
            <ul className="list-unstyled o-grid">
                {
                    this.state.ContactItems.map(item => (
                        <ContactItem key={item.id} {...item} />
                    ))
                }
            </ul>
        </>
    );
}

}

export default withCustomScroll(ContactSide);