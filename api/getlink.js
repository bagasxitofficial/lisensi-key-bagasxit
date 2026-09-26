export default function handler(req, res) {
  const links = [
    'https://move2link.co/d6e38d7',
    'https://move2link.co/74b15b4',
    'https://move2link.co/8195428',
    'https://move2link.co/afd0398',
    'https://move2link.co/533d7d3',
    'https://move2link.co/ff6341a'
  ];
  const target = links[Math.floor(Math.random() * links.length)];
  res.status(200).json({ url: target });
}
