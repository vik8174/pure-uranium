import { useRouter } from 'next/router';

export default function PortfolioProject() {
  const router = useRouter();

  console.log(router.query);
  return <div>The Portfolio Project page</div>;
}
