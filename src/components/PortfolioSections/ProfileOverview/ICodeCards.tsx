import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';

const ICodeCards = () => {
  const cardsData = [
    {
      title: 'I Learn',
      description:
        'As a developer, continuous learning is essential. I stay updated with the latest technologies, tools, and practices to improve my skills and stay ahead in the fast-evolving tech world.',
    },
    {
      title: 'I Think',
      description:
        'I believe in thoughtful problem-solving. Before diving into code, I take time to fully understand the problem, considering all angles to devise efficient, scalable solutions.',
    },
    {
      title: 'I Understand',
      description:
        'Understanding the underlying principles of technology, architecture, and the needs of users is key. I prioritize a deep comprehension of both business requirements and technical details to build impactful applications.',
    },
    {
      title: 'I Design',
      description:
        'Good design isn’t just about aesthetics, it’s about usability and functionality. I focus on designing intuitive, user-centric interfaces and system architectures that enhance user experience and maintain code scalability.',
    },
    {
      title: 'I Create',
      description:
        'Bringing ideas to life is my passion. From concept to completion, I create software solutions that are not only functional but also efficient, reliable, and elegant in implementation.',
    },
    {
      title: 'I Code',
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
              image='https://pbs.twimg.com/profile_images/1471137201287307273/pYRu-pbf_400x400.jpg'
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
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
