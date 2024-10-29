import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';
import imageOne from '../../../assets/origami_animals.png';
import imageTwo from '../../../assets/origami_animals_code.png';
import imageThree from '../../../assets/wild_animals.jpg';

const ICodeCards = () => {
  const cardsData = [
    {
      title: 'I Learn',
      imageSrc: imageOne,
      description:
        'As a developer, continuous learning is essential. I stay updated with the latest technologies, tools, and practices to improve my skills and stay ahead in the fast-evolving tech world.',
    },
    {
      title: 'I Think',
      imageSrc: imageTwo,
      description:
        'I believe in thoughtful problem-solving. Before diving into code, I take time to fully understand the problem, considering all angles to devise efficient, scalable solutions.',
    },
    {
      title: 'I Understand',
      imageSrc: imageThree,
      description:
        'Understanding the underlying principles of technology, architecture, and the needs of users is key. I prioritize a deep comprehension of both business requirements and technical details to build impactful applications.',
    },
    {
      title: 'I Design',
      imageSrc: imageOne,
      description:
        'Good design isn’t just about aesthetics, it’s about usability and functionality. I focus on designing intuitive, user-centric interfaces and system architectures that enhance user experience and maintain code scalability.',
    },
    {
      title: 'I Create',
      imageSrc: imageTwo,
      description:
        'Bringing ideas to life is my passion. From concept to completion, I create software solutions that are not only functional but also efficient, reliable, and elegant in implementation.',
    },
    {
      title: 'I Code',
      imageSrc: imageThree,
      description:
        'Coding is at the core of what I do. I write clean, maintainable code, using best practices to ensure my projects are performant, secure, and scalable for future growth.',
    },
  ];

  return (
    <div className='carouselContainer'>
      {cardsData.map((card, index) => (
        <Card className='carouselCard' sx={{ maxWidth: 300 }} key={index}>
          <CardActionArea>
            <CardHeader title={card.title} />
            <CardMedia
              component='img'
              height='140'
              image={card.imageSrc}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom className='cards_texts'>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default ICodeCards;
