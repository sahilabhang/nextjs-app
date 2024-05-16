import Link from 'next/link'
import React, { Fragment } from 'react'

export default function News() {
  return (
    <Fragment>
      <div>
        <h1>The News Page</h1>
        <ul>
          <li>
            <Link href="/news/new1">New 1</Link>
          </li>
          <li>
            <Link href="/news/new2">New 2</Link>
          </li>
          <li>
            <Link href="/news/new3">New 3</Link>
          </li>
          <li>
            <Link href="/news/new4">New 4</Link>
          </li>
          <button
            type="button"
            onClick={() => {
              throw new Error("Sentry Frontend Error");
            }}
          >
            Throw error
          </button>
        </ul>
      </div>
    </Fragment>
  );
}
