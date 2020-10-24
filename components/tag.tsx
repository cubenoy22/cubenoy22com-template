import translation from './tag-translate.json'

const displayTexts: { [key: string]: string } = translation;

const Tag = (props: { tag: string }) => {
  const { tag } = props;
  return <span>{displayTexts[tag] || tag}</span>
}

export default Tag
