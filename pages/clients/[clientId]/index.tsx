import { useRouter } from 'next/router';

export default function ClientProjectPage() {
  const router = useRouter();

  const onLoadProject = () => {
    router.push('/clients/jane-doe/demo-project');
  };

  return (
    <div>
      <h1>The Client&apos;s Info Page</h1>
      <button onClick={onLoadProject}>Load Project</button>
    </div>
  );
}
