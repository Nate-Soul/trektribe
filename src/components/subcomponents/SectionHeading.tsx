
interface SectionHeadingProps {
    title: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <header className="mb-8">
        <h2 className="font-extrabold text-3xl">{title}</h2>
    </header>
  )
}

export default SectionHeading
