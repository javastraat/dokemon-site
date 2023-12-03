"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const command = `docker run -v dokemondata:/data \\
           -p 8080:8080 \\
           --name dokemon productiveops/dokemon`;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-gray-300">
      <h1 className="mb-6">
        <span className="sr-only">Dokemon</span>
        <img src="/logo/dokemon-dark-medium.svg" alt="Dokemon" />
      </h1>
      <h2 className="text-lg mb-12 text-center">
        Deploy compose files, start/stop containers, delete unused images, view
        logs.
      </h2>
      <h3 className="text-lg font-bold mb-4">Get Started Now</h3>
      <div className="mb-4">
        <pre className="bg-slate-800 px-8 py-4 focus:outline-none font-mono">
          {command}
        </pre>
      </div>
      <div className="mb-20">
        <button
          type="button"
          className="w-24 rounded-md bg-amber-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          onClick={() => {
            navigator.clipboard.writeText(command);
          }}
        >
          Copy
        </button>
      </div>
      <div>
        <a
          className="flex items-center gap-2 text-sm"
          href="https://discord.gg/Nfevu4gJVG"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            className="inline-block w-8 h-8"
            style={{ color: "#5865f2" }}
          />{" "}
          Community Support
        </a>
      </div>
    </main>
  );
}
