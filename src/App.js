export const Personagens = (props) => {
  const { familia } = props;
  const personagens = [
    "Jill Valentine",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker"
  ];

  return personagens.filter((personagem) => {
    return personagem.endsWith(familia);
  });
};

export default function SearchFamily(props) {
  const Personagens = props;
  return (
    <div>
      <Personagens familia="Kennedy" />
    </div>
  );
}
