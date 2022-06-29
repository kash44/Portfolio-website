import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import { useState, useRef, useEffect, useCallback } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Project } from "./ProjectData";

// type SidebarType = {
//   isOpen: boolean;
//   project?: Project;
// };

function App() {
  // const [showSidebar, setShowSidebar] = useState<SidebarType>({
  //   isOpen: false,
  // });
  const [selectedProject, setSelectedProject] = useState<Project>({} as Project);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar(prev => !prev), []);

  // const toggleSidebar = (project?: Project) => {
  //   setShowSidebar((prev) => ({ isOpen: !prev.isOpen, project }));
  //   console.log("project", project);
  // };
  const sidebarRef = useRef<HTMLDivElement>(null!);
  const hamburgerRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        showSidebar &&
        sidebarRef.current &&
        hamburgerRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, [showSidebar, toggleSidebar]);

  // useEffect(() => {
  //   const handler = (event: MouseEvent) => {
  //     if (
  //       showSidebar.isOpen &&
  //       sidebarRef.current &&
  //       hamburgerRef.current &&
  //       !sidebarRef.current.contains(event.target as Node) &&
  //       !hamburgerRef.current.contains(event.target as Node)
  //     ) {
  //       toggleSidebar();
  //     }
  //   };

  //   window.addEventListener("mousedown", handler);

  //   return () => {
  //     window.removeEventListener("mousedown", handler);
  //   };
  // }, [showSidebar.isOpen]);

  return (
    <div>
      <Navbar
        ref={hamburgerRef}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setSelectedProject={setSelectedProject}
      />
      <Home />
      <About />
      <Projects toggleSidebar={toggleSidebar} setSelectedProject={setSelectedProject} />
      <Contact />

      <Sidebar
        ref={sidebarRef}
        isOpen={showSidebar}
        project={selectedProject}
      />
    </div>
    // <div>
    //   <Navbar
    //     toggleSidebar={toggleSidebar}
    //     ref={hamburgerRef}
    //     showSidebar={showSidebar.isOpen}
    //   />
    //   <Home />
    //   <About />
    //   <Projects toggleSidebar={toggleSidebar} />
    //   <Contact />

    //   <Sidebar
    //     isOpen={showSidebar.isOpen}
    //     ref={sidebarRef}
    //     project={showSidebar.project}
    //     toggleSidebar={toggleSidebar}
    //   />
    // </div>
  );
}

export default App;
