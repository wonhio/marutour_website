type BusinessCardProps = {
  title: string;
  description: string;
};

export default function BusinessCard({ title, description }: BusinessCardProps) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="h-3 text-[1.15rem] text-ink">{title}</h3>
      <p className="body-md mt-3 text-[0.925rem] text-graphite">
        {description}
      </p>
    </div>
  );
}
