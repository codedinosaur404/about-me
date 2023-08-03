import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          I'm a software developer with {new Date().getFullYear() - 2015} years
          of experience.
        </p>
        <p>
          I have a B.S in Computer Science and a B.S. in Computer Information
          Systems. 
        </p>
      </div>
    </main>
  );
}
