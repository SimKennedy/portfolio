import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Paragraph, Pill} from '../../styles';
import {ProfileLink} from './styles';

const Me = ({user}) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i, arr) => {
            if (profile.network !== "gitconnected") {
              return (
                <ProfileLink key={profile.network}>
                  <a href={profile.url} target="_blank" rel="noreferrer noopener">
                    {profile.network}
                  </a>
                  {arr.length - 1 !== i && ' | '}
                </ProfileLink>
              )}
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;