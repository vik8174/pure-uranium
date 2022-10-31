import Link from 'next/link';

export default function ClientsPage() {
  return (
    <div>
      <h1>The Clients page</h1>

      <ul>
        <li>
          <Link
            href={{
              pathname: '/clients/[clientId]',
              query: { clientId: 'jane-doe' },
            }}
          >
            Jane Doe
          </Link>
        </li>
        <li>
          <Link href="/clients/john-doe">John Doe</Link>
        </li>
      </ul>
    </div>
  );
}
