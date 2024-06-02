export function LyricHolder(props: {
  lyrics: string;
  sName: string;
  aName: string;
}) {
  // const formattedLyrics = props.lyrics.split('\n').map((line, index) => (
  //   <p key={index} className="text-gray-600 dark:text-gray-400 text-center">
  //     {line}
  //   </p>
  // ));

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl font-bold tracking-tighter text-gray-950 dark:text-gray-50 sm:text-4xl md:text-5xl">
        {props.aName.charAt(0).toUpperCase() + props.aName.slice(1)}
      </h1>
      
      <h2 className="text-2xl mt-3 font-bold tracking-tighter text-gray-950 dark:text-gray-50 sm:text-4xl md:text-5xl">
        {props.sName.charAt(0).toUpperCase() + props.sName.slice(1)}
      </h2>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Lyrics.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          {props.lyrics}
        </p>
      </div>
    </div>
  );
}
