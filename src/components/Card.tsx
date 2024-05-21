import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface GameCardProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

const GameCard: React.FC<GameCardProps> = ({src, alt,title, desc}) => (
  <Card
    hoverable
    style={{ width: 240, maxHeight: 340, margin: 10 }}
    cover={<img alt={alt} src={src} />}
  >
    <Meta title={title} description={desc} />
  </Card>
);

export default GameCard;