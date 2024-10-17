import Button from "./Button";


export default function SideBar({onStartAddProject, projects,onSelectProject,ProjectId}){
    return (
        <>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">your projects</h2>
        <div className="inline items-center justify-between">
            <Button title="+ Add Project" onClick={onStartAddProject} />
        </div>
        <ul className="mt-8">
        {projects.map(project => {
            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover-text-stone-200 hover-text-stone-800";
            if(project.id === ProjectId)
            {
                cssClasses += " bg-stone-800 text-stone-200"
            }
            else
            {
                cssClasses += " text-stone-400"
            }
            return(
                <li key={project.id}>
                <button className={cssClasses} 
                onClick={() =>onSelectProject(project.id)}>{project.title}</button>
                </li>
            )}
    )
        }
        </ul>
        </>
    )
}