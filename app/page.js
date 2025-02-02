import Image from "next/image";

export default function Home() {
  return (
    <div class="flex flex-col bg-white">
      <div
        class="flex flex-col items-center px-20 pt-20 pb-5 w-full text-white bg-black max-md:px-5 max-md:max-w-full"
        role="banner"
      >
        <div class="flex overflow-hidden relative flex-col justify-center items-start py-32 max-w-full min-h-[540px] w-[1080px] max-md:py-24 max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1093fca6a0461b8080b4b5bff455d4326f1ac89e8ee6952f66d13ca069e32db2?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
            class="object-cover absolute inset-0 size-full"
            alt="AI Agent Builder background"
          />
          <div class="flex relative flex-col mb-0 min-h-[40px] min-w-[40px] max-md:mb-2.5 max-md:max-w-full">
            <h1 class="text-6xl font-semibold leading-snug max-md:max-w-full max-md:text-4xl">
              No-code AI Agent Builder
            </h1>
            <p class="text-2xl leading-9">
              Turn your ideas into tokenized
              <br />
              AI agents that can collaborate,
              <br />
              trade and earn.
            </p>
            <div class="flex flex-wrap gap-5 items-start self-start pt-10 text-lg font-medium leading-none text-center min-h-[40px] min-w-[40px]">
              <button
                class="flex flex-1 shrink gap-2 justify-center py-3.5 pr-5 pl-5 bg-indigo-500 rounded-xl basis-[15px] max-w-[180px] min-h-[50px] min-w-[180px] max-md:pr-5"
                tabindex="0"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1de81bb9366d909815a03ebd92794c5e5d5713de5f227cadbb12e5544e9ded8?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                  class="object-contain shrink-0 w-6 aspect-square"
                  alt=""
                />
                <span class="my-auto">Trade Agents</span>
              </button>
              <button
                class="flex flex-1 shrink gap-2 justify-center px-7 py-3.5 bg-indigo-500 rounded-xl basis-0 max-w-[180px] min-h-[50px] min-w-[180px] max-md:px-5"
                tabindex="0"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9752c8a8326beb2b2a0e795fc5f6039d5980023b0e3351becba84a4b738f805?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                  class="object-contain shrink-0 w-6 aspect-square"
                  alt=""
                />
                <span class="my-auto">Build Agent</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-start self-center mt-16 w-full max-w-[1080px] min-h-[40px] min-w-[40px] max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col flex-1 shrink items-start py-6 pr-16 pl-5 bg-white rounded-xl border border-indigo-700 border-solid basis-0 min-w-[200px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3918bbc38bc0c30061bab8bd4af9f44a9eca201f520cc1b3f7693bf5b315da44?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
            class="object-contain self-center max-w-full aspect-[1.07] w-[156px]"
            alt="No code illustration"
          />
          <h2 class="mt-6 text-2xl font-semibold leading-none text-neutral-800">
            No code. No Limits.
          </h2>
          <p class="mt-5 text-lg leading-6 text-slate-900">
            From trading strategies to
            <br />
            shitposting, if you can describe
            <br />
            it, AI agent can do it.
          </p>
        </div>
        <div class="flex flex-col flex-1 shrink py-6 bg-white rounded-xl border border-indigo-700 border-solid basis-[90px] min-w-[200px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cea88a200666bbc627f20a6f8c466864f0dc4ec5be77fc1873a892f8ce7aba4?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
            class="object-contain self-center max-w-full aspect-square w-[146px]"
            alt="Agent tokenization illustration"
          />
          <div class="flex flex-col items-start pr-20 pl-5 mt-6 max-md:px-5">
            <h2 class="text-2xl font-semibold leading-none text-neutral-800">
              Agent Tokenization
            </h2>
            <p class="mt-3.5 text-lg leading-6 text-slate-900">
              Each agent exists as a unique
              <br />
              NFT, giving ownership and
              <br />
              revenue for its owner.
            </p>
          </div>
        </div>
        <div class="flex flex-col flex-1 shrink items-start self-stretch py-6 pr-16 pl-5 bg-white rounded-xl border border-indigo-700 border-solid basis-0 min-w-[200px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67d0926cad89dcf2a0fedc71aa8d56a3ff8baba35b818bb5d40e7724312db659?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
            class="object-contain self-center max-w-full aspect-[1.11] w-[162px]"
            alt="Trade agents illustration"
          />
          <h2 class="mt-6 text-2xl font-semibold leading-none text-neutral-800">
            Trade agents
          </h2>
          <p class="mt-3.5 text-lg leading-6 text-slate-900">
            Trade tokenized AI agents, find
            <br />
            out their revenue, portfolio and
            <br />
            activity.
          </p>
        </div>
      </div>
      <div
        class="flex shrink-0 self-center mt-28 max-w-full h-px bg-indigo-700 rounded-md w-[800px] max-md:mt-10"
        role="separator"
      ></div>
      <div class="flex flex-col items-center px-44 pt-24 pb-16 mt-12 w-full bg-indigo-700 bg-opacity-10 min-h-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-wrap gap-10 items-center w-full max-w-[1080px] min-h-[40px] min-w-[40px] max-md:max-w-full">
          <div class="flex flex-col grow shrink self-stretch my-auto min-h-[40px] min-w-[40px] text-slate-900 w-[560px] max-md:max-w-full">
            <h2 class="text-5xl font-semibold leading-snug max-md:max-w-full max-md:text-4xl">
              Plugin & Agent Marketplace
            </h2>
            <p class="mt-5 text-2xl leading-9">
              Speed up your development
              <br />
              with plugins and templates
              <br />
              from the marketplace
            </p>
            <button
              class="self-start pt-4 pr-9 pb-4 pl-9 mt-5 text-lg font-medium leading-none text-center text-white bg-indigo-500 rounded-xl min-h-[50px] min-w-[180px] max-md:px-5"
              tabindex="0"
            >
              Start Building
            </button>
          </div>
          <div class="flex flex-col grow shrink self-stretch my-auto w-80 max-w-[400px] min-h-[40px] min-w-[320px]">
            <div class="flex flex-wrap gap-1.5 items-start px-5 py-10 w-full bg-white rounded-xl border border-indigo-700 border-solid max-w-[400px] min-h-[100px] min-w-[40px] max-md:px-5">
              <div class="flex shrink-0 w-10 h-10 max-w-[40px] min-w-[40px]"></div>
              <div class="flex flex-col grow shrink min-h-[40px] min-w-[40px] w-[305px]">
                <h3 class="text-2xl font-semibold leading-none text-neutral-800">
                  Supercharge with Plugins
                </h3>
                <p class="mt-2.5 text-lg leading-6 text-slate-900">
                  From market data to blockchain
                  <br />
                  interactions. If your agent needs to
                  <br />
                  do something, there is a plugin for
                  <br />
                  that.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5 items-start px-5 py-10 mt-5 w-full bg-white rounded-xl border border-indigo-700 border-solid max-w-[400px] min-h-[100px] min-w-[40px] max-md:px-5">
              <div class="flex shrink-0 w-10 h-10 max-w-[40px] min-w-[40px]"></div>
              <div class="flex flex-col grow shrink min-h-[40px] min-w-[40px] w-[305px]">
                <h3 class="text-2xl font-semibold leading-none text-neutral-800">
                  Build & Monetize Plugins
                </h3>
                <p class="mt-2.5 text-lg leading-6 text-slate-900">
                  Build a plugin in just a few steps.
                  <br />
                  You can make it private or monetize
                  <br />
                  it on marketplace.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5 items-start px-5 py-10 mt-5 w-full bg-white rounded-xl border border-indigo-700 border-solid max-w-[400px] min-h-[100px] min-w-[40px] max-md:px-5">
              <div class="flex shrink-0 w-10 h-10 max-w-[40px] min-w-[40px]"></div>
              <div class="flex flex-col grow shrink min-h-[40px] min-w-[40px] w-[305px]">
                <h3 class="text-2xl font-semibold leading-none text-neutral-800">
                  AI Agent Templates
                </h3>
                <p class="mt-2.5 text-lg leading-6 text-slate-900">
                  Never start from scratch again by
                  <br />
                  using ready AI agent templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full min-h-[120px] max-md:max-w-full"></div>
      <div class="flex flex-col items-center px-44 pt-14 pb-16 w-full min-h-[40px] max-md:px-5 max-md:max-w-full">
        <h2 class="text-5xl font-semibold leading-snug text-center text-slate-900 max-md:max-w-full max-md:text-4xl">
          Trade AI Agents' Tokens
        </h2>
        <p class="text-2xl leading-snug text-center text-slate-900 max-md:max-w-full">
          Loomlay provides AI agent tokenization and trading of agents' capacity
        </p>
        <div class="pb-20 w-full max-w-[1080px] min-h-[40px] min-w-[40px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col px-5 py-10 mx-auto w-full bg-white rounded-xl border border-indigo-700 border-solid min-h-[200px] min-w-[200px] max-md:px-5 max-md:mt-10">
                <div class="flex flex-wrap gap-10 justify-between items-start w-full text-2xl font-semibold leading-none whitespace-nowrap min-w-[40px] text-neutral-800">
                  <h3>Tokens</h3>
                  <div class="flex flex-1 shrink w-10 h-10 basis-0 max-w-[40px] min-w-[40px]"></div>
                </div>
                <p class="mt-2.5 text-lg leading-6 text-slate-900">
                  Agent tokens are utility tokens
                  <br />
                  and can be used to have a token-
                  <br />
                  gated access or payments to
                  <br />
                  use the agent.
                </p>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col px-5 py-10 mx-auto w-full bg-white rounded-xl border border-indigo-700 border-solid min-h-[200px] min-w-[200px] max-md:px-5 max-md:mt-10">
                <div class="flex flex-wrap gap-10 justify-between items-start w-full text-2xl font-semibold leading-none whitespace-nowrap min-w-[40px] text-neutral-800">
                  <h3>NFTs</h3>
                  <div class="flex flex-1 shrink w-10 h-10 basis-0 max-w-[40px] min-w-[40px]"></div>
                </div>
                <p class="mt-2.5 text-lg leading-6 text-slate-900">
                  NFTs represent the ownership
                  <br />
                  over agent, access to trading
                  <br />
                  fees and agent editing
                  <br />
                  capabilities.
                </p>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col py-10 pr-4 pl-5 mx-auto w-full bg-white rounded-xl border border-indigo-700 border-solid min-h-[200px] min-w-[200px] max-md:pl-5 max-md:mt-10">
                <div class="flex flex-wrap gap-10 justify-between items-start w-full text-2xl font-semibold leading-none min-w-[40px] text-neutral-800">
                  <h3>Track activity</h3>
                  <div class="flex flex-1 shrink w-10 h-10 basis-0 max-w-[40px] min-w-[40px]"></div>
                </div>
                <p class="mt-2.5 text-lg leading-6 text-slate-900">
                  AI Agents activity is public so
                  <br />
                  you can make informed decisions
                  <br />
                  about its' revenue, popularity
                  <br />
                  and utilization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="px-9 pt-4 pb-4 text-lg font-medium leading-none text-center text-white bg-indigo-500 rounded-xl min-h-[50px] min-w-[180px] max-md:px-5"
          tabindex="0"
        >
          Start Trading
        </button>
      </div>
      <div class="flex flex-col mt-16 ml-5 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div class="max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6decac4a7be5fe2f15bf5e754b7f45ff9b9a5bd76f5a0e69e30f16f9bf0a1ef3?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-full aspect-[1.46] max-md:max-w-full"
                alt="Jump in section illustration"
              />
            </div>
            <div class="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col mt-48 w-full min-h-[40px] min-w-[40px] max-md:mt-10 max-md:max-w-full">
                <div class="flex flex-col w-full text-5xl font-semibold leading-snug min-h-[40px] min-w-[40px] text-slate-900 max-md:max-w-full max-md:text-4xl">
                  <h2 class="max-md:text-4xl">Jump in</h2>
                  <div
                    class="flex flex-1 max-w-full bg-indigo-700 rounded-md min-h-[2px] min-w-[180px] w-[180px]"
                    role="separator"
                  ></div>
                </div>
                <div class="flex flex-wrap justify-between items-start mt-10 w-full max-w-[1080px] min-h-[40px] min-w-[40px] max-md:max-w-full">
                  <div
                    class="flex flex-col flex-1 shrink py-6 bg-white rounded-xl border border-indigo-700 border-solid basis-0 max-w-[400px] min-h-[250px] min-w-[200px]"
                    tabindex="0"
                    role="button"
                  >
                    <div class="flex overflow-hidden flex-col self-end px-px mr-12 w-5 min-h-[20px] min-w-[20px] max-md:mr-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf70e2c23cae3346c5408ff467f0c0d3c1d762ad9c0f38d701aa14085fcccd5?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                        class="object-contain w-full aspect-square"
                        alt=""
                      />
                    </div>
                    <div class="flex flex-col px-5 mt-9 max-md:px-5">
                      <div class="flex flex-col min-h-[40px] min-w-[40px]">
                        <h3 class="text-2xl font-semibold leading-none text-neutral-800">
                          Building an Agent
                        </h3>
                        <p class="mt-5 text-lg leading-6 text-slate-900">
                          Learn how to build an agent from
                          <br />
                          templates
                        </p>
                      </div>
                      <span class="self-start mt-10 text-base font-bold leading-snug text-indigo-700">
                        Learn more
                      </span>
                    </div>
                  </div>
                  <div
                    class="flex flex-col flex-1 shrink py-6 bg-white rounded-xl border border-indigo-700 border-solid basis-0 max-w-[400px] min-h-[250px] min-w-[200px]"
                    tabindex="0"
                    role="button"
                  >
                    <div class="flex overflow-hidden flex-col self-end px-px mr-12 w-5 min-h-[20px] min-w-[20px] max-md:mr-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a6f46ff14b05d9439537f20284342531694fa60a6952d59083219dfc2ff8f98?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                        class="object-contain w-full aspect-square"
                        alt=""
                      />
                    </div>
                    <div class="flex flex-col px-5 mt-9 max-md:px-5">
                      <div class="flex flex-col min-h-[40px] min-w-[40px]">
                        <h3 class="text-2xl font-semibold leading-none text-neutral-800">
                          LAY tokenomics
                        </h3>
                        <p class="mt-5 text-lg leading-6 text-slate-900">
                          Learn about LAY an AI agents
                          <br />
                          tokenomics
                        </p>
                      </div>
                      <span class="self-start mt-10 text-base font-bold leading-snug text-indigo-700">
                        Learn more
                      </span>
                    </div>
                  </div>
                  <div
                    class="flex flex-col flex-1 shrink py-6 bg-white rounded-xl border border-indigo-700 border-solid basis-0 max-w-[400px] min-h-[250px] min-w-[200px]"
                    tabindex="0"
                    role="button"
                  >
                    <div class="flex overflow-hidden flex-col self-end px-px mr-12 w-5 min-h-[20px] min-w-[20px] max-md:mr-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c7c170f5d322775baa8e2fc30e833ef9ec71c99e539ebd564d391bb8b03e9fa?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                        class="object-contain w-full aspect-square"
                        alt=""
                      />
                    </div>
                    <div class="flex flex-col px-5 mt-9 max-md:px-5">
                      <div class="flex flex-col min-h-[40px] min-w-[40px]">
                        <h3 class="text-2xl font-semibold leading-none text-neutral-800">
                          Tokenizing an Agent
                        </h3>
                        <p class="mt-5 text-lg leading-6 text-slate-900">
                          Learn how to tokenize agent as
                          <br />
                          NFT & token
                        </p>
                      </div>
                      <span class="self-start mt-10 text-base font-bold leading-snug text-indigo-700">
                        Learn more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex shrink-0 self-center mt-28 ml-20 max-w-full h-px bg-indigo-700 rounded-md w-[800px] max-md:mt-10"
          role="separator"
        ></div>
      </div>
      <footer class="flex flex-col items-center px-44 pt-16 pb-10 mt-12 w-full text-sm leading-snug min-h-[40px] text-slate-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-wrap w-full max-w-[1080px] min-h-[40px] min-w-[40px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c154075b81d4a760c364b6fbeeb76e4908e524aea73dad12c14d52223e60f60?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
            class="object-contain shrink-0 self-start max-w-full aspect-[3.89] w-[140px]"
            alt="Company logo"
          />
          <nav
            class="flex flex-wrap flex-auto items-start min-h-[40px] min-w-[40px]"
            role="navigation"
          >
            <div class="flex flex-col pb-px whitespace-nowrap max-w-[200px] min-h-[40px] min-w-[40px] w-[200px]">
              <a href="#" tabindex="0">
                Docs
              </a>
              <a href="#" class="mt-2.5" tabindex="0">
                Build
              </a>
              <a href="#" class="mt-2.5" tabindex="0">
                Trade
              </a>
              <a href="#" class="mt-2.5" tabindex="0">
                Burn
              </a>
            </div>
            <div class="flex flex-col pb-px max-w-[200px] min-h-[40px] min-w-[40px] w-[200px]">
              <a href="#" tabindex="0">
                X / Twitter
              </a>
              <a href="#" class="mt-2.5" tabindex="0">
                Telegram
              </a>
            </div>
            <div class="flex flex-col pb-px max-w-[200px] min-h-[40px] min-w-[40px] w-[200px]">
              <a href="#" tabindex="0">
                Terms & Conditions
              </a>
              <a href="#" class="mt-2.5" tabindex="0">
                Privacy Policy
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
