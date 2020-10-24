interface QiitaInfoProps {
  qiitaLink?: string;
}

const QiitaInfo: React.FC<QiitaInfoProps> = ({ qiitaLink }) => {
  if (!qiitaLink) {
    return null;
  }
  return (
    <div className="bg-green-500 w-full my-4 p-4 text-white">
      この記事は Qiita のミラーです。リンクは <a href={qiitaLink} className="underline">こちら</a>
    </div>
  )
}

export default QiitaInfo
