interface RecentReviewsProps {}

export function RecentReviews({}: RecentReviewsProps): JSX.Element | null {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-normal text-app-gray-100">
        Avaliações mais recentes
      </h2>
    </section>
  );
}
