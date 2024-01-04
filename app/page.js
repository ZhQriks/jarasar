
export default function Home() {
  const blocks = [
    {
        title: 'Education',
        description: 'none',
    },
    {
        title: 'Favorite Quote',
        description: 'currently searching',
    },
    {
        title: 'Life Purpose',
        description: 'Create a unicorn. Short term: enter YC',
    },
    {
      title: 'Interests',
      description: 'Software engineering, Clash Royale, Reverse Engineering, Horses',
    },
    {
      title: 'Email',
      description: 'dauletjarasar@gmail.com',
    },

  ];
  return (
    <main className="flex flex-col items-center justify-between">
      <p className=" font-mono text-xl text-center mt-10">
        Jarasar Daulet
      </p>
      <a className='text-center text-sm underline mt-1' href='https://github.com/zhqriks'>
        Github
      </a>
      <div className="mt-20 mb-32 flex flex-col text-center lg:w-full lg:mb-0 lg:text-left md:px-10">
        {blocks.map(({title, description}) => (
            <div
                key={title}
                className="group flex items-center mt-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700"
                rel="noopener noreferrer"
            >
              <h2 className={`text-md text-left font-semibold`}>
                {title}{':'}
              </h2>
              <p className={`ml-2 text-left text-md opacity-50`}>
                  {description}
              </p>
            </div>
        ))}
      </div>
    </main>
  )
}
