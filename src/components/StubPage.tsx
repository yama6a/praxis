type StubPageProps = {
  title: string;
};

export function StubPage({ title }: StubPageProps) {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-display font-bold text-primary mb-6">
        {title}
      </h1>
      <p className="text-lg text-gray-600">
        Diese Seite befindet sich noch im Aufbau. Bitte schauen Sie bald wieder
        vorbei.
      </p>
    </div>
  );
}
