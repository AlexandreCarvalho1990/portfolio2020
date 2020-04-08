import React from 'react';
import { DiMongodb,DiHtml5,DiBootstrap,DiJsBadge,DiPostgresql,DiNodejs,DiNpm,DiGithub,DiHeroku,DiReact,DiSass } from "react-icons/di";

const SkillItem = ({ title, iconSkill}) => (
    <li className="mb-3">
        <strong className="o-font-md font-weight-normal">{title}</strong>
        <h1>{iconSkill}</h1>
    </li>
);
class Skills extends React.Component{

    state = {
        skills: [
            {id: 1, title: 'HTML5', iconSkill: <DiHtml5/>}, 
            {id: 2, title: 'NODEJS', iconSkill: <DiNodejs/>},
            {id: 3, title: 'JAVASCRIPT', iconSkill: <DiJsBadge/>},
            {id: 4, title: 'POSTGRESQL', iconSkill: <DiPostgresql/>},
            {id: 5, title: 'BOOTSTRAP', iconSkill: <DiBootstrap/>},
            {id: 6, title: 'NPM', iconSkill: <DiNpm/>},
            {id: 7, title: 'GITHUB', iconSkill: <DiGithub/>},
            {id: 8, title: 'REACT', iconSkill: <DiReact/>},
            {id: 9, title: 'SASS', iconSkill: <DiSass/>},
            {id: 10, title: 'MONGODB', iconSkill: <DiMongodb/>}
        ]
    }

    render(){
        console.log(this.state.skills[0].icon);
        return(
            <>
                <ul className="list-unstyled mb-5 o-grid">
                    {
                        this.state.skills.map(item => (
                            <SkillItem key={item.id} {...item} />
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default Skills;