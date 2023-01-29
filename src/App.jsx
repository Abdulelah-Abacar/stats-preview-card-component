import headerImageDes from "./images/image-header-desktop.jpg";
import headerImageMob from "./images/image-header-mobile.jpg";

function App() {

  return (
    <main className="w-full min-h-screen bg-very-dark-blue grid place-content-center">
      <section className="my-16 sm:my-0 overflow-hidden w-80 sm:w-full max-w-4xl sm:flex sm:flex-row-reverse bg-dark-desaturated-blue rounded-lg">
        <div className="sm:w-1/2 relative">
          <div className="inset-0 bg-soft-violet/10 absolute" />
          <picture>
            <source  media="(min-width: 640.99px)" srcSet={headerImageDes} />
            <img className="h-full" src={headerImageMob} alt="header" />
          </picture>
        </div>
        <div className="sm:w-1/2 py-8 px-4 sm:py-12 sm:pl-12 sm:pr-16">
          <h1 className="text-center sm:text-left text-3xl text-white font-bold font-Inter sm:my-6">Get <span className="text-soft-violet">insights</span> that help your business grow.</h1>
          <p className="text-slightly-transparent-white-100 font-Inter text-sm my-8 sm:my-0 text-center sm:text-left">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer 
            experience, and overall efficiency.
          </p>
          <div className="sm:flex items-center justify-between sm:mt-12">
            <div  className="flex items-center sm:items-start flex-col">
              <b className="text-white font-LD text-xl">10k+</b>
              <span className="text-slightly-transparent-white-200">companies</span>
            </div>
            <div className="flex items-center sm:items-start flex-col">
              <b className="text-white font-LD text-xl">314</b>
              <span className="text-slightly-transparent-white-200">templates</span>
            </div>
            <div className="flex items-center sm:items-start flex-col">
              <b className="text-white font-LD text-xl">12M+</b>
              <span className="text-slightly-transparent-white-200">queries</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
