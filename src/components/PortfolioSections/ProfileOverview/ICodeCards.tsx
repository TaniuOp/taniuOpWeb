import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';

const ICodeCards = () => {
  const cardsData = [
    {
      title: 'I Learn',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Think',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Understand',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Design',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Create',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Code',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
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
