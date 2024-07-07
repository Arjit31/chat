export default function Home() {
  return (
    <div className="text-xl">
      <div className="flex items-center px-10 pt-2">
        <div className="border-solid border-black rounded-full border-2 h-28 w-28 flex items-center justify-center z-20 bg-white">
          <img src="/images/logo.png" className="h-10"/>
        </div>
        <div className="ml-10 text-2xl">Quick Chat</div>
      </div>
      <hr className="h-0.5 border-0 bg-black relative bottom-8 z-0" />
      <div className="container mt-8 ml-20 w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tempor neque, ut blandit neque sodales congue.Vestibulum at diam sed velit pharetra ullamcorper id vitae ante. Nam odio nisi, porttitor id urna eu, euismod porttitor tortor. Ut nec dui libero. Sed vulputate tempus turpis, eget cursus massa ultrices et. Aenean aliquet tortor at ex auctor pellentesque. Pellentesque ultricies dictum tristique. Donec sit amet ex at tortor mollis eleifend vitae non est. Quisque laoreet nec leo at consequat. Pellentesque finibus vitae arcu ut dignissim. Mauris eu bibendum diam, et facilisis lectus.
      </div>
      <div className="container mt-8 ml-20 w-1/2 ">
        <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 hover:border-red-500 dark:hover:border-slate-500 hover:text-neutral-200 dark:hover:text-white hover:shadow hover:bg-black active:bg-white active:text-slate-700 active:border-slate-200 transition duration-150">
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
            <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
