import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from './images/city.jpg';
import profileImage from './images/AllenEstes2.jpg';

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

const BackgroundImage = styled.div`
  position: relative;
  background-image: url('${backgroundImage}');
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  background-color: #333333;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`;

const ProfileImg = styled.div`
    position: absolute;
    display: block;
    margin: 0 auto;
    background-image: url('${profileImage}');
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-size: cover;
    z-index: 9999;
    border: solid 3px #FFFFFF;
    top: 100%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
`;

const WrapperName = styled.div`
  padding-top: 50px;
`;
const Name = styled.h3`
  color: #FFFFFF;
  text-align: center;
  margin-left: 10px;
`;
const ContentWrapper = styled.div`
    display: block;
    width: 100%;
`;
const Education = styled.h3`
  color: #9b869c;
  width: 90%;
  margin: 0 auto;
  border-bottom: solid 1px #FFFFFF;
`;
const Title = styled.h4`
  padding-top: 5px;
  color: #dfc48c;
  width: 90%;
  margin: 0 auto;
`;
const Italic = styled.p`
  padding-top: 5px;
  color: #FFFFFF;
  font-size: .875rem;
  font-style: italic;
  width: 90%;
  margin: 0 auto;
`;
const Professional = styled.h3`
  padding-top: 10px;
  color: #9b869c;
  width: 90%;
  margin: 0 auto;
  border-bottom: solid 1px #FFFFFF;
`;
const BulletWrapper = styled.ul`
  color: #FFFFFF;
  width: 90%;
  margin: 0 auto;
`;
const Bullet = styled.li`
  padding-top: 5px;
  font-size: 14px;
  color: #FFFFFF;
  width: 90%;
  margin: 0;
`;

const Organizations = styled.h3`
  padding-top: 10px;
  color: #9b869c;
  width: 90%;
  margin: 0 auto;
  border-bottom: solid 1px #FFFFFF;
`;

const Skills = styled.h3`
  padding-top: 10px;
  color: #9b869c;
  width: 90%;
  margin: 0 auto;
  border-bottom: solid 1px #FFFFFF;
`;

class App extends Component {
  render() {
    return (
      <Body>
        <BackgroundImage>
          <ProfileImg />
        </BackgroundImage>
      <Wrapper>
        <WrapperName>
          <Name>
            Allen Estes
          </Name>
          <ContentWrapper>
            <Education>
              Education
            </Education>
            <Title>
              Missouri Western State University
            </Title>
              <Italic>
                B.S. Computer Information Systems, ABA Business Administration (Aug 2007 – May 2012)
              </Italic>
            <Professional>
              Professional Experience
            </Professional>
            <Title>
              Cerner Corporation
            </Title>
              <Italic>
                Software Engineer | Front End Developer (April 2017 - Present)
              </Italic>
            <BulletWrapper>
                <Bullet>
                  Designing and developing web applications and components using a wide variety of web technologies such as React, Redux,
                  JavaScript, HTML, HTML5, LESS, SASS, CSS.
                </Bullet>
                <Bullet>
                  Developed applications to improve business needs using C#, and Java programming languages.
                </Bullet>
                <Bullet>
                  Developed web applications using Node.js, Redux, and axios for promise based API calls.
                </Bullet>
            </BulletWrapper>
            <Title>
              Cerner Corporation
            </Title>
              <Italic>
                Sr. System Engineer | Backend Engineer (Oct 2012 - Present)
              </Italic>
            <BulletWrapper>
                <Bullet>
                  Responsible for installation, configuration, administration and maintenance of and related to Cerner’s Enterprise Solutions.
                </Bullet>
                <Bullet>
                  Conducts programming, support, monitoring and testing of systems, including new programming languages, process routines, and
                  report generators.
                </Bullet>
                <Bullet>
                  Supports installation and maintenance of Cerner solutions, layered software, and infrastructure.
                </Bullet>
                <Bullet>
                  Responsible writing interfaces in CCL (Cerner Command Language), and troubleshooting C++ engineering code to solve issues, and
                  defects.
                </Bullet>
                <Bullet>
                  Mentored multiple software engineers regarding roles, and responsibilities.
                </Bullet>
            </BulletWrapper>
            <Title>
              Boehringer Ingelheim Vetmedica Inc.
            </Title>
              <Italic>
                IT Help Desk Consultant | End User Help Desk (July 2011 – Oct 2012)
              </Italic>
            <BulletWrapper>
                <Bullet>
                  Troubleshooting a wide range of IT related issues in both a team and individual atmosphere.
                </Bullet>
                <Bullet>
                  Proficient in setting up network printers, adding printers to the print server, working with Active Directory, imaging computers for
                  users, setting up new ShopVue terminals for labs.
                </Bullet>
                <Bullet>
                  Completed data entry into a software called Track-it. Maintained inventory in Track-it, and corrected discrepancies using SQL
                  queries on the database to find duplicate entries.
                </Bullet>
                <Bullet>
                  Reviewed inventory counts of the equipment located in storage against assigned inventory to maintain locations.
                </Bullet>
            </BulletWrapper>
            <Organizations>
              Organizations
            </Organizations>
            <Title>
              Association of Information Technology Professionals (AITP)
            </Title>
              <Italic>
                Developer | Team Lead (Spring 2011 - 2012)
              </Italic>
            <BulletWrapper>
              <Bullet>
                Lead a 1-year web development project that competed at a national level in San Antonio, Texas.
              </Bullet>
              <Bullet>
                The project went through the software development process including documentation phase, which included UML diagrams, activity
                diagrams, and use case diagrams.
              </Bullet>
              <Bullet>
                Responsibilities as lead developer included creating a schedule using Microsoft Project, designing the database using Microsoft
                Visio, writing HTML, CSS, PHP, and creating a MySQL database.
              </Bullet>
            </BulletWrapper>
              <Skills>
                Skills / Tools
              </Skills>
              <BulletWrapper>
                <Bullet>
                <strong>Languages/Technologies:</strong>
                Proficient in HTML, CSS, JavaScript, C#, SQL, React.js, Node.js, CCL; familiar with Java, C++, PHP, Groovy,
                XML.
                </Bullet>
                <Bullet>
                  <strong>Tools:</strong>
                  Atom, Active Directory, Adobe Suite, Atlassian Crucible, GitHub, Microsoft Office, Microsoft SQL Server Management
                  Studio, Microsoft Visio, Microsoft Visual Studio, Netbeans, Oracle SQL Plus, Eclipse, Brackets
                </Bullet>
                <Bullet>
                  <strong>Operating Systems:</strong>
                  AIX, HPUX, UNIX, Linux, Windows (XP, 2000, NT, Vista, 7, 8, 10), Mac (OSX)
                </Bullet>
              </BulletWrapper>
          </ContentWrapper>
        </WrapperName>
      </Wrapper>
      </Body>
    );
  }
}

export default App;
