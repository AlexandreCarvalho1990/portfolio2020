import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaLinkedinIn,
    FaGithub
} from 'react-icons/fa';

const SocialItem = ({ url, Icon }) => (
    <li className="m-1">
        <a className="text-white p-6" href={url}><Icon /></a>
    </li>
);

class SocialList extends React.Component{

    state = {
        socials: [
            {
                url: 'https://linkedin.com/in/alexandre-carvalho-4530721a4 ',
                Icon: FaLinkedinIn
            },
            {
                url: 'https://github.com/AlexandreCarvalho1990',
                Icon: FaGithub
            }
        ]
    }

    render(){
        return(
            <ul className={`list-unstyled d-flex ${this.props.margin ? 'mb-5' : ''}`}>
                {
                    this.state.socials.map((item, index) => (
                        <SocialItem key={index} {...item} />
                    ))
                }
            </ul>
        );
    }
}
    
export default SocialList;