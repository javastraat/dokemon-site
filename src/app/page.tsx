"use client";

import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const command = `# Create directory to store Dokemon data
mkdir ./dokemondata

# Run Dokemon
sudo docker run -p 9090:9090 \\
      -v ./dokemondata:/data \\
      -v /var/run/docker.sock:/var/run/docker.sock \\
      --restart unless-stopped \\
      --name dokemon -d productiveops/dokemon:latest`;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center pt-24 pb-8 px-8 text-gray-300">
        <h1 className="mb-6">
          <span className="sr-only">Dokemon</span>
          <img src="/logo/dokemon-dark-medium.svg" alt="Dokemon" />
        </h1>
        <h2 className="text-lg mb-2 text-center font-semibold">
          Docker Container Management GUI
        </h2>
        <h3 className="mb-4 text-center">
          Deploy compose files, start/stop containers, delete unused images,
          view logs.
        </h3>
        <div className="mb-10">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=productiveops&repo=dokemon&type=star&count=true&size=large"
            width="128"
            height="30"
            title="GitHub"
          ></iframe>
        </div>

        <h3 className="text-lg font-bold mb-4">Get Started Now</h3>
        <div className="mb-4 text-xs sm:text-base">
          <pre className="bg-slate-800 p-4 sm:p-8 md:px-12 focus:outline-none font-mono">
            {command}
          </pre>
        </div>
        <div className="mb-8">
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
        <div className="mb-12">
          <a
            className="w-24 rounded-md bg-amber-600 px-2.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            href="https://docs.dokemon.dev"
            target="_blank"
          >
            Read the Documentation
          </a>
        </div>
        <div className="mb-10 text-center">
          <h4 className="font-bold mb-2">Manage Multiple Servers</h4>
          <img
            src="/screenshot-dokemon-nodes.jpg"
            className="xl:max-w-[900px]"
          />
        </div>
        <div className="mb-10 text-center">
          <h4 className="font-bold mb-2">
            Manage Variables for Different Environments
          </h4>
          <img
            src="/screenshot-dokemon-variables.jpg"
            className="xl:max-w-[900px]"
          />
        </div>
        <div className="mb-10 text-center">
          <h4 className="font-bold mb-2">Deploy Compose Projects</h4>
          <img
            src="/screenshot-dokemon-compose-up.jpg"
            className="xl:max-w-[900px]"
          />
        </div>
        <div className="mb-10 text-center">
          <h4 className="font-bold mb-2">
            Manage Containers, Images, Volumes, Networks
          </h4>
          <img
            src="/screenshot-dokemon-containers.jpg"
            className="xl:max-w-[900px]"
          />
        </div>
        <div className="mb-16 md:max-w-[580px]">
          <h3 className="text-lg font-bold mb-4 text-center">
            Production Usage
          </h3>
          <p className="mb-2">
            We recommend that you run Dokemon on a private network whenever
            possible.
          </p>
          <p>
            If you are running on a VPS with only public access, we recommend
            that you use an SSL enabled reverse proxy in front of Dokemon. See{" "}
            <a
              className="underline underline-offset-4"
              href="https://github.com/ProductiveOps/dokemon"
              target="_blank"
            >
              example configuration with Traefik.
            </a>
          </p>
        </div>
        <div className="mb-16 md:w-[580px]">
          <h3 className="text-lg font-bold mb-4 text-center">FAQ</h3>
          <ul className="text-left flex flex-col gap-6">
            <li>
              <h4 className="font-semibold">
                Is this free for commercial use?
              </h4>
              <p>Yes.</p>
            </li>
            <li>
              <h4 className="font-semibold">
                Does this support Kubernetes and Docker Swarm?
              </h4>
              <p>No, currently we only support Standalone Docker on Linux.</p>
            </li>
          </ul>
        </div>
        <ul className="flex gap-10">
          <li>
            <a
              className="flex items-center gap-2 text-sm"
              href="https://discord.gg/Nfevu4gJVG"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="inline-block w-7 h-7"
                style={{ color: "#5865f2" }}
              />{" "}
              Community Support
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 text-sm"
              href="https://github.com/productiveops/dokemon/issues"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="inline-block w-6 h-6"
                style={{ color: "#ddd" }}
              />{" "}
              Report Issues
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
