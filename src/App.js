import React from 'react';
import { Card, Row, Col } from 'antd';
import './App.css';
const youtubeLinks6th = [
  { title: 'Multiplication and Division Rule', url: 'https://youtu.be/U4Gd7VPOIhI?si=7w6nz1FfGv3nk5-h' },
  { title: ' Proper and Improper fraction', url: 'https://youtu.be/wktkuCnRidU?si=AngOxaW6ogTsJC9I' },
  { title: 'BODMAS', url: 'https://youtu.be/cdToeQj9MAU?si=ccJWSuzQzH-sLEZq' },
  { title: 'Addition Rule', url: 'https://youtu.be/U61WED_jd44?si=z30E8yNKmf07U8Cl' },
  { title: 'Circle', url: 'https://youtu.be/JXrJI5wUmyM?si=i0QyDJYmMNeZglDR' },
  { title: 'Number line', url: 'https://youtu.be/9-Il4eC7V2U?si=DVsEHcnfOfd5RSHG' },
  { title: 'Complement and Super complement angle', url: 'https://youtu.be/D38ezP7r0UY?si=b1vzZ6t18CQ4Whju' },
  { title: 'Square', url: 'https://youtu.be/NJ5QixY2zQQ?si=F4GsoxiF70-cBQIQ' },
  { title: 'Time', url: 'https://youtu.be/vKwby0rWkDI?si=RvRO97UyTkmIiDpv' },
  { title: 'Rectangle', url: 'https://youtu.be/LQIZzohgyaU?si=cprqhj8wTZQAhS-N' },
  { title: 'Finding the middle term', url: 'https://youtu.be/INFUnotNi7c?si=UjF3_cs09f7Aa9Dy' },
  { title: 'Average', url: 'https://youtu.be/daiR0oTA0tU?si=oicDl9B8fJh8oUsX' },
  { title: 'BODMAS Rule', url: 'https://youtu.be/C-bqBpzXXno?si=d8SScRtLJLPhr-W7' },
  { title: 'BODMAS', url: 'https://youtu.be/zKOTKY0GBqM?si=F3uXkHqKS1vGNAY5' },
  { title: 'Decimal Number Addition and Subtraction', url: 'https://youtu.be/c97gG1VwSbk?si=huf4_NsLJ6ss7IVI' },
  { title: 'Addition Rule', url: 'https://youtu.be/EKiRQ-qsb8k?si=Cjl6hNDsVNJswbh9' },
  { title: 'Addition Rule with example sums', url: 'https://youtu.be/mVr-ul7d59s?si=t7iK-KGhBEuGi2yb' }
];

const youtubeLinks7th = [
  { title: 'Fraction Numbers Multiplication and division', url: 'https://youtu.be/Qi7ITsY3mM0?si=6MbKMjApRcOYiEhE' },
  { title: 'Prime Numbers', url: 'https://youtu.be/SZMdlxKMNs4?si=MySpEuBal9ACj-Iy' },
  { title: 'Butterfly Method Fraction Add & Sub', url: 'https://youtu.be/I6LsurghSBI?si=o808g2K-1D6bXKdK' },
  { title: 'Divisible Terms', url: 'https://youtu.be/_0vI8jgxuwc?si=DBCinthkQlvDzVI7' },
  { title: 'Finding HCF', url: 'https://youtu.be/vDVMkrECSEg?si=Aq5PLpOu5c2KKi1C' },
  { title: 'LCM Basics', url: 'https://youtu.be/M2SoD4sjJTs?si=aQofPlEwpNFhDRQQ' },
  { title: 'Area and Volume', url: 'https://youtu.be/UiAdK5fTmOo?si=uTuruiAYgBvHkY2E' },
  { title: 'Types of Angles', url: 'https://youtu.be/CtJ6HOmyqrQ?si=NjKuBNqkDfz2aLhs' },
  { title: 'Profit Loss', url: 'https://youtu.be/KtYkrORtiB4?si=BkZrzrWmhiWGzH4R' },
  { title: 'Types of Quadrilateral', url: 'https://youtu.be/ZznYTp5ceoI?si=uCX8k_rNjMl62Lpo' },
  { title: 'Calender Sum', url: 'https://youtu.be/KWBW3ydWBgY?si=y-5mzsLo5Qk3d67g' },
  { title: 'Decimal Numbers Multiplication and Divison', url: 'https://youtu.be/WkMhnd9NZn0?si=Ipnfwh5kamznhjfI' }
];

const youtubeLinks8th = [
  { title: 'Mixed fraction to fraction', url: 'https://youtu.be/DZkNmnLhqxA?si=sYL5RStsmYOBcK4p' },
  { title: 'Variables Addition and Subtraction', url: 'https://youtu.be/Wlt-mRsaGLs?si=mcOt-_0mgCE68BJx' },
  { title: 'Fraction to Mixed Fraction', url: 'https://youtu.be/u1Oz9YPRkY8?si=ev9tK0TtqYpfePIc' },
  { title: 'Variables multiplication and division', url: 'https://youtu.be/iibPtei3cu8?si=6Xu_R2JfMB8VrTSN' },
  { title: 'Simplification', url: 'https://youtu.be/AFb_J-Q46lE?si=KnWfBUgmL20HgURl' },
  { title: 'Conversion table', url: 'https://youtu.be/0hLj66BlIiI?si=yAQ4IL7AR5bCV48P' },
  { title: 'Factor tree', url: 'https://youtu.be/17xPaUSlESQ?si=LWvTTu36Xp5F5fuz' },
  { title: 'Round the value', url: 'https://youtu.be/QfylB-BMoBg?si=rGII-OwoFy-vsbC8' },
  { title: 'L division', url: 'https://youtu.be/7liwkRy98tY?si=SnaTkeiS9qzD3u4o' },
  { title: 'Equation Solving', url: 'https://youtu.be/OR1LubyeFAw?si=gEYanm3QW2msTCkB' },
  { title: 'Finding the value', url: 'https://youtu.be/qi1gIENvvyo?si=exKJ7VNYmPMOh9qK' },
  { title: 'Square and Cube', url: 'https://youtu.be/UPdmn7fKKv4?si=icjLiD9IQ85QDY9L' }
];

const youtubeLinks9th = [
  { title: 'Distance,Speed,Time Formula', url: 'https://youtu.be/RnQE0YBqwLM?si=sQEOBvAdSmqu0utu' },
  { title: 'Trigonometry triangle', url: 'https://youtu.be/YXXyP6eo9l8?si=WrFP1lTqVTjk63_M' },
  { title: 'Similar Triangle', url: 'https://youtu.be/f0l-NweFvEM?si=WNkBJsJaZVeYVN2e' },
  { title: 'Two equation solving', url: 'https://youtu.be/N4FSJvWtJfg?si=Si7Q0pn08E2IeDkH' },
  { title: 'Percentage', url: 'https://youtu.be/ibTDg1nRBh8?si=02tv3QpDfbpCEGvN' },
  { title: 'Commutative Property', url: 'https://youtu.be/NLtxhtt1S4U?si=1ikC35I9Y70jjKvI' },
  { title: 'Distributive Property', url: 'https://youtu.be/U61vDbzdE1A?si=FEPL0dkBsRlFttuM' },
  { title: 'Associative Property', url: 'https://youtu.be/yblY18r0KVg?si=HA6i5b-ivru7dcSX' },
  { title: 'Probability', url: 'https://youtu.be/Dh2BovewVn0?si=FlTN0GeJVB70mDYU' },
  { title: 'Sin cos tan Table', url: 'https://youtu.be/GZJ73Az_V20?si=OXTs5mjmfuS5HmrD' },
  { title: 'Factorise', url: 'https://youtu.be/DLdJKcadQ7I?si=6okYZVwzgd4aCeX2' },
  { title: 'Union Intersection', url: 'https://youtu.be/hYRkv-Prs7o?si=irhUTdcrCw4Qy6KX' },
  { title: 'Algebra Formulas', url: 'https://youtu.be/RRcS0ggXF3Y?si=WnSoHTAXUtNAzpAr' }
];

// Helper function to extract YouTube video ID from URL
const getYoutubeVideoId = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))((\w|-){11})/);
  return match ? match[1] : null;
};

function YouTubeLinksSection({ title, links }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <Row gutter={[16, 16]}>
        {links.map((video, index) => {
          const videoId = getYoutubeVideoId(video.url);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

          return (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                title={video.title}
                bordered={false}
                cover={<img alt={video.title} src={thumbnailUrl} />}
              >
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <YouTubeLinksSection title="Foundation Maths - 6th Class Videos" links={youtubeLinks6th} />
        <YouTubeLinksSection title="Foundation Maths - 7th Class Videos" links={youtubeLinks7th} />
        <YouTubeLinksSection title="Foundation Maths -8th Class Videos" links={youtubeLinks8th} />
        <YouTubeLinksSection title="Foundation Maths -9th Class Videos" links={youtubeLinks9th} />
      </header>
    </div>
  );
}

export default App;