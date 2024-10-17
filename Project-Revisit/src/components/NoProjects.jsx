import NoProjects from '../../src/assets/no-projects.png';
import Button from './Button';
export default function Form({onStartAddProject}){
    return(
        <div className='mt-24 text-center w-2/3'>
        <img src={NoProjects} className="w-16 h-16 object-contain mx-auto" alt="An empty ProjectList"></img>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a Project or get started with a new one</p>
        <Button title="Create new Project" onClick={onStartAddProject}></Button>

        </div>
    );
}