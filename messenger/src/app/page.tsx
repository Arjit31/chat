export default function Home() {
  return (
    <div className="text-xl">
      <div className="flex items-center px-10 pt-2">
        <div className="border-solid border-black rounded-full border-2 h-28 w-28 flex items-center justify-center z-20 bg-white">
          <img src="/images/logo.png" className="h-10" />
        </div>
        <div className="ml-10 text-2xl">Quick Chat</div>
      </div>
      <hr className="h-0.5 border-0 bg-black relative bottom-8 z-0" />
      <div className="w-1/2 ml-20">
        <div className="container mt-8 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper tempor neque, ut blandit neque sodales congue.Vestibulum at diam sed velit pharetra ullamcorper id vitae ante. Nam odio nisi, porttitor id urna eu, euismod porttitor tortor. Ut nec dui libero. Sed vulputate tempus turpis, eget cursus massa ultrices et. Aenean aliquet tortor at ex auctor pellentesque. Pellentesque ultricies dictum tristique. Donec sit amet ex at tortor mollis eleifend vitae non est. Quisque laoreet nec leo at consequat. Pellentesque finibus vitae arcu ut dignissim. Mauris eu bibendum diam, et facilisis lectus.
        </div>
        <div className='flex items-center mt-8'>
          <button className='bg-black text-white border-2 border-black px-2 h-10 hover:bg-white hover:text-black active:bg-black active:text-white rounded-lg'>Login</button>
          <button className='ml-8 border-2 border-black px-2 h-10 hover:bg-black hover:text-white active:bg-white active:text-black rounded-lg'>Register</button>
        </div>
      </div>
    </div>
  );
}
