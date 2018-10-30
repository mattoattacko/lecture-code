import Link from 'next/link';

export default () =>
  <nav>
    <ul>
      <li>

        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>;
