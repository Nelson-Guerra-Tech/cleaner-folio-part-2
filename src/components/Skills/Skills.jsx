import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title' data-aos='fade-up'>
        🎯 Skills
      </h2>
      <ul className='skills__list' data-aos='fade-up' data-aos-delay='100'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill.icon}
            {skill.space}
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
