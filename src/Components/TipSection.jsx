
const studyTechniques = [
  { title: "Pomodoro Technique", desc: "25-min focus, 5-min break cycles", icon: "🍅" },
  { title: "Active Recall", desc: "Test yourself instead of re-reading", icon: "🧠" },
  { title: "Spaced Repetition", desc: "Review at increasing intervals", icon: "🔁" },
  { title: "Mind Mapping", desc: "Visualize connections between ideas", icon: "🗺️" },
];

const timeManagement = [
  { title: "Time Blocking", desc: "Assign tasks to specific time slots", icon: "📅" },
  { title: "Priority Matrix", desc: "Urgent vs. important tasks first", icon: "🎯" },
  { title: "Two-Minute Rule", desc: "Do it now if it takes under 2 min", icon: "⚡" },
  { title: "Weekly Review", desc: "Plan ahead every Sunday evening", icon: "📋" },
];
const digitalLearning = [
  { title: "Use Online Tools", desc: "Leverage apps & resources", icon: "💻" },
  { title: "Watch Actively", desc: "Take notes while watching", icon: "📝" },
  { title: "Pause & Practice", desc: "Don't just consume content", icon: "⏸️" },
  { title: "Join Communities", desc: "Learn with others", icon: "👥" },
];

export default function TipSection() {
  return (
    <>
      <div className="py-20  "
       style={{background: "#1a1814"}}
      >
         <div className="max-w-7xl w-11/13 mx-auto pl-6 border-orange-500 border-l-4">
            <h1 className="text-white font-extrabold text-5xl ">Learning Tips</h1>
            <p className="text-orange-500 ">Boost Your Potential</p>
         </div>
         <p></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-between  mx-auto max-w-7xl w-11/13">
       <div className="p-5 flex-1">
          <div className="flex gap-2 items-center  ">
             <div className="border-slate-500 border-2 p-3 rounded-full">📚</div>
             <div><h1 className="text-white font-bold text-xl">Study techniques</h1>
             <p className="text-slate-400">Methods That Work</p></div>       
          </div>
          <hr className="text-slate-400 my-3"/>
          <ul className="flex flex-col gap-3">
             {
                studyTechniques.map((study , index)=> <li className="flex items-center gap-5" key={index}>
                        <div
                            className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-orange-500 transition-shadow duration-300"
                        > </div>                                   
                        <div>
                            <div className="font-bold text-white flex gap-2"><span>{study.icon}</span>
                            <span>{study.title}</span></div>
                            <p className="text-slate-400 ">{study.desc}</p>
                        </div>
                </li>)
             }
          </ul>
       </div>
       <div className="p-5 flex-1 ">
          <div className="flex gap-2 items-center  ">
             <div className="border-slate-500 border-2 p-3 rounded-full">📚</div>
             <div><h1 className="text-white font-bold text-xl">Digital Learning</h1>
             <p className="text-slate-400">Learn More and More</p></div>       
          </div>
          <hr className="text-slate-400 my-3"/>
          <ul className="flex flex-col gap-3">
             {
                digitalLearning.map((study , index)=> <li className="flex items-center gap-5" key={index}>
                        <div
                            className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-orange-500 transition-shadow duration-300"
                        > </div>                                   
                        <div>
                            <div className="font-bold text-white flex gap-2"><span>{study.icon}</span>
                            <span>{study.title}</span></div>
                            <p className="text-slate-400 ">{study.desc}</p>
                        </div>
                </li>)
             }
          </ul>
       </div>
       <div className="p-5 flex-1 ">
          <div className="flex gap-2 items-center  ">
             <div className="border-slate-500 border-2 p-3 rounded-full">📚</div>
             <div><h1 className="text-white font-bold text-xl">Time Management</h1>
             <p className="text-slate-400">Maximize Every Hour</p></div>       
          </div>
          <hr className="text-slate-400 my-3"/>
          <ul className="flex flex-col gap-3">
             {
                timeManagement.map((study , index)=> <li className="flex items-center gap-5" key={index}>
                        <div
                            className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-orange-500 transition-shadow duration-300"
                        > </div>                                   
                        <div>
                            <div className="font-bold text-white flex gap-2"><span>{study.icon}</span>
                            <span>{study.title}</span></div>
                            <p className="text-slate-400 ">{study.desc}</p>
                        </div>
                </li>)
             }
          </ul>
       </div>
       </div>
      </div>
    </>
  );
}