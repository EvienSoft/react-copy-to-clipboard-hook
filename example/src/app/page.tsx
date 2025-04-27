'use client';

import { useCopyToClipboard } from '@eviensoft/react-copy-to-clipboard-hook';

export default function Home() {
  const { copy, status } = useCopyToClipboard({ resetDelayMs: 3000 });

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}>
      <h1>Copy to Clipboard Example</h1>
      <button
        onClick={() => copy('Hello from Eviensoft!')}
        style={{
          marginTop: '2rem',
          padding: '10px 20px',
          backgroundColor: '#036672',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Copy Text
      </button>
      <div style={{ marginTop: '1rem' }}>
        {status.success && <p>✅ Copied successfully!</p>}
        {status.error && <p>❌ Error: {status.error}</p>}
      </div>
    </main>
  );
}
