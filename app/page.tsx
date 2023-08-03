
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hey! I'm Christopher Wilson</h1>
        <p>
          I'm a software developer from the USA. I currently live in Columbia,
          Mo 🇺🇸
        </p>
        <p>
          I have a B.S in Computer Science and a B.S. in Computer Information
          Systems. I have {new Date().getFullYear() - 2015} years of experience
          in building software. I have experience with DDD, SOLID, FP, and OO
          programming.
        </p>
        
        <h2>Guiding Principals</h2>
        <ul>
          <li> Complexity is incremental</li>
          <li> Composition over Inheritance</li>
          <li> Functions tell they do not ask</li>
          <li> Modules should be deep not shallow</li>
          <li> Different layers should have different abstractions</li>
          <li> Design it twice</li>
          <li> Define errors (and special cases) out of existence</li>
          <li> Software should be designed for ease of reading not ease of writi</li>ng
        </ul>
      </div>
    </main>
  );
}
