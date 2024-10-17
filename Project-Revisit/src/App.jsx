import SideBar from './components/SideBar';
import NoProject from './components/NoProjects.jsx';
import NewProject from './components/NewProject.jsx';
import {useState} from 'react';
import SelectedProject from './components/SelectedProject.jsx';

const project ={
  selectedProjectId : undefined,
  projectDetails:[]
};
function App() {
  const [projectState, setProjectState] = useState(project);
  function handleProjectAddState(){
    setProjectState(prevProjectState =>{
      return {
        ...prevProjectState,
        selectedProjectId : null,
      }
    })
  }
  function handleProjectAddedState(addedProject){
    const projectId=Math.random();
    setProjectState(prevProjectState =>{
        const newProject ={
          ...addedProject,
          id: projectId
        }
        return{
          ...prevProjectState,
          selectedProjectId : undefined,
          projectDetails:[...prevProjectState.projectDetails,newProject]
        }
    })
  }
  function handleCancelAddProject(){
    setProjectState(prevProjectState =>{
      return {
        ...prevProjectState,
        selectedProjectId: undefined
      }
    })
  }
  function handleSelectProject(id){
    setProjectState(prevProjectState =>{
      return {
        ...prevProjectState,
        selectedProjectId: id
      }
    })
  }
  const selectedProjectDetails = projectState.projectDetails.find(proj => proj.id === projectState.selectedProjectId);

  let content = <SelectedProject projectDetail={selectedProjectDetails} />;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleProjectAddedState} onCacel={handleCancelAddProject}/>;
  } 
  else if(project.selectedProjectId === undefined)
  {
    content =<NoProject onStartAddProject={handleProjectAddState}/>;
  }
 
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <SideBar onStartAddProject={handleProjectAddState} 
      projects={projectState.projectDetails} 
      onSelectProject={handleSelectProject} ProjectId= {projectState.selectedProjectId}/>
      </aside >
      {console.log('whats rendering for content' +content)}
      {content}
      </main>
    </>
  );
}

export default App;
