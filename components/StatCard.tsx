export default function StatCard({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="border border-line bg-white p-6 md:p-7">
      <p className="h-3 text-[1.05rem] text-navy">{label}</p>
      <p className="body-md mt-2 text-[0.875rem] text-graphite">{detail}</p>
    </div>
  );
}
